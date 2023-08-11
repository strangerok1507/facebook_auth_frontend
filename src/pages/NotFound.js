import React from 'react';
import {Link} from 'react-router-dom';
import { Box, Button, Container, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';

export default function Error() {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '50vh',
        paddingLeft: '100px'
      }}
    >
      <Container maxWidth="md">
        <Grid container spacing={2}>
          <Grid xs={6}>
            <Typography variant="h1">
              404
            </Typography>
            <Typography variant="h6">
              The page you’re looking for doesn’t exist.
            </Typography>
            <Button variant="contained" component={Link} to="/">Back Home</Button>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}