
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles(theme => ({}));

function sideBar() {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <div>
      <Grid container direction="row" spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h3">
            Side bar
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
}

export default sideBar;
