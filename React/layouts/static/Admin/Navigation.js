import {
  Menu as MenuIcon,
  Input as LogoutIcon,
  Visibility as ShopifyFront,
  ViewQuilt as ShopifyAdmin,
  ChevronLeft as ChevronLeftIcon,
  ChevronRight as ChevronRightIcon
} from "@material-ui/icons"; 
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText"; 
import React from "react";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import classNames from "classnames";
import { Ajax } from "layouts/Ajax";
import { SIDEBAR_NAV_LINKS, BASE_URL } from "../AdminRoute";
import NavLink from "../NavLink";
import { styles } from "layouts/styles/AdminStyle";
//import Loadable from 'react-loadable';
//import asyncComponent from '../AsyncComponent';

//const Dashboard = asyncComponent(() => import('../store_admin/Dashboard.js')
//);
//const Payment =asyncComponent(() => import('../store_admin/Payment.js')
//);

class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: true
    };
    
  }
  handleDrawerClose = e => {
    this.setState({ open: false });
  }
  handleDrawerOpen = values => {
    this.setState({ open: true });
  }
  logout = () => {
    debugger;
    Ajax.call({
      url: BASE_URL + "logout",
      method: "get",
      success: function(data) {
        window.location.reload();
      }
    });
    //          return (<Redirect to='/login' />);
  }

  render() {
    const { classes, theme } = this.props;

    return (
      <div>
        <div>
          <AppBar
            position="absolute"
            className={classNames(
              classes.appBar,
              this.state.open && classes.appBarShift
            )}
          >
            <Toolbar disableGutters={!this.state.open}>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={this.handleDrawerOpen}
                className={classNames(
                  classes.menuButton,
                  this.state.open && classes.hide
                )}
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="title" color="inherit" noWrap />
            </Toolbar>
          </AppBar>
        </div>
        <div>
          <Drawer
            variant="permanent"
            classes={{
              paper: classNames(
                classes.drawerPaper,
                !this.state.open && classes.drawerPaperClose
              )
            }}
            open={this.state.open}
          >
            <div className={classes.toolbar}>
              <IconButton onClick={this.handleDrawerClose}>
                {theme.direction === "rtl" ? (
                  <ChevronRightIcon />
                ) : (
                  <ChevronLeftIcon />
                )}
              </IconButton>
            </div>
            <Divider />
            <List>
              {SIDEBAR_NAV_LINKS.map((link, i) => {
                if (link.is_divider) {
                  return <Divider key={i} />;
                } else {
                  return (
                    <NavLink
                      key={i}
                      to={link.to}
                      primary={link.primary}
                      icon={<link.icon />}
                    />
                  );
                }
              })}

              <Divider />
              <ListItem button onClick={this.logout}>
                <ListItemIcon>
                  <LogoutIcon />
                </ListItemIcon>
                <ListItemText primary="Logout" />
              </ListItem>
            </List>
          </Drawer>
        </div>
      </div>
    );
  }
}
// export default Navigation;
export default withStyles(styles, { withTheme: true })(Navigation);
