import React, { useEffect, useState } from 'react';
import NavBar from './components/NavBar';
import Banner from './components/Banner';
import ImageSlider from './components/ImageSlider';
import InfoCard from './components/InfoCard';
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import './Home.css';
// import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import "./components/Banner.css";

const styles = {
    container: {
      display: 'flex',
      flexWrap: 'wrap',
      padding: '20px',
    },
    divItem: {
      flex: '1 0 33%', // Each div takes 33.33% of the container's width
      padding: '20px',
      boxSizing: 'border-box',
      border: '1px solid #ccc',
    },
  };

export default function Home() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const isMobile = window.innerWidth <= 600;

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <div className='Home'
        style={{
          backgroundImage: `url('https://markitup.in/assets/img/hero-bg.png')`,
          backgroundSize: 'cover',
          backgroundPosition: `center ${-scrollPosition * 0.5}px`, // Adjust the multiplier to control the parallax effect
          backgroundRepeat: 'no-repeat',
          minHeight: '100vh', // Ensure the background covers the entire viewport height
        }}
      >
        <NavBar />
        <Banner />
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '40px' }}>
        <h2 style={{ marginTop: '0', fontSize: '30px', fontWeight: '700', letterSpacing: '1px', color: '#012970', fontFamily: 'Nunito, sans-serif', marginBottom: '5%' }}>Our Testimonials</h2>
        <ImageSlider />
      </div>
      <div id="Services" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '40px' }}>
      <h4 style={{ marginTop: '0', fontSize: '20px', fontWeight: '700', letterSpacing: '1px', color: '#4154f1', fontFamily: 'Nunito, sans-serif', }}>Our Services</h4>
      <h2 style={{ marginTop: '0', fontSize: '40px', fontWeight: '700', letterSpacing: '1px', color: '#012970', fontFamily: 'Nunito, sans-serif', marginBottom: '5%', textAlign: 'center' }}>Here's what we offer</h2>
        <div className='custom-card-container' style={{display: 'flex', flexWrap: 'wrap', marginTop: '0'}}>
            <InfoCard title="360° Web/App Development" content="We'll cover it all! From designing to deploying it on internet and everything in between" image="https://cdn.educba.com/academy/wp-content/uploads/2019/05/web-application.gif" />
            <InfoCard title="Content Creation" content="We'll curate innovative content like memes, short videos etc which will engage your audience and skyrocket your brand value" image="https://markitup.in/assets/img/values-4.png" />
            <InfoCard title="Social Media Management" content="We'll help in developing brand awareness and in strengthening engagement strategies to increase customer loyalty" image="https://markitup.in/assets/img/values-2.png" />
        </div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginBottom: '20px', backgroundColor: '#e1ecff', padding: '50px', }}>
  <h2 style={{ marginTop: '0', fontSize: '25px', fontWeight: '700', letterSpacing: '1px', color: '#012970', fontFamily: 'Nunito, sans-serif', textAlign: 'center', justifyContent: 'center' }}>Get in touch</h2>
  <p style={{textAlign:'center'}}>Want to know how we can help your brand stand out? Let's discuss!</p>
  <Button
    variant="contained" // Updated variant value
    sx={{
      backgroundColor: "#4154f1",
      color: "white",
      textTransform: "none",
      padding: "30px",
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
    Contact Us
  </Button>
</div>
<div id="About">
  <div style={styles.container}>
    {/* InfoCard 1 */}
    <div
      style={{
        flex: isMobile ? '0 0 100%' : '1',
        textAlign: isMobile ? 'center' : 'left',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: isMobile ? 'center' : 'flex-start',
        marginBottom: '20px',
        padding: '10px',
      }}
    >
      <h4>WHO WE ARE</h4>
      <h2>We are a team of experienced developers who love developing apps</h2>
      <p>We specialize in various forms of development, anything from graphic design to app development to hosting the websites that engage with the right audience.</p>
      <Button variant="contained" sx={{ backgroundColor: "#4154f1", color: "white", textTransform: "none", padding: "10px", width: '150px', paddingTop: "5px", paddingBottom: "5px", fontWeight: "550", ":hover": { bgcolor: "hotpink", boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)" }, boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)" }}>
        Learn More<span style={{ fontSize: "24px" }}>&rarr;</span>
      </Button>
    </div>
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flex: '1', flexWrap: isMobile ? 'wrap' : 'nowrap' }}>
      <InfoCard
        style={styles.divItem}
        passed={true}
        linkedin="https://www.linkedin.com/in/abhijain03/"
        image="https://media.licdn.com/dms/image/D4D03AQG4Ord-yihtzQ/profile-displayphoto-shrink_400_400/0/1675307622289?e=1695254400&v=beta&t=X9bs21vskyx5W3__jJsISXoh75CWa14gbjLDOeIG0QI"
        title="Abhi Jain"
        content="Software Developer with 4 years of experience in working with brands and clients and boosting their customers by improving their websites and apps"
      />
      <InfoCard
        style={styles.divItem}
        passed={true}
        linkedin="https://www.linkedin.com/in/aviraldewan/"
        image="https://media.licdn.com/dms/image/D4D03AQG3lFT1jg8uYw/profile-displayphoto-shrink_400_400/0/1681595550548?e=1695254400&v=beta&t=yWZ7aGK4Zqsgf55j1nIGzLTbZlIxdZhR64nCffAhIhw"
        title="Aviral Dewan"
        content="Software Developer with 3 years of experience, has worked with MNCs like Audacix, Youth Story(IIT Patna) and has an All India Rank under 600."
      />
    </div>
  </div>
</div>
<div id="Contact"
  style={{
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e1ecff',
    marginTop: '50px',
    padding: '50px',
  }}
>
  <h4 style={{
    marginTop: '0',
    fontSize: '20px',
    fontWeight: '700',
    letterSpacing: '1px',
    color: '#4154f1',
    fontFamily: 'Nunito, sans-serif',
  }}>CONTACT</h4>    
  <h2 style={{
    marginTop: '0',
    fontSize: '25px',
    fontWeight: '700',
    letterSpacing: '1px',
    color: '#012970',
    fontFamily: 'Nunito, sans-serif',
  }}>Contact us</h2>
  <i className="bi bi-envelope"></i>
  <h3 style={{ color: '#012970', fontFamily: 'Nunito, sans-serif' }}>Email Us</h3>
  <p style={{ color: '#007aff' }}>aviral@launchitup.in</p>
  <p style={{ color: '#007aff' }}>abhi@launchitup.in</p>
</div>
    </div>
  );
}
