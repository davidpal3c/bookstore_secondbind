import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Container } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';


const Header = () => {
    return (
        <AppBar position="static" sx={{ backgroundColor: '#5d3fd3' }}>
            <Container>
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1, borderRadius: 10 }}>
                        Bookstore App
                    </Typography>
                    <IconButton edge="start" color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <Button color="inherit">Login</Button>
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default Header;