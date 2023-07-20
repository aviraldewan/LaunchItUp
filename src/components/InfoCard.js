import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import './InfoCard.css';

const InfoCard = ({ image, title, content, linkedin }) => {
  return (
    <>
          <Card className="custom-card">
          <a href={linkedin} className="card-link"><CardMedia className="card-image-passed" component="img" image={image} title={title} /></a>
          <a href={linkedin} className="card-link"><CardContent>
              <h4 style={{ marginTop: '0', fontSize: '25px', fontWeight: '700', letterSpacing: '1px', color: '#012970', fontFamily: 'Nunito, sans-serif', marginBottom: '5%', textAlign: 'center' }}>
                {title}
              </h4>
              <Typography variant="body2" color="text.secondary" style={{ textAlign: 'center' }}>
                {content}
              </Typography>
            </CardContent>
            </a>
          </Card>
    </>
  );
};

export default InfoCard;
