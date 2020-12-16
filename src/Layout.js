import React, { useState, useContext } from 'react'
import {
    AppBar,
    Toolbar,
    IconButton,
    makeStyles,
    Drawer,
    List,
    ListItem,
    Button,
} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import { NavLink } from 'react-router-dom'

import LoginDialog from './components/loginDialog'
import { AuthContext } from './contexts/AuthContext'
//import { createMuiTheme } from '@material-ui/core/styles';
//import { green, lightBlue, lime } from '@material-ui/core/colors'

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
      color: '#00695f'
    },
    warshipfacts: {
        color: '#ADD8E6',
    },
    esports: {
        color: '#008000',
    },
    rickmortystuff : {
      color: '#32CD32',
    },
    navSpacing: {
        marginRight: '4rem',
        color: '#fff',
        textDecoration: 'none',
    },
    list: {
        width: 250,
        backgroundColor: '#556B2F',
    },
}))

export default function ButtonAppBar() {
  const classes = useStyles()
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [loginOpen, setLoginOpen] = useState(false)

  const authContext = useContext(AuthContext)

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen)
  }

/*   const handleDialogToggle = () => {
    setLoginOpen(!loginOpen)
  } */

  const handleAuth = () => {
    console.log(authContext.isAuth)
    if (authContext.isAuth) {
      authContext.logout()
      setLoginOpen(false)
      return
    }
    if (!authContext.isAuth) {
      if (!loginOpen) {
        setLoginOpen(true)
        return
      }
      setLoginOpen(false)
    }
  }

  return (
    <div className={classes.root}>
      <AppBar position='static'>
        <Toolbar>
          <IconButton
            edge='start'
            className={classes.menuButton}
            color='inherit'
            aria-label='menu'
            onClick={handleDrawerToggle}
          >
            <MenuIcon />
          </IconButton>
          <NavLink to='/esports' className={classes.navSpacing}>
            Esports
          </NavLink>
          <NavLink to='/warshipFacts' className={classes.navSpacing}>
            Warship Facts
          </NavLink>
          <NavLink to='/graphql' className={classes.navSpacing}>
            Rick & Morty Stuff
          </NavLink>

          {
            authContext.isAuth ? <Button color='inherit' onClick={handleAuth}>Logout</Button> :
            <Button color='inherit' onClick={handleAuth}>Login</Button>
          }
        </Toolbar>
      </AppBar>
      <Drawer open={drawerOpen} onClose={handleDrawerToggle}>
        <List className={classes.list}>
          <ListItem>
          <NavLink to='/esports' className={classes.navSpacing} onClick={handleDrawerToggle}>
            Esports
          </NavLink>
          </ListItem>
          <ListItem>
          <NavLink to='/warshipFacts' className={classes.navSpacing} onClick={handleDrawerToggle}>
            Warship Facts
          </NavLink>
          </ListItem>
          <ListItem>
          <NavLink to='/graphql' className={classes.navSpacing} onClick={handleDrawerToggle}>
            Rick & Morty Stuff
          </NavLink>
          </ListItem>
        </List>
      </Drawer>
      <LoginDialog open={loginOpen} onClose={handleAuth}/>
    </div>
  )
}