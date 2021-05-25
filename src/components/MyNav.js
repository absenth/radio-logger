import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import HomeIcon from "@material-ui/icons/Home";
import AccountCircle from "@material-ui/icons/AccountCircle";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import PeopleIcon from "@material-ui/icons/People";
import BusinessIcon from "@material-ui/icons/Business";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Collapse from "@material-ui/core/Collapse";
import SettingsIcon from '@material-ui/icons/Settings';
import FolderIcon from '@material-ui/icons/Folder';
import SearchIcon from '@material-ui/icons/Search';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import TextField from '@material-ui/core/TextField';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Badge from '@material-ui/core/Badge';


const useStyles = makeStyles((theme) => ({
  root: { flexGrow: 1 },
  menuButton: { marginRight: theme.spacing(2) },
  title: { flexGrow: 1 },
  list: { width: 250 },
  nested: { paddingLeft: theme.spacing(4) }
}));

const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const [leadershipTriadMenuOpen, setLeadershipTriadMenuOpen] = useState(false);

  const handleLeadershipTriadClick = () => {
    setLeadershipTriadMenuOpen(!leadershipTriadMenuOpen);
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={() => toggleDrawer()}
          >
            <MenuIcon />
            <Drawer
              anchor="left"
              open={drawerOpen}
              onClose={() => toggleDrawer()}
            >
              <div className={classes.list}>
                <List>
                  <ListItem button>
                    <ListItemIcon>
                      <HomeIcon color="primary" />
                    </ListItemIcon>
                    <ListItemText primary="Admin" />
                  </ListItem>
                  <ListItem button onClick={() => handleLeadershipTriadClick()}>
                    <ListItemIcon>
                      <FolderIcon color="primary" />
                    </ListItemIcon>
                    <ListItemText primary="Logging" />
                    {leadershipTriadMenuOpen ? <ExpandLess /> : <ExpandMore />}
                  </ListItem>
                  <Collapse
                    in={leadershipTriadMenuOpen}
                    timeout="auto"
                    unmountOnExit
                  >
                    <List component="div" disablePadding>
                      <ListItem button className={classes.nested}>
                        <ListItemIcon>
                          <FolderIcon />
                        </ListItemIcon>
                        <ListItemText primary="Shortwave Logging" />
                      </ListItem>
                    </List>
                    <List component="div" disablePadding>
                      <ListItem button className={classes.nested}>
                        <ListItemIcon>
                          <FolderIcon />
                        </ListItemIcon>
                        <ListItemText primary="Amateur Radio Logging" />
                      </ListItem>
                    </List>
                    <List component="div" disablePadding>
                      <ListItem button className={classes.nested}>
                        <ListItemIcon>
                          <FolderIcon />
                        </ListItemIcon>
                        <ListItemText primary="VHF/UHF Radio Logging" />
                      </ListItem>
                    </List>

                    <List component="div" disablePadding>
                      <ListItem button className={classes.nested}>
                        <ListItemIcon>
                          <FolderIcon />
                        </ListItemIcon>
                        <ListItemText primary="Amateur Radio Contest Logging" />
                      </ListItem>
                    </List>

                    <List component="div" disablePadding>
                      <ListItem button className={classes.nested}>
                        <ListItemIcon>
                          <FolderIcon />
                        </ListItemIcon>
                        <ListItemText primary="Scanner Radio Logging" />
                      </ListItem>
                    </List>
                  </Collapse>
                  
                  <ListItem button>
                    <ListItemIcon>
                      <SettingsIcon color="primary" />
                    </ListItemIcon>
                    <ListItemText primary="Settings" />
                  </ListItem>
                  <ListItem button>
                    <ListItemIcon>
                      <SearchIcon color="primary" />
                    </ListItemIcon>
                    <ListItemText primary="SWL Database Search" />
                  </ListItem>
                </List>
                <Divider />
                <List>
                  <ListItem button>
                    <ListItemIcon>
                      <BusinessIcon color="primary" />
                    </ListItemIcon>
                    <ListItemText primary="Companies" />
                  </ListItem>
                  <ListItem button>
                    <ListItemIcon>
                      <PeopleIcon color="primary" />
                    </ListItemIcon>
                    <ListItemText primary="Users" />
                  </ListItem>
                </List>
                <Divider />
                
                <List>
                  <ListItem button>
                    <ListItemIcon>
                      <AccountCircle color="primary" />
                    </ListItemIcon>
                    <ListItemText primary="Profile" />
                  </ListItem>
                  <ListItem button>
                    <ListItemIcon>
                      <ExitToAppIcon color="primary" />
                    </ListItemIcon>
                    <ListItemText primary="Logout" />
                  </ListItem>
                </List>
              </div>
            </Drawer>
                      <IconButton aria-label="cart">
                          <Badge badgeContent={0} color="secondary" number="99">
                              <NotificationsIcon />
                          </Badge>
                      </IconButton>
            
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Radio Logger
          </Typography>
          <IconButton color="inherit" onClick={handleClick}>
            <AccountCircle />
          </IconButton>
          <Menu
            id="admin-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>Profile</MenuItem>
            <MenuItem onClick={handleClose}>Logout</MenuItem>
            <MenuItem onClick={handleClose}>Admin</MenuItem>
            <MenuItem onClick={handleClose}>Register</MenuItem>
            <MenuItem onClick={handleClose}>Settings</MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
          <div>
            <Container>  
              <Paper elevation={1} variant="outlined" square>
                  <Card>
                      <form>
                          <input type="text"/>
                      </form>
                          <form className={classes.container} noValidate>
                              <TextField
                                  id="date"
                                  label="Today's Date"
                                  type="date"
                                  defaultValue="2017-05-24"
                                  className={classes.textField}
                                  InputLabelProps={{
                                      shrink: true,
                                  }}

                              />
                          </form>
                          <form className={classes.container} noValidate>
                              <TextField
                                  id="date"
                                  label="Time (UTC/GMT)"
                                  type="time"
                                  defaultValue="2017-05-24"
                                  className={classes.textField}
                                  InputLabelProps={{
                                      shrink: true,
                                  }}
                              />
                          </form>
                          <form className={classes.container} noValidate>
                              <TextField
                                  id="number"
                                  label="Frequency"
                                  type="number"
                                  defaultValue="1800"
                                  className={classes.textField}
                                  InputLabelProps={{
                                      shrink: true,
                                  }}
                              />
                          </form>
                  </Card>
              </Paper>
            </Container>
          </div>
    </div>
    
  );
};

export default Header;
