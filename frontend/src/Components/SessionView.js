import React, { useState, useEffect } from "react";
import { useLocation } from 'react-use';
import axios from "axios";
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Session from './Session'
import Fade from '@material-ui/core/Fade';
import Button from "@material-ui/core/Button"
import { Typography } from "@material-ui/core";
import CreateSessionModal from "../Components/modals/CreateSessionModal"
export default function SessionView(props) {
  const [open, setOpen] = React.useState(false);
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [sessions, setSessions] = useState([]);
  const url = useLocation();

  function fetchSessions() {
    return new Promise(resolve => {
      axios
        .get(url.protocol + "//" + url.hostname + ":5000" + "/Session/GetAll")
        .then((res) => {
          console.log(res.data)
          resolve(res.data)
        })
        .catch((err) => {
          console.error(err)
        })
    });
  }

  async function getSessionData() {
    var sessions = await fetchSessions();
    setLoading(false)
    if (sessions.isSuccess) {
      setSessions(sessions.data)
    } else {

    }
  }

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  function onPageLoad() {
    getSessionData();
  }

  useEffect(() => {
    onPageLoad();
  }, []);


  return (
    <React.Fragment>
      <CreateSessionModal open={open} close={handleClose} refresh={getSessionData} />
      <Grid container
        direction="column"
        justify="center"
        alignItems="center"
        spacing={2}
        style={{ marginTop: "20px" }}>

        <Grid item xs>
          <Typography variant="h4" >
            Current Sessions
          </Typography>
        </Grid>

        <Grid item xs>
          <Button variant="contained" color="primary" onClick={handleOpen}>
            Create new
          </Button>
        </Grid>
      </Grid>

      <div style={{ marginTop: "50px", width: "100%", height: "100%", paddingLeft: "3%", paddingRight: "3%" }}>
        <Grid container spacing={3} style={{ marginTop: "40px" }}>
          {sessions.map((session, index) =>
            <Session roomName={session.roomName} createdBy={session.createdBy} subject={session.subject} />
          )}
        </Grid>
      </div>
    </React.Fragment>
  );
}
