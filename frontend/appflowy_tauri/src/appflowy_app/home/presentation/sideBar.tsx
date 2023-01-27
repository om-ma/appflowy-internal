import React from 'react';
import { makeStyles, useTheme, createStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import TreeView from '@material-ui/lab/TreeView';
import TreeItem, { TreeItemProps } from '@material-ui/lab/TreeItem';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Logo from "../../../assets/logo.svg";
import ProfileImage from "../../../assets/profile.svg"
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import { SvgIconProps } from '@material-ui/core/SvgIcon';
import DashboardOutlinedIcon from '@material-ui/icons/DashboardOutlined';
import StarBorderOutlinedIcon from '@material-ui/icons/StarBorderOutlined';
import InsertDriveFileOutlinedIcon from '@material-ui/icons/InsertDriveFileOutlined';
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';
import AddIcon from '@material-ui/icons/Add';
import AppsOutlinedIcon from '@material-ui/icons/AppsOutlined';

const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

declare module 'csstype' {
  interface Properties {
    '--tree-view-color'?: string;
    '--tree-view-bg-color'?: string;
  }
}

type StyledTreeItemProps = TreeItemProps & {
  bgColor?: string;
  color?: string;
  labelIcon: React.ElementType<SvgIconProps>;
  labelInfo?: string;
  labelText: string;
};

const useTreeItemStyles = makeStyles((theme) =>
  createStyles({
    root: {
      color: theme.palette.primary.main,
      '&:hover > $content': {
        backgroundColor: theme.palette.background.paper,
        borderRadius: '6px',
      },
      '&:focus > $content, &$selected > $content': {
        backgroundColor: theme.palette.background.paper,
        color: theme.palette.primary.main,
        borderRadius: '6px',
      },
      '&:focus > $content $label, &:hover > $content $label, &$selected > $content $label': {
        backgroundColor: 'transparent',
      },
    },
    content: {
      display: 'flex',
      alignItems: 'baseline',
      marginBottom: '12px',
      color: theme.palette.text.secondary,
      borderTopRightRadius: theme.spacing(2),
      borderBottomRightRadius: theme.spacing(2),
      paddingRight: theme.spacing(1),
      fontWeight: theme.typography.fontWeightMedium,
      '$expanded > &': {
        fontWeight: theme.typography.fontWeightRegular,
      },
    },
    group: {
      marginLeft: 0,
      '& $content': {
        paddingLeft: theme.spacing(1),
      },
    },
    expanded: {},
    selected: {},
    label: {
      fontWeight: 'inherit',
      color: theme.palette.primary.main,
    },
    labelRoot: {
      display: 'flex',
      alignItems: 'center',
      padding: theme.spacing(0.5, 0),
    },
    labelIcon: {
      marginRight: theme.spacing(1),
      fontSize: '16px'
    },
  }),
);

function StyledTreeItem(props: StyledTreeItemProps) {
  const classes = useTreeItemStyles();
  const { labelText, labelIcon: LabelIcon, labelInfo, color, bgColor, ...other } = props;

  return (
    <TreeItem
      label={
        <div className={classes.labelRoot}>
          <LabelIcon color="inherit" className={classes.labelIcon} />
          <Typography variant="body1">
            {labelText}
          </Typography>
          <Typography variant="caption" color="inherit">
            {labelInfo}
          </Typography>
        </div>
      }
      style={{
        '--tree-view-color': color,
        '--tree-view-bg-color': bgColor,
      }}
      classes={{
        root: classes.root,
        content: classes.content,
        expanded: classes.expanded,
        selected: classes.selected,
        group: classes.group,
        label: classes.label,
      }}
      {...other}
    />
  );
}

const useStyles = makeStyles(theme => ({
  sideBarMain: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    backgroundColor: theme.palette.background.default,
    padding: '22px',
    height: '100%'
  },
  appLogo: {
    marginBottom: '30px',
    cursor: 'pointer'
  },
  profileMain: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '30px',
    gap: '10px'
  },
  arrowDown: {
    fontSize: '16px',
    cursor: 'pointer'
  },
  favouriteMenu: {
    marginBottom: '30px',
    '& .MuiTypography-body1': {
      fontWeight: 500
    }
  },
  labelText: {
    '& .MuiTypography-body1': {
      fontWeight: 500
    }
  },
  newAppMain: {
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer'
  },
  addIcon: {
    background: theme.palette.secondary.main,
    color: 'white',
    fontSize: '16px',
    marginRight: '12px',
    borderRadius: '50%'
  },
  gettingStarted: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'baseline'
  },
  plusIcon: {
    fontSize: '16px',
    cursor: 'pointer'
  }
}));

function sideBar() {
  const classes = useStyles();
  const theme = useTheme();

  const [anchorElProfile, setAnchorElProfile] = React.useState<null | HTMLElement>(null);
  
  const handleOpenProfileMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElProfile(event.currentTarget);
  };

  const handleCloseProfileMenu = () => {
    setAnchorElProfile(null);
  };

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };


  return (
    <div>
      <Grid container direction="row" spacing={2}>
        <Grid item xs={12}>
          <div className={classes.sideBarMain}>
            <div>
              <div>
                <img
                  alt="appflowly logo"
                  src={Logo}
                  className={classes.appLogo}
                />
              </div>
              <div className={classes.profileMain}>
                <img
                  alt="appflowly logo"
                  src={ProfileImage}
                />
                <Typography variant="h6">
                  Vadim M.
                </Typography>
                <ArrowDropDownIcon
                  className={classes.arrowDown}
                  onClick={handleOpenProfileMenu}
                />
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorElProfile}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={Boolean(anchorElProfile)}
                  onClose={handleCloseProfileMenu}
                >
                  {settings.map((setting) => (
                    <MenuItem key={setting} onClick={handleCloseProfileMenu}>
                      <Typography>{setting}</Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </div>
              <TreeView
                defaultExpanded={['3','11']}
                defaultCollapseIcon={<ArrowDropUpIcon />}
                defaultExpandIcon={<ArrowRightIcon />}
                defaultEndIcon={<div style={{ width: 24 }} />}
              >
                <StyledTreeItem nodeId="1" labelText="My Dashboard" labelIcon={DashboardOutlinedIcon} className={classes.labelText}/>
                <StyledTreeItem nodeId="2" labelText="Favorites" labelIcon={StarBorderOutlinedIcon} className={classes.favouriteMenu} />
                <div className={classes.gettingStarted}>
                  <StyledTreeItem nodeId="3" labelText="Getting Started" labelIcon={AppsOutlinedIcon}>
                    <StyledTreeItem
                      nodeId="5"
                      labelText="To-do List"
                      labelIcon={InsertDriveFileOutlinedIcon}
                      labelInfo=""
                    />
                    <StyledTreeItem
                      nodeId="6"
                      labelText="Today"
                      labelIcon={InsertDriveFileOutlinedIcon}
                      labelInfo=""
                    />
                    <StyledTreeItem
                      nodeId="7"
                      labelText="This week"
                      labelIcon={InsertDriveFileOutlinedIcon}
                      labelInfo=""
                    />
                    <StyledTreeItem
                      nodeId="8"
                      labelText="Board"
                      labelIcon={InsertDriveFileOutlinedIcon}
                      labelInfo=""
                    />
                    <StyledTreeItem
                      nodeId="9"
                      labelText="Completed"
                      labelIcon={InsertDriveFileOutlinedIcon}
                      labelInfo=""
                    />
                  </StyledTreeItem>
                  <AddIcon
                    className={classes.plusIcon}
                    aria-controls={open ? 'board-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}
                  />
                  <Menu
                    id="board-menu"
                    aria-labelledby="board-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    anchorOrigin={{
                      vertical: 'top',
                      horizontal: 'left',
                    }}
                    transformOrigin={{
                      vertical: 'top',
                      horizontal: 'left',
                    }}
                  >
                    <MenuItem onClick={handleClose}>Grid</MenuItem>
                    <MenuItem onClick={handleClose}>Document</MenuItem>
                    <MenuItem onClick={handleClose}>Board</MenuItem>
                    <MenuItem onClick={handleClose}>Report</MenuItem>
                    <MenuItem onClick={handleClose}>Import</MenuItem>
                    <MenuItem onClick={handleClose}>Templates</MenuItem>
                  </Menu>
                </div>
                <StyledTreeItem nodeId="11" labelText="Reading List" labelIcon={AppsOutlinedIcon}>
                  <StyledTreeItem
                    nodeId="12"
                    labelText="Articles"
                    labelIcon={InsertDriveFileOutlinedIcon}
                    labelInfo=""
                  />
                  <StyledTreeItem
                    nodeId="13"
                    labelText="Books"
                    labelIcon={InsertDriveFileOutlinedIcon}
                    labelInfo=""
                  />
                  <StyledTreeItem
                    nodeId="14"
                    labelText="Topics"
                    labelIcon={InsertDriveFileOutlinedIcon}
                    labelInfo=""
                  />
                  <StyledTreeItem
                    nodeId="15"
                    labelText="Notes - Lean"
                    labelIcon={InsertDriveFileOutlinedIcon}
                    labelInfo=""
                  />
                </StyledTreeItem>
                <StyledTreeItem nodeId="4" labelText="Tool" labelIcon={InsertDriveFileOutlinedIcon} className={classes.labelText}/>
                <StyledTreeItem nodeId="10" labelText="Trash" labelIcon={DeleteOutlinedIcon} className={classes.labelText}/>
              </TreeView>
            </div>
            <div className={classes.newAppMain}>
              <AddIcon className={classes.addIcon}/>
              <Typography variant="h6">
                New App
              </Typography>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default sideBar;
