import React from 'react';
import { Container, Typography, Grid, Paper, Avatar, Box } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';




const AboutUs = () => {
  const containerStyle = {
    padding: '24px',
    marginTop: '40px',
  };

  const paperStyle = {
    padding: '24px',
  };

  const avatarStyle = {
    backgroundColor: '#1976d2',
    width: '56px',
    height: '56px',
    marginBottom: '8px',
  };

  const teamMemberStyle = {
    textAlign: 'center',
  };

  const sectionStyle = {
    marginTop: '32px',
  };

  const sectionHeaderStyle = {
    marginBottom: '16px',
    borderBottom: '2px solid #1976d2',
    paddingBottom: '8px',
  };

  const iconStyle = {
    marginRight: '8px',
    verticalAlign: 'middle',
  };

  return (
    <>
 
 
    <Container style={containerStyle}>
      
      <Typography variant="h4" gutterBottom style={{ textAlign: 'center' }}>
        About Us
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper style={paperStyle}>
            <Typography variant="h5" gutterBottom style={sectionHeaderStyle}>
              Welcome to Travel Hub
            </Typography>
            <Typography variant="body1" paragraph>
            Welcome to Travel Hub – your ultimate destination for all things travel! Whether you're a seasoned globetrotter or planning your first adventure, Travel Hub is here to inspire, guide, and support you every step of  the way.
            </Typography>
            <Typography variant="body1" paragraph>
            Founded by a group of passionate travelers, Travel Hub was born from a shared love of exploring new destinations and a desire to make travel more accessible and enjoyable for everyone. We believe that travel has the power to transform lives, broaden horizons, and create unforgettable memories.
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper style={paperStyle}>
            <Typography variant="h5" gutterBottom style={sectionHeaderStyle}>
              Mission Statement
            </Typography>
            <Typography variant="body1" paragraph>
            Our mission at Travel Hub is simple: to make travel planning easy, exciting, and stress-free. We aim to provide you with the best tools, resources, and tips to help you discover new places, create personalized itineraries, and make the most of your adventures.
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper style={paperStyle}>
            <Typography variant="h5" gutterBottom style={sectionHeaderStyle}>
            Comprehensive Travel Guides
            </Typography>
            <Typography variant="body1" paragraph>
            Our detailed travel guides cover destinations around the globe, offering insider tips, must-see attractions, and hidden gems. Whether you're looking for the best local cuisine, cultural experiences, or adventure activities, we've got you covered.
            </Typography>
          </Paper>
        </Grid>

    
    

        <Grid item xs={12}>
          <Paper style={paperStyle}>
            <Typography variant="h5" gutterBottom style={sectionHeaderStyle}>
              Contact Us
            </Typography>
            <Typography variant="body1" paragraph>
              <EmailIcon style={iconStyle} /> Email: contact@travelshub.com
            </Typography>
            <Typography variant="body1" paragraph>
              <PhoneIcon style={iconStyle} /> Phone: +1 (123) 456-7890
            </Typography>
          </Paper>
        </Grid>
      </Grid>
      
    </Container>
    </>
  );
};

const teamMembers = [
  { name: 'Prashant', role: 'Founder & CEO' },
  { name: 'Shwet Sagar', role: 'Chief Marketing Officer' },
  { name: 'Rahul Kumar', role: 'Chief Technology Officer' },
  { name: 'Abhay Singh', role: 'Chief  Financial Officer' },
  { name: 'Ronit Raj', role: 'Chief Manager' },
];

export default AboutUs;

