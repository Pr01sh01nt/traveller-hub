import { Box, Button, Container, Typography } from '@mui/material'
import React, { useState } from 'react'
import data from '../assets/termsAndconditions.js';

const TermsAndConditions = () => {
    const [expanded, setExpanded] = useState(false);

    const toggleExpanded = () => {
        setExpanded(!expanded);
      };

  return (
    <>
      <Container maxWidth="md" sx={{ py: 4 }}>
        <Typography variant="h4" gutterBottom>
          Terms & Conditions
        </Typography>
        <Box sx={{ backgroundColor: '#f5f5f5', p: 2, borderRadius: '8px' }}>
          <Typography variant="body1">
            {expanded ? data : `${data.slice(0, 1050)}...`}
          </Typography>
          {!expanded && (
            <Button onClick={toggleExpanded} color="primary">
              Read More
            </Button>
          )}
        </Box>
      </Container>
    </>
  )
}

export default TermsAndConditions
