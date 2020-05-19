import React, { useState, useEffect } from "react";
import { useLocation } from 'react-use';
import axios from "axios";
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Session from './Session'
import Fade from '@material-ui/core/Fade';

export default function SessionView(props) {

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

  function onPageLoad() {
    getSessionData();
  }

  useEffect(() => {
    onPageLoad();
  }, []);


  return (
    <div style={{ marginTop: "50px", width: "100%", height: "100%" }}>
      <Grid container spacing={3}>
        {sessions.map((session, index) =>
          <Session roomName={session.roomName} createdBy={session.createdBy} />
        )}
      </Grid>
    </div>
  );
}
