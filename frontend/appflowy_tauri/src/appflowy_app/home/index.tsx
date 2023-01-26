
import "../App.css";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import SideBar from "./presentation/sideBar";
import Board from "./presentation/board";
import Navbar from "./presentation/navBar";

const useStyles = makeStyles(theme => ({}));

function home() {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <div>
      <Grid container direction="row" spacing={0}>
        <Grid item xs={2}>
          <SideBar />
        </Grid>
        <Grid item xs={10}>
          <Navbar />
          <Board />
        </Grid>
      </Grid>
    </div>
  );
}

export default home;
