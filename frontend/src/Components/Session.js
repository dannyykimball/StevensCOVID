import React, { useState, useEffect } from "react";
import axios from "axios";
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from "@material-ui/core/Button"
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Badge from '@material-ui/core/Badge';
import PeopleIcon from '@material-ui/icons/People';
import Grow from '@material-ui/core/Grow';
//images
const science = require('../Assets/subjects/science.png')
const english = require('../Assets/subjects/english.png')
const history = require('../Assets/subjects/history.jfif')
const math = require('../Assets/subjects/math.jfif')

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: 151,
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  playIcon: {
    height: 38,
    width: 38,
  },
}));


export default function Session(props) {
  const classes = useStyles();
  const theme = useTheme();
  const [peopleInRoom, setPeopleInRoom] = useState(0)
  const [pic, setPic] = useState()

  function clickedRoomName() {
    let link = "https://www.securemeeting.org/pages/chat.html?roomId=" + props.roomName + "#/room/join"
    window.open(link, '_blank')
  }


  function fetchPeopleInRoom() {
    return new Promise(resolve => {
      axios
        .get("https:" + "//" + "securemeeting.org" + ":4443" + "/getNumPeopleInRoom/" + props.roomName)
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
    let num = await fetchPeopleInRoom()
    setPeopleInRoom(num)
  }

  function setPicture() {
    let subject = props.subject;
    if (subject === "Science") {
      setPic(science)
    } else if (subject === "English") {
      setPic(english)
    } else if (subject === "Math") {
      setPic(math)
    } else if (subject === "History") {
      setPic(history)
    }
  }

  useEffect(() => {
    onPageLoad(fetchPeopleInRoom());
    setPicture()
  }, []);

  return (
    <Grow
      in={true}
      {...(true ? { timeout: (1000 * props.index) } : {})}
    >
      <Grid item>
        <Card className={classes.root}>
          <div className={classes.details}>
            <CardContent className={classes.content}>
              <Typography component="h5" variant="h5">
                {props.roomName}
              </Typography>
              <Typography variant="subtitle1" color="textSecondary">
                {props.createdBy}
              </Typography>
            </CardContent>
            <div className={classes.controls}>
              <Button variant="contained" color="primary" onClick={clickedRoomName}>
                Join
            </Button>
              <Badge badgeContent={peopleInRoom} color="primary" style={{ marginLeft: "30px" }}>
                <PeopleIcon />
              </Badge>
            </div>
          </div>
          <CardMedia
            className={classes.cover}
            image={pic}
            title="Subject"
          />
        </Card>
      </Grid >
    </Grow>
  );
}
