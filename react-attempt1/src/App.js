import './App.css';
import PostList from './PostList';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root: {
      "& > *": {
        margin: theme.spacing(1)
      }
    }
  }));

function App() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
           <PostList/>
        </div>
    );
}

export default App;
