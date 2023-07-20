import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import "./NavBar.css";

const drawerWidth = 240;
const navItems = ["Home", "Services", "About", "Contact", "Contact Us"];

function ElevationScroll({ children }) {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
    sx: {
      background: trigger ? "#fff" : "transparent",
      boxShadow: trigger ? "0 2px 4px rgba(0, 0, 0, 0.1)" : "none",
    },
  });
}

ElevationScroll.propTypes = {
  children: PropTypes.element.isRequired,
};

function NavBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState("Home");

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
    setSelectedItem(null);
  };

  const handleNavItemClick = (item) => {
    setSelectedItem(item);
  };

  const drawer = (
    <Box sx={{ width: drawerWidth }}>
      <List>
        {navItems.map((item) =>
            <ListItem key={item}>
              { item !== "Contact Us" ? (
                <a href={`#${item}`} style={{textDecoration: "none"}}>
                <ListItemButton
                  selected={selectedItem === item}
                  sx={{
                    textTransform: "none",
                    color: selectedItem === item ? "#4154f1" : "#013289",
                    fontWeight: "bold",
                    marginRight: "10px",
                  }}
                  onClick={() => handleNavItemClick(item)}
                >
                  <ListItemText primary={item} />
              </ListItemButton>  </a>)
              : (
            <a
              className="contact-button"
              href="https://docs.google.com/forms/d/e/1FAIpQLScb6eV-IRGj3YLQCLLDCI4Wf_QQnksTAQ8UrOPtfAagJ7MR7g/viewform?usp=sf_link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="contained"
                sx={{
                  textTransform: "none",
                  ":hover": {
                    bgcolor: "hotpink",
                  },
                }}
              >
                Contact us
              </Button>
            </a>
          )}
            </ListItem>
        )}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <ElevationScroll>
        <AppBar
          component="nav"
          sx={{
            padding: "1%",
            paddingRight: "5%",
          }}
        >
          <Toolbar>
            <div style={{marginLeft: '5%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
          <img
            src="./logo.png"
            alt="Image"
            style={{ height: "40px" }}
          />
               <span style={{
            fontSize: "30px",
            fontWeight: "700",
            letterSpacing: "1px",
            color: "#012970",
            fontFamily: "Nunito, sans-serif"}}>
            LaunchitUp
          </span>
            </div>
            <Box
              sx={{
                display: { xs: "none", sm: "block", marginRight: "20px" },
                ml: "auto",
              }}
            >
              {navItems.map((item) =>
                item !== "Contact Us" ? (<a href={`#${item}`}>
                  <Button
                    key={item}
                    onClick={() => handleNavItemClick(item)}
                    sx={{
                      textTransform: "none",
                      color: selectedItem === item ? "#4154f1" : "#013289",
                      fontWeight: "bold",
                      marginRight: "10px",
                    }}
                  >
                    {item}
                  </Button></a>
                ) : (
                  <a
                    href="https://docs.google.com/forms/d/e/1FAIpQLScb6eV-IRGj3YLQCLLDCI4Wf_QQnksTAQ8UrOPtfAagJ7MR7g/viewform?usp=sf_link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      variant="contained"
                      sx={{
                        textTransform: "none",
                        ":hover": {
                          bgcolor: "hotpink",
                        },
                      }}
                    >
                      Contact us
                    </Button>
                  </a>
                )
              )}
            </Box>
            <Box sx={{ display: { xs: "block", sm: "none" }, ml: "auto" }}>
              <IconButton
                color="primary"
                aria-label="open drawer"
                onClick={handleDrawerToggle}
              >
                <MenuIcon />
              </IconButton>
            </Box>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <Toolbar />
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
      </Box>
    </Box>
  );
}

NavBar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default NavBar;
