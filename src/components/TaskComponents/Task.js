import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import DoneAllIcon from '@material-ui/icons/DoneAll';
import { withStyles } from '@material-ui/core/styles';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    marginTop: "10px",
    borderRadius: "10px"
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

const ColorButton = withStyles((theme) => ({
  root: {
    color: "#ce1f6a",
    backgroundColor: "white",
    // '&:hover': {
    //   backgroundColor: "#c67ace",
    // },
  },
}))(Button);

const DeleteColorButton = withStyles((theme) => ({
  root: {
    color: "#ce1f6a",
    backgroundColor: "white",
    // '&:hover': {
    //   backgroundColor: "#c67ace",
    // },
  },
}))(Button);

export default function Task(props) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Task Title
        </Typography>
        <Typography variant="h5" component="h2">
          {/* Ta{bull}sk{bull}ti{bull}tle */}
          {props.title}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          Description
        </Typography>
        <Typography variant="body2" component="p">
          {props.description}
          <br />
        </Typography>
      </CardContent>
      <CardActions>
        <ColorButton 
          variant="outlined" 
          startIcon={<DoneAllIcon color="secondary"></DoneAllIcon>}   
        >
          Done
        </ColorButton>
         <DeleteColorButton 
          variant="outlined" 
          startIcon={<DeleteOutlineIcon color="secondary"></DeleteOutlineIcon>}   
        >
          Delete
        </DeleteColorButton>
      </CardActions>
    </Card>
  );
}