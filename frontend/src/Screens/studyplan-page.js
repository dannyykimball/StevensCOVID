import React, { useState, useContext, useEffect } from "react";
import { useLocation } from 'react-use';
import Board from "react-trello";
import { UserContext } from '../Store';
import axios from "axios";


let template =
{
  "lanes": [
    {
      "id": "TODO",
      "title": "Recommended Tasks",
      "label": "0/10",
      "style": {
        "width": 320
      },
      "cards": [

      ]
    },
    {
      "id": "WIP",
      "title": "In Progress",
      "label": "0/10",
      "style": {
        "width": 320
      },
      "cards": [

      ]
    },
    {
      "id": "COMPLETED",
      "title": "Completed",
      "style": {
        "width": 320
      },
      "label": "2/5",
      "cards": [

      ]
    }
  ]
}

const default5though8 = [
  {
    "id": "2133629213798213789121",
    "title": "Math",
    "label": 2 + " Hours",
    "description": "Practice on Khan Academy, and do some lessons for your grade. Play some exercises on Math Games for your grade. "
  },
  {
    "id": "272324342241233",
    "title": "Language Arts",
    "label": 2 + " Hours",
    "description": "Do an activity or two on Word Game Time for your grade."
  },
  {
    "id": "3452345243542354325453",
    "title": "Language Arts",
    "label": 2 + " Hours",
    "description": "Read a book of your choice, nonfiction or fiction! If you have time, write a quick summary about what you read."
  },
  {
    "id": "1213445767",
    "title": "Science",
    "label": 2 + " Hours",
    "description": "Watch Crash Course Kids videos about the topic of your grade. Take notes and make an outline of what you learned."
  },
  {
    "id": "4325324523454325342543254235",
    "title": "Social Studies",
    "label": 1 + " Hours",
    "description": "Watch the CNN Student News With Carl Azuz to get the daily news updates in 10 minutes! Summarize what you learned from that segment if you have time."
  },
  {
    "id": "34523452435423554354324325453",
    "title": "Fun Activities",
    "label": 1 + " Hours",
    "description": "If the weather is nice, get outside and exercise! Get moving or get some fresh air and journal or meditate."
  },
]

export default function StudyEngine() {
  const [data, setData] = useState()
  const [loading, setLoading] = useState(true)
  const [user, setUser] = useContext(UserContext);
  const url = useLocation();


  function buildBoard(tasks) {
    let newData = template;

    let wip = [];
    let todo = [];
    let completed = [];
    for (var i = 0; i < tasks.length; i++) {
      let newCard = {
        "id": tasks[i]._id,
        "title": tasks[i].name,
        "label": tasks[i].duration + " Hours",
        "description": tasks[i].description
      }
      if (tasks[i].status === "TODO") {
        todo.push(newCard)
      } else if (tasks[i].status === "COMPLETED") {
        completed.push(newCard)
      } else if (tasks[i].status === "WIP") {
        wip.push(newCard)
      }
    }
    newData.lanes[0].cards = default5though8;
    newData.lanes[1].cards = wip;
    newData.lanes[2].cards = completed;

    setData(newData)
    setLoading(false)
  }


  function fetchTasks() {
    console.log(user._id)
    return new Promise(resolve => {
      axios
        .get(url.protocol + "//" + url.hostname + ":5000" + "/Task/GetAll/" + user._id)
        .then((res) => {
          console.log(res.data)
          resolve(res.data)
        })
        .catch((err) => {
          console.error(err)
        })
    });
  }

  async function onPageLoad() {
    let tasks = await fetchTasks()
    if (tasks.isSuccess) {
      buildBoard(tasks.data)
    }
  }

  useEffect(() => {
    if (user) {
      onPageLoad();
    }
  }, []);

  return (
    <div id="EntryPage">
      {user ? <h1>Study Plan for {user.year}th Grade </h1>
        : <h1>Study Plan</h1>}
      {loading ? <h1>Please login to use the study plan</h1>
        : <Board data={data} draggable />}

    </div>
  );
}
