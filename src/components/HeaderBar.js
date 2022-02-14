import * as React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { auth } from "../firebase-config";
import { onAuthStateChanged, signOut } from "firebase/auth";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";

const pages = ["Used Cars", "New Cars"];
const HeaderBar = () => {
  const [user, setUser] =  useState();
  const [anchorElUser, setAnchorElUser] = useState(null);
  const navigate = useNavigate();

  onAuthStateChanged(auth,(currentUser)=>{
    setUser(currentUser);
  })

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const logout = async () => {
    await signOut(auth);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const handleProfileMenu = () => {
    setAnchorElUser(null);
    navigate('/profile');
  };
  const handleSettingMenu = () => {
    setAnchorElUser(null);
  };
  const handleLogoutMenu = () => {
    setAnchorElUser(null);
    logout();
    navigate('/login')
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h7"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
          >
            BuyWheels
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {page}
              </Button>
            ))}
              {user && <h5>{user.email}</h5>}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              <MenuItem key='profile' onClick={handleProfileMenu}>
                <Typography textAlign="center" color="black">
                  Profile
                </Typography>
              </MenuItem>
              <MenuItem key='setting' onClick={handleSettingMenu}>
                <Typography textAlign="center" color="black">
                  Settings
                </Typography>
              </MenuItem>
              <MenuItem key='logout' onClick={handleLogoutMenu}>
                <Typography textAlign="center" color="black">
                  Logout
                </Typography>
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default HeaderBar;
