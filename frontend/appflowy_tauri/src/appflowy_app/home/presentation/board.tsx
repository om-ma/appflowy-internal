import { makeStyles, useTheme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles(theme => ({
  gridMargin: {
    marginTop: '3rem'
  },
  boardBody: {
    marginTop: '2rem'
  }
}));

function board() {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));

  return (
    <div>
      <Grid container direction="row" spacing={2}>
        <Grid item xs={12} className={classes.gridMargin}>
          <Typography variant="h2">
            Board
          </Typography>
          <div className={classes.boardBody}>
            <Typography variant="h3">
              My plans on week
            </Typography>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default board;
