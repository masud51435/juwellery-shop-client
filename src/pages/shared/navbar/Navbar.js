import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { Link } from 'react-router-dom';
import UseAuth from '../../../context/UseAuth';
import MenuIcon from '@mui/icons-material/Menu';

import { useTheme } from '@mui/material';
import { makeStyles } from '@mui/styles';

import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';


const Navbar = () => {
  const { user, logOut } = UseAuth()

  const theme = useTheme();
  const useStyle = makeStyles({
    navIcon: {
      [theme.breakpoints.up('sm')]: {
        display: 'none !important'
      }
    },
    navItemContainer: {
      [theme.breakpoints.down('sm')]: {
        display: 'none '
      }
    },

  });
  const { navIcon, navItemContainer } = useStyle();

  //drawer
  const [state, setState] = React.useState(false);
  const list = (
    <Box
      sx={{ width: 250 }}
      role="presentation"
    >

      <List>
        <Divider />
        <ListItem button>
          <ListItemText>
            <Link style={{ textDecoration: 'none', color: 'black' }} to='/home'><Button color="inherit">Home</Button></Link>
          </ListItemText>
        </ListItem>
        <Divider />
        <ListItem button>
          <ListItemText>
            <Link style={{ textDecoration: 'none', color: 'black' }} to='/allservices'><Button color="inherit">Products</Button></Link>
          </ListItemText>
        </ListItem>
        <Divider />
        <ListItem button>
          <ListItemText>
            {user?.email && <Link style={{ textDecoration: 'none', color: 'black' }} to='/dashboard'>
              <Button color="inherit">DashBoard</Button>
            </Link>}
          </ListItemText>
        </ListItem>
        <Divider />
        <ListItem button>
          <ListItemText>
            {user?.email ?
              <Button onClick={logOut} color="inherit">logOut</Button>
              :
              <Link style={{ textDecoration: 'none', color: 'black' }} to='/login'>
                <Button color="inherit">Login</Button>
              </Link>
            }
          </ListItemText>
        </ListItem>
        <Divider />
      </List>
    </Box>
  );

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="fixed" sx={{ backgroundColor: '#FFFFFF', color: 'black', py: 1 }}>
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              className={navIcon}
              onClick={() => setState(true)}
            >
              <MenuIcon />
            </IconButton>
            <img src="https://cdn.shopify.com/s/files/1/0051/9159/8198/files/ghona-logo_125x.png?v=1622866351" alt="" />
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            </Typography>
            <Box className={navItemContainer}>
              <Link style={{ textDecoration: 'none', color: 'black' }} to='/home'><Button color="inherit">Home</Button></Link>

              <Link style={{ textDecoration: 'none', color: 'black' }} to='/allservices'><Button color="inherit">Products</Button></Link>

              {user?.email && <Link style={{ textDecoration: 'none', color: 'black' }} to='/dashboard'>
                <Button color="inherit">DashBoard</Button>
              </Link>}

              {user?.email ?
                <Button onClick={logOut} color="inherit">logOut</Button>
                :
                <Link style={{ textDecoration: 'none', color: 'black' }} to='/login'>
                  <Button color="inherit">Login</Button>
                </Link>
              }
            </Box>
          </Toolbar>
        </AppBar>
      </Box>

      <div>
        <React.Fragment >

          <Drawer
            open={state}
            onClose={() => setState(false)}
          >
            {list}
          </Drawer>
        </React.Fragment>

      </div>
    </>

  );
};

export default Navbar;