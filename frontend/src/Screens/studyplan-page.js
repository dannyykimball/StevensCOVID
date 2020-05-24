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
      "label": "0/10",
      "cards": [

      ]
    }
  ]
}

const default5AndUnder = [
  {
    "id": "2133629213798214353455343789121",
    "title": "Math",
    "label": 0.5 + " Hours",
    "description": "Practice on Khan Academy, and do some lessons for your grade."
  },
  {
    "id": "272324342241324234234234234234233",
    "title": "Grammar",
    "label": 0.5 + " Hours",
    "description": "Read lessons and do practice sets and quizzes to make sure you know the material"
  },
  {
    "id": "3452345243542324234234354325453",
    "title": "Science",
    "label": 0.5 + " Hours",
    "description": "Time to learn about science! Read a lesson and then do the experiment and/or project related to the lesson. https://www.sciencekids.co.nz/lessonplans.html"
  },
  {
    "id": "12134457324234243432423467",
    "title": "Social Studies",
    "label": 0.5 + " Hours",
    "description": "Go one unit at a time, learn a lesson, then do the quiz and vocabulary for it. If you’re even more interested, you can do the related reading! https://www.brainpop.com/socialstudies/ "
  },
  {
    "id": "4325324523454325323423442543254235",
    "title": "Arts and Crafts",
    "label": 0.5 + " Hours",
    "description": "Let’s do some arts and crafts! Pick a class to do and have fun doing it! https://www.kitchentableclassroom.com/online-art-classes-for-kids/ "
  },
  {
    "id": "34523452432343245423554354324325453",
    "title": "Fun Activities",
    "label": 1 + " Hours",
    "description": "If the weather is nice, get outside and exercise! Get moving or get some fresh air and journal or meditate."
  },
]

const default5though8 = [
  {
    "id": "2133629213798214353455343789121",
    "title": "Math",
    "label": 2 + " Hours",
    "description": "Practice on Khan Academy, and do some lessons for your grade. Play some exercises on Math Games for your grade. "
  },
  {
    "id": "272324342241324234234234234234233",
    "title": "Language Arts",
    "label": 2 + " Hours",
    "description": "Do an activity or two on Word Game Time for your grade."
  },
  {
    "id": "3452345243542324234234354325453",
    "title": "Language Arts",
    "label": 2 + " Hours",
    "description": "Read a book of your choice, nonfiction or fiction! If you have time, write a quick summary about what you read."
  },
  {
    "id": "12134457324234243432423467",
    "title": "Science",
    "label": 2 + " Hours",
    "description": "Watch Crash Course Kids videos about the topic of your grade. Take notes and make an outline of what you learned."
  },
  {
    "id": "4325324523454325323423442543254235",
    "title": "Social Studies",
    "label": 1 + " Hours",
    "description": "Watch the CNN Student News With Carl Azuz to get the daily news updates in 10 minutes! Summarize what you learned from that segment if you have time."
  },
  {
    "id": "34523452432343245423554354324325453",
    "title": "Fun Activities",
    "label": 1 + " Hours",
    "description": "If the weather is nice, get outside and exercise! Get moving or get some fresh air and journal or meditate."
  },
]

const default9Through10 = [
  {
    "id": "2133629213798342342342213789121",
    "title": "Math",
    "label": 2 + " Hours",
    "description": "Practice on Khan Academy, and review incorrect answers using videos/texts. https://www.khanacademy.org/math "
  },
  {
    "id": "272324342232423441233",
    "title": "English",
    "label": 2 + " Hours",
    "description": "Read a book of your choice or articles from an acclaimed editorial/academic journal."
  },
  {
    "id": "12134432442342345767",
    "title": "Social Studies",
    "label": 1 + " Hours",
    "description": "Watch a video relating to the course from CrashCourse. Create and annotate an outline on the topics discussed. "
  },
  {
    "id": "3452345243542333554354324325453",
    "title": "Fun Activities",
    "label": 1 + " Hours",
    "description": "Go outside. Call a friend. Relax. Get some exercise. Meditate."
  },
]


const default11Through12 = [
  {
    "id": "2133629213798342342342213789121",
    "title": "Math",
    "label": 2 + " Hours",
    "description": "Practice on Khan Academy, and review incorrect answers using videos/texts. https://www.khanacademy.org/math "
  },
  {
    "id": "272324342232423441233",
    "title": "English",
    "label": 2 + " Hours",
    "description": "Read a book of your choice or articles from an acclaimed editorial/academic journal."
  },
  {
    "id": "12134432442342345767",
    "title": "Social Studies",
    "label": 1 + " Hours",
    "description": "Watch a video relating to the course from CrashCourse. Create and annotate an outline on the topics discussed. "
  },
  {
    "id": "4325324523454325342234543254235",
    "title": "College 101",
    "label": 1 + " Hours",
    "description": "Create a passion project"
  },
  {
    "id": "432532452345432534253242343343254235",
    "title": "College 101",
    "label": 1 + " Hours",
    "description": "Work a part time job"
  },
  {
    "id": "3452345243542333554354324325453",
    "title": "Fun Activities",
    "label": 1 + " Hours",
    "description": "Go outside. Call a friend. Relax. Get some exercise. Meditate."
  },
]

export default function StudyEngine() {
  const [data, setData] = useState()
  const [score, setScore] = useState(0)
  const [loading, setLoading] = useState(true)
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
  const url = useLocation();


  function buildBoard(tasks) {
    let newData = template;

    let wip = [];
    let todo = [];
    let completed = [];
    for (var i = 0; i < tasks.length; i++) {
      let newCard = {
        "id": tasks[i].cardId,
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
    let defaultTasks;
    if (user.year < 5) {
      defaultTasks = default5AndUnder;
    }
    else if (user.year >= 5 && user.year <= 8) {
      defaultTasks = default5though8;
    }
    else if (user.year === 9 || user.year === 10) {
      defaultTasks = default9Through10;
    }
    else if (user.year === 11 || user.year === 12) {
      defaultTasks = default11Through12;
    }
    newData.lanes[0].cards = defaultTasks;
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

  function fetchScores() {
    console.log(user._id)
    return new Promise(resolve => {
      axios
        .get(url.protocol + "//" + url.hostname + ":5000" + "/Task/GetScore/" + user._id)
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
    let scores = await fetchScores();
    setScore(scores.data)
  }


  function saveCardChange(cardDetails) {
    let request =
    {
      name: cardDetails.title,
      duration: parseFloat(cardDetails.label),
      description: cardDetails.description,
      status: cardDetails.laneId,
      userId: "5ec5fac4ebaac90c864e6cbc",
      cardId: cardDetails.id
    }

    return new Promise(resolve => {
      axios
        .post(url.protocol + "//" + url.hostname + ":5000" + "/Task/Create/" + user._id, request)
        .then((res) => {
          console.log(res.data)
          resolve(res.data)
        })
        .catch((err) => {
          console.error(err)
        })
    });
  }

  async function handleCardChange(cardId, sourceLaneId, targetLaneId, position, cardDetails) {
    await saveCardChange(cardDetails)
    let scores = await fetchScores();
    setScore(scores.data)
  }

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("user")))
    console.log(JSON.parse(localStorage.getItem("user")))

    if (localStorage.getItem("user")) {
      onPageLoad();
    }

  }, []);

  return (
    <div id="EntryPage">
      {user ? <h1>Study Plan for {user.year}th Grade Your score is {score}</h1>
        : <h1>Study Plan</h1>}
      {loading ? <h1>Please login to use the study plan</h1>
        : <Board data={data} draggable laneDraggable={false} handleDragEnd={handleCardChange} />}
    </div>
  );
}
