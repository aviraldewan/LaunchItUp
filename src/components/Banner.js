import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import "./Banner.css";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

const Banner = () => {
  const isMobile = window.innerWidth <= 600;

  return (
    <Grid
      id="Home"
      container
      spacing={2}
      justifyContent="center"
      alignItems="center"
      style={{
        height: "65vh",
        padding: "0 20px",
        paddingLeft: "5%",
        paddingRight: "5%",
        animation: "riseAnimation 0.8s ease-out", // Add the animation property
      }}
    >
      <Grid
        item
        xs={12}
        md={6}
        textAlign={isMobile ? "left" : "center"}
        style={{
          opacity: 0, // Initially hide the content
          animation: "fadeInAnimation 0.8s forwards", // Add the fade-in animation
          animationDelay: "0.2s", // Delay the animation to sync with the rise animation
        }}
      >
        <Typography
          variant="h1"
          style={{
            color: "#012970",
            fontWeight: isMobile ? "700" : "bold",
            fontSize: isMobile ? "30px" : "40px",
            paddingBottom: "30px",
            textAlign: isMobile ? "center" : "left",
          }}
        >
          Developing Apps and Websites that capture attention
        </Typography>
        <Typography
          variant="h2"
          style={{
            textAlign: isMobile ? "center" : "left",
            fontFamily: "Nunito, sans-serif",
            fontWeight: "light",
            fontSize: isMobile ? "25px" : "30px",
            paddingBottom: "30px",
          }}
        >
          We help to launch brands by unleashing the potential of Apps and Web 🚀
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: isMobile ? "center" : "flex-start",
          }}
        >
            <Button
      variant="contained" // Updated variant value
      sx={{
        backgroundColor: "#4154f1",
        color: "white",
        textTransform: "none",
        padding: "50px",
        paddingTop: "5px",
        paddingBottom: "5px",
        fontWeight: "550",
        ":hover": {
          bgcolor: "hotpink",
          boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
        },
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
      }}
    >
                Learn how<span style={{ fontSize: "24px" }}>&rarr;</span>
              </Button>
        </Box>
      </Grid>
      <Grid
        item
        xs={12}
        md={6}
        textAlign="center"
        style={{
          opacity: 0, // Initially hide the content
          animation: "fadeInAnimation 0.8s forwards", // Add the fade-in animation
          animationDelay: "0.4s", // Delay the animation to sync with the rise animation
        }}
      >
        <img
          src="https://markitup.in/assets/img/hero-img-min.png"
          alt="Image"
          style={{ width: "100%", height: "100%" }}
        />
      </Grid>
    </Grid>
  );
};

export default Banner;
