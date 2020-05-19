import React, { useEffect, useState } from 'react'
import axios from "axios";
import { useLocation } from 'react-use';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import CreateSessionModalStyles from './CreateSessionModalStyles'
import TextField from '@material-ui/core/TextField';
import {
    Paper,
    Backdrop,
    Modal,
    Button,
    Typography,
    IconButton
} from '@material-ui/core'
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import CloseIcon from "@material-ui/icons/Close";

const useStyles = makeStyles(CreateSessionModalStyles);

export default function CreateSessionModal(props) {
    const classes = useStyles();
    const [open, setOpen] = React.useState(props.open);
    const [roomName, setRoomName] = React.useState('');
    const [subject, setSubject] = React.useState('');
    const url = useLocation();

    const handleSubjectChange = (event) => {
        setSubject(event.target.value);
        console.log(event.target.value);
    };

    const handleRoomChange = (event) => {
        setRoomName(event.target.value);
        console.log(event.target.value);
    };

    function fetchCreateSession() {
        var createRequestObj = {
            createdBy: "kyritzb@gmail.com",
            roomName: roomName,
            subject: subject
        }
        return new Promise(resolve => {
            axios
                .post(url.protocol + "//" + url.hostname + ":5000" + "/Session/Create", createRequestObj)
                .then((res) => {
                    console.log(res.data)
                    resolve(res.data)
                })
                .catch((err) => {
                    console.error(err)
                })
        });
    }

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    async function createSession() {

        await fetchCreateSession()
        props.refresh()
        props.close()
    }

    useEffect(() => {

    }, []);


    return (
        <div>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={props.open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Paper className={classes.paper} >
                    <div style={{ position: "relative", width: "100%", left: "90%" }}>
                        <IconButton
                            aria-label="cancel login modal"
                            onClick={props.close}
                            color="primary"
                        >
                            <CloseIcon />
                        </IconButton>
                    </div>
                    <div className={classes.shareTextContainer}>
                        <Typography
                            variant='h1'
                            align='center'
                            className={classes.shareText}
                        >
                            Create a Session
                        </Typography>
                    </div>
                    <div className={classes.seperator} />
                    <div style={{ marginTop: "20px" }}>
                        <TextField label="Room name" variant="outlined" onChange={handleRoomChange} />
                    </div>
                    <div style={{ marginTop: "20px", width: "50%" }}>
                        <FormControl style={{ width: "100%" }}>
                            <InputLabel id="Subject">Subject</InputLabel>
                            <Select
                                labelId="Subject"
                                value={subject}
                                onChange={handleSubjectChange}
                                style={{ width: "100%" }}
                            >
                                <MenuItem value={'Math'}>Math</MenuItem>
                                <MenuItem value={"Science"}>Science</MenuItem>
                                <MenuItem value={"English"}>English</MenuItem>
                                <MenuItem value={"History"}>History</MenuItem>
                            </Select>
                        </FormControl>
                    </div>
                    <div style={{ marginTop: "20px" }}>
                        <Button variant="contained" color="primary" onClick={createSession}>
                            Create Session
                        </Button>
                    </div>
                </Paper>
            </Modal>
        </div >
    );
}


