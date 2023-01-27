import { makeStyles, useTheme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

const useStyles = makeStyles(theme => ({
  boardMain: {
    padding: '48px 69px 37px 80px',
    background: 'white',
    height: '100%'
  },
  boardBody: {
    marginTop: '2rem',
    marginBottom: '32px'
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
  plans: {
    marginBottom: '32px'
  }
}));

function board() {
  const classes = useStyles();
  const theme = useTheme();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <div className={classes.boardMain}>
      <Grid container direction="row" spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h2">
            Board
          </Typography>
          <div className={classes.boardBody}>
            <Typography variant="h3" className={classes.plans}>
              My plans on week
            </Typography>
            <Grid item xs={4}>
              <Card>
                <CardContent>
                  <Typography className={classes.title} color="textSecondary" gutterBottom>
                    Word of the Day
                  </Typography>
                  <Typography variant="h5" component="h2">
                    be{bull}nev{bull}o{bull}lent
                  </Typography>
                  <Typography className={classes.pos} color="textSecondary">
                    adjective
                  </Typography>
                  <Typography variant="body2" component="p">
                    well meaning and kindly.
                    <br />
                    {'"a benevolent smile"'}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default board;
