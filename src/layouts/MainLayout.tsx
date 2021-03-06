import React from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import UsersIcon from '@material-ui/icons/PeopleAlt';
import BusinessIcon from '@material-ui/icons/Business';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { useHistory } from 'react-router';
import { useActions, useAppSelector } from '../redux/hooks';
import IconButton from '@material-ui/core/IconButton';
import { Roles } from '../intefaces/role';

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
    },
    title: {
      flexGrow: 1,
    },
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    drawerContainer: {
      overflow: 'auto',
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
    },
  }),
);

const MainLayout: React.FC = ({ children }) => {
  const classes = useStyles();
  const history = useHistory();
  const { singOut } = useActions();
  const roles = useAppSelector(state => state.auth.profile?.roles) || [];

  const token = useAppSelector(state => state.auth.token?.access);

  React.useEffect(() => {
    if (!token) {
      history.push('/singIn');
    }
  }, [ token ]);

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" noWrap className={classes.title}>
            Tactise
          </Typography>
          <IconButton aria-label="search" color="inherit" onClick={() => singOut()}>
            <ExitToAppIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <Toolbar />
        <div className={classes.drawerContainer}>
          <List>
            {roles.includes(Roles.ADMIN) && (
              <ListItem button onClick={() => history.push('/companies')}>
                <ListItemIcon><BusinessIcon /></ListItemIcon>
                <ListItemText primary="????????????????" />
              </ListItem>
            )}
            <ListItem button onClick={() => history.push('/users')}>
              <ListItemIcon><UsersIcon /></ListItemIcon>
              <ListItemText primary="????????????????????" />
            </ListItem>
          </List>
          <Divider />
        </div>
      </Drawer>
      <main className={classes.content}>
        <Toolbar />
        {children}
      </main>
    </div>
  );
}

export default MainLayout;
