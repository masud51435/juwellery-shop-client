import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Button, Container } from '@mui/material';
import MyOrder from '../myorder/MyOrder';
import AllOrder from '../allorder/AllOrder';
import {
  Switch,
  Route,
  Link,
  useRouteMatch
} from "react-router-dom";
import BillPay from '../billpay/BillPay';
import UseAuth from '../../../context/UseAuth';
import MakeAdmin from '../makeAdmin/MakeAdmin';
import AdminRoute from '../../login/adminRoute/AdminRoute';
import AddItem from '../additem/AddItem';
import AddReview from '../addreview/AddReview';
import ManageProduct from '../manageProduct/ManageProduct';


const drawerWidth = 200;

function DashBoard(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const { logOut, admin } = UseAuth();

  let { path, url } = useRouteMatch();
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div style={{textAlign:'left'}}>
      <Toolbar />
      <Divider />

      <Link style={{textDecoration:'none'}} to='/home'><Button>Home</Button></Link>
      <Divider />
      {!admin && <Box> <Link style={{textDecoration:'none'}} to={`${url}`}><Button>My Order</Button></Link>
        <Divider />
        <Link style={{textDecoration:'none'}} to={`${url}/addReview`}><Button>Add Review</Button></Link>
        <Divider />
        <Link style={{textDecoration:'none'}} to={`${url}/paybill`}><Button>Pay Bill</Button></Link>
        <Divider />
      </Box>}

      {admin && <Box>
        <Link style={{textDecoration:'none'}} to={`${url}`}><Button>Manage All Order</Button></Link>
        <Divider />
        <Link style={{textDecoration:'none'}} to={`${url}/makeadmin`}><Button>Make Admin</Button></Link>
        <Divider />
        <Link style={{textDecoration:'none'}} to={`${url}/additem`}><Button>Add Product</Button></Link>
        <Divider />
        <Link style={{textDecoration:'none'}} to={`${url}/manageProduct`}><Button>Manage Product</Button></Link>
      </Box>}
      <Link style={{textDecoration:'none'}} to='/home'> <Button onClick={logOut} >logOut</Button></Link>
      <Divider />

    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div" sx={{fontFamily: 'Segoe Script', fontWeight: 'bold'}}>
            DashBoard
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
        <Container>
          <Switch>
            <Route exact path={path}>
              {!admin ? <MyOrder></MyOrder> :
                <AllOrder></AllOrder>}
            </Route>
            <AdminRoute path={`${path}/allorder`}>
              <AllOrder></AllOrder>
            </AdminRoute>
            <Route path={`${path}/paybill`}>
              <BillPay></BillPay>
            </Route>
            <Route path={`${path}/addReview`}>
              <AddReview></AddReview>
            </Route>
            <AdminRoute path={`${path}/makeadmin`}>
              <MakeAdmin></MakeAdmin>
            </AdminRoute>
            <AdminRoute path={`${path}/additem`}>
              <AddItem></AddItem>
            </AdminRoute>
            <AdminRoute path={`${path}/manageProduct`}>
              <ManageProduct></ManageProduct>
            </AdminRoute>
          </Switch>
        </Container>
      </Box>
    </Box>
  );
}

DashBoard.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default DashBoard;