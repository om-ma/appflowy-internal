import * as React from 'react';
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import Toolbar from '@material-ui/core/Toolbar';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import InsertDriveFileOutlinedIcon from '@material-ui/icons/InsertDriveFileOutlined';
import StarIcon from '@material-ui/icons/Star';
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const useStyles = makeStyles(theme => ({
  AppBar: {
    background: "white",
    boxShadow: 'none',
    borderBottom: '1px solid lightgray',
    borderColor: theme.palette.warning.main,
  },
  driveIcon: {
    fontSize: '10px',
    marginRight: '5px'
  },
  starIcon: {
    fontSize: '10px',
    marginLeft: '5px',
    color: theme.palette.warning.main,
  },
  arrowLeft: {
    fontSize: '16px',
    margin: '5px 5px 0 0'
  },
  arrowRight: {
    fontSize: '15px',
    marginTop: '5px',
    color: theme.palette.grey.A100
  },
  breadCrumbs: {
    marginLeft: '30px',
    [theme.breakpoints.down("sm")]: {
      marginLeft: '15px',
    }
  },
  flexGrow: {
    flexGrow: 1
  },
  btn: {
    color: 'white',
    textTransform: 'initial'
  },
  moreIcon: {
    color: 'black',
    cursor: 'pointer',
    marginTop: '6px',
  }
}));

function navBar() {
  const classes = useStyles();
  const theme = useTheme();

  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);
  
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <div>
      <Grid container direction="row" spacing={2}>
        <Grid item xs={12}>
          <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" className={classes.AppBar}>
              <Toolbar>
                <Link href="/">
                  <KeyboardArrowLeftIcon className={classes.arrowLeft}/>
                </Link>
                <Link href="/">
                  <KeyboardArrowRightIcon className={classes.arrowRight}/>
                </Link>
                <Breadcrumbs aria-label="breadcrumb"
                  className={classes.breadCrumbs}
                >
                  <Link underline="hover" href="/">
                    Getting Started
                  </Link>
                  <Link
                    underline="hover"
                    href="/"
                    aria-current="page"
                  >
                    <InsertDriveFileOutlinedIcon className={classes.driveIcon}/>
                    Read Me
                  </Link>
                </Breadcrumbs>
                <div className={classes.flexGrow}>
                  <StarIcon className={classes.starIcon} />
                </div>
               
                <Button 
                  color="secondary" 
                  variant="contained"
                  className={classes.btn}
                >
                  Share
                </Button>
                <Box sx={{ flexGrow: 0 }}>
                  <MoreVertIcon
                    className={classes.moreIcon}
                    onClick={handleOpenUserMenu}
                  />
                  <Menu
                    id="menu-appbar"
                    anchorEl={anchorElUser}
                    anchorOrigin={{
                      vertical: 'top',
                      horizontal: 'right',
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: 'top',
                      horizontal: 'right',
                    }}
                    open={Boolean(anchorElUser)}
                    onClose={handleCloseUserMenu}
                  >
                    {settings.map((setting) => (
                      <MenuItem key={setting} onClick={handleCloseUserMenu}>
                        <Typography>{setting}</Typography>
                      </MenuItem>
                    ))}
                  </Menu>
                </Box>
          
              </Toolbar>
            </AppBar>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}

export default navBar;
