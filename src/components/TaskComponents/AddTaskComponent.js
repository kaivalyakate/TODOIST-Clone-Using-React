import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Card, CardContent } from '@material-ui/core';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import DoneAllIcon from '@material-ui/icons/DoneAll';
import { withStyles } from '@material-ui/core/styles';
import AddBoxIcon from '@material-ui/icons/AddBox';
import './Tasks.css'

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

const ColorButton = withStyles((theme) => ({
  root: {
    color: "#ce1f6a",
    backgroundColor: "white",
    // '&:hover': {
    //   backgroundColor: "#c67ace",
    // },
  },
}))(Button);

export default function AddTaskComponent() {
  const classes = useStyles();

  return (
    <Card className="AddTask" variant="outlined">
        <CardContent>
            <form className={classes.root} noValidate autoComplete="off">
                <div className="AddForm">
                    <h1 className="subHeading">Add Task</h1>
                    <div className="formItem"><TextField id="outlined-basic" label="Name" variant="outlined" /></div>
                    <div className="formItem"><TextField
                        id="outlined-multiline-static"
                        label="Description"
                        multiline
                        rows={4}
                        variant="outlined"
                        />
                        <TextField
                            id="date"
                            label="Task Completion Date"
                            type="date"
                            defaultValue="2017-05-24"
                            className={classes.textField}
                            InputLabelProps={{
                            shrink: true,
                            }}
                            style={{ marginTop: "5px" }}
                        />
                    </div>
                    <div className="formItem">
                      <CardActions>
                        <ColorButton 
                          variant="outlined" 
                          startIcon={<AddBoxIcon color="secondary"></AddBoxIcon>}   
                          size="large"
                        >
                          Add Task
                        </ColorButton>
                      </CardActions>
                    </div>  
                </div>
            </form>
        </CardContent>
    </Card>
  );
}
