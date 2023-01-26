import React from 'react';
import { makeStyles, useTheme, createStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import TreeView from '@material-ui/lab/TreeView';
import TreeItem, { TreeItemProps } from '@material-ui/lab/TreeItem';import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import Logo from "../../../assets/logo.svg";
import MailIcon from '@material-ui/icons/Mail';
import DeleteIcon from '@material-ui/icons/Delete';
import Label from '@material-ui/icons/Label';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import InfoIcon from '@material-ui/icons/Info';
import ForumIcon from '@material-ui/icons/Forum';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import { SvgIconProps } from '@material-ui/core/SvgIcon';
import DashboardOutlinedIcon from '@material-ui/icons/DashboardOutlined';

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
      color: theme.palette.text.secondary,
      '&:hover > $content': {
        backgroundColor: theme.palette.action.hover,
      },
      '&:focus > $content, &$selected > $content': {
        backgroundColor: `var(--tree-view-bg-color, ${theme.palette.grey[400]})`,
        color: 'var(--tree-view-color)',
      },
      '&:focus > $content $label, &:hover > $content $label, &$selected > $content $label': {
        backgroundColor: 'transparent',
      },
    },
    content: {
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
      color: 'inherit',
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
    labelText: {
      fontFamily: 'Poppins',
      fontWeight: 500,
      color: theme.palette.primary.darkCharcol,
      flexGrow: 1,
      fontSize: '12px'
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
          <Typography variant="body2" className={classes.labelText}>
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
    backgroundColor: theme.palette.background.default,
    padding: '22px',
    height: '100vh'
  },
  appLogo: {
    marginBottom: '30px',
    cursor: 'pointer'
  },
}));

function sideBar() {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <div className={classes.sideBarMain}>
      <Grid container direction="row" spacing={2}>
        <Grid item xs={12}>
          <img
            alt="appflowly log"
            src={Logo}
            className={classes.appLogo}
          />
          <TreeView
            defaultExpanded={['3']}
            defaultCollapseIcon={<ArrowDropDownIcon />}
            defaultExpandIcon={<ArrowRightIcon />}
            defaultEndIcon={<div style={{ width: 24 }} />}
          >
            <StyledTreeItem nodeId="1" labelText="My Dashboard" labelIcon={DashboardOutlinedIcon} />
            <StyledTreeItem nodeId="2" labelText="Favorites" labelIcon={DeleteIcon} />
            <StyledTreeItem nodeId="3" labelText="Getting Started" labelIcon={Label}>
              <StyledTreeItem
                nodeId="5"
                labelText="To-do List"
                labelIcon={SupervisorAccountIcon}
                labelInfo="90"
                color="#1a73e8"
                bgColor="#e8f0fe"
              />
              <StyledTreeItem
                nodeId="6"
                labelText="Today"
                labelIcon={InfoIcon}
                labelInfo="2,294"
                color="#e3742f"
                bgColor="#fcefe3"
              />
              <StyledTreeItem
                nodeId="7"
                labelText="This week"
                labelIcon={ForumIcon}
                labelInfo="3,566"
                color="#a250f5"
                bgColor="#f3e8fd"
              />
              <StyledTreeItem
                nodeId="8"
                labelText="Board"
                labelIcon={LocalOfferIcon}
                labelInfo="733"
                color="#3c8039"
                bgColor="#e6f4ea"
              />
              <StyledTreeItem
                nodeId="9"
                labelText="Completed"
                labelIcon={LocalOfferIcon}
                labelInfo="733"
                color="#3c8039"
                bgColor="#e6f4ea"
              />
            </StyledTreeItem>
            <StyledTreeItem nodeId="4" labelText="Tool" labelIcon={Label} />
          </TreeView>
        </Grid>
      </Grid>
    </div>
  );
}

export default sideBar;
