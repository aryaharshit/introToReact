import React from 'react';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { navItems } from './constants/sidebarcomps';
import { navStyle } from './styles';
import { useNavigate } from 'react-router';
import { Toolbar } from '@mui/material';


function Sidebar(){
    const navigate = useNavigate(); 
    return (
      <>
        <Drawer
          sx={navStyle.drawer}
          variant="permanent"
          anchor="left"
        >
  
          <List>
            {navItems.map((items, index) => (
              <ListItem key={items.id} disablePadding>
                <ListItemButton
                sx = {navStyle.button}
                onClick={()=> navigate(items.route)}
                >
                  <ListItemIcon sx={navStyle.icon}>
                    {items.icon}
                  </ListItemIcon>
                  <ListItemText 
                    sx={navStyle.text} 
                    primary={items.label} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Drawer>
      </>
    )
}

export default Sidebar;