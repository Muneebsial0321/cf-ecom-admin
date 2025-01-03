/* eslint-disable no-unused-vars */
"use client"
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import { Link } from 'react-router-dom';
import { Drawer, ListItem, ListItemButton, ListItemIcon } from '@mui/material';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';


const _pages = [
    { name: "Login", href: "/auth/login" },
    { name: "Signup", href: "/auth/signup" },
    { name: "Products", href: "/products/somthing" },
    { name: "Create Products", href: "/products" },
]

function NavBar() {
    const [open, setOpen] = React.useState(false);
    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen);
    };

    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };


    return (
        <AppBar
            className='bg-black text-white'
            position="fixed">
            <Container>
                <Toolbar disableGutters>

                    {/* for mobiles */}
                    <Box
                    >
                        <IconButton
                            className=""
                            size="large"
                            onClick={handleOpenNavMenu}
                            color="inherit">

                            {/* menu button */}
                            <MenuIcon onClick={toggleDrawer(true)} />
                        </IconButton>
                    </Box>
                    {/* mobile drawer */}
                    <Drawer
                        open={open}
                        onClose={toggleDrawer(false)}>
                        <div className="w-[15rem] bg-black h-[100vh] flex flex-col gap-3 px-3 items-center pt-10">
                            {_pages.map((e, i) => (
                                <Link
                                    className='w-full'
                                    to={e.href}
                                    key={i}
                                    onClick={toggleDrawer(false)}>
                                    <ListItem disablePadding>
                                        <ListItemButton>
                                            <ListItemIcon>
                                                {i % 2 === 0 ? <InboxIcon className='text-white' /> : <MailIcon className='text-white' />}
                                            </ListItemIcon>
                                            <p className="text-white text-xl font bold">{e.name}</p>
                                        </ListItemButton>
                                    </ListItem>
                                </Link>
                            ))}



                        </div>
                    </Drawer>
                    {/* logo */}


                    {/* for web */}
                    {/* <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        {_pages.map((e, i) => (
                            <Link
                                key={i}
                                to={e.href}>
                                <Button
                                    onClick={handleCloseNavMenu}
                                    sx={{ my: 2, color: 'white', display: 'block' }}>
                                    {e.name}
                                </Button>
                            </Link>
                        ))}
                    </Box> */}


                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default NavBar;
