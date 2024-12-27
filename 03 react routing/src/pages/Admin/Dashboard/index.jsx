import React, { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import { Helmet } from 'react-helmet-async';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import Typography from '@mui/material/Typography';
import controller from '../../../services';
import { endpoints } from '../../../services/constants';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027',
  }),
}));

const Dashboard = () => {
  
  const [product, setProduct] = useState([]);

  
  useEffect(() => {
    const getProducts = async () => {
      try {
        
        const productData = await controller.getAllData(endpoints.products);
        setProduct(productData);
      } catch (error) {
        console.log(error);
      }
    };

    getProducts(); 
  }, []); 
  return (
   <>
    <Helmet>
        <title>Products Page</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
    <div style={{ margin: '3rem' }}>
      <Container>
        <h1 style={{margin: 50 , color: "orangered" , textAlign : "center"}}>Farid Chef's Menu</h1>
        <Box sx={{ flexGrow: 1 }}>
          
          <Grid container spacing={8}>
            
            {product &&
              product.map((p) => {
                return (
                  <Grid item xs={12} sm={6} md={4} lg={4} key={p.id}>
                    <Card sx={{ maxWidth: 445 , height: 650 }}>
                      <CardMedia
                        sx={{ minHeight: 400  }}
                        image={p.thumbnail}
                        title={p.title}
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                          {p.title}
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                          {p.description}
                        </Typography>
                      </CardContent>
                      <CardActions>
                        <Typography variant="body2" sx={{ color: 'red' }}>
                          ${p.price}
                        </Typography>
                      </CardActions>
                    </Card>
                  </Grid>
                );
              })}
          </Grid>
        </Box>
      </Container>
    </div></>
  );
};

export default Dashboard;