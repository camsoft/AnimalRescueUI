import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
//import MenuIcon from '@mui/icons-material/Menu';

const AppBarComp = ({ title = "Animal Rescue" }) => {
  return (
    <AppBar position="absolute">
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          {/*<MenuIcon />*/}
        </IconButton>
              {/*<Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>*/}
                  <Typography variant="h6" component="div" >
          {title}
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default AppBarComp;