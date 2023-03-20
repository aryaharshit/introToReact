import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import CompImg from '../assets/images/prod_comp.jpg';
import mobImg from '../assets/images/prod_mobile.jpg';
import tabImg from '../assets/images/prod_tab.jpg';
import Grid from '@mui/material/Grid';
import { Box } from '@mui/material';
import { useState } from 'react';
import notifs from './alert.js';

export default function Sellproducts() {

  const [alert, setAlert] = useState(false);

  React.useEffect(() => {
    if (alert) {
      setTimeout(() => {
        setAlert(false);
      }, 3000); 
    }
  }, [alert])
  return (
    <>
    <div style={{marginLeft: '220px'}}>
      {alert}
    </div>
    <Box display={"in-line"}>
    <Grid 
    container spacing={2}
    style={{marginLeft: '220px'}}>

      <Grid item xs={4}>
      <Card style={{ marginTop:'20px'}}  sx={{ height: 400 }}>
        <CardActionArea onClick={() => setAlert(notifs[0])} >
          <CardMedia
            component="img"
            height="140"
            image={CompImg}
            alt="Desktop"
          />  
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Computer
            </Typography>
            <Typography variant="body2" color="text.secondary">
            Experience lightning-fast performance and unparalleled multitasking capabilities with our cutting-edge PC lineup. 
            From gaming to productivity, our machines are designed
            to exceed your expectations and take your computing experience to the next level.
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>

    <Grid item xs={4}>
      <Card style={{ marginTop:'20px'}} sx={{height: 400}}>
        <CardActionArea onClick={ () => setAlert(notifs[1])} >
          <CardMedia
            component="img"
            height="140"
            image={mobImg}
            alt="Desktop"
          />  
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Mobile
            </Typography>
            <Typography variant="body2" color="text.secondary">
            Stay connected and productive on-the-go with our powerful and sleek mobile devices. 
            Whether you need a smartphone for daily use or a tablet for entertainment, 
            our lineup offers premium features and functionality to keep you ahead of the curve.
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>

    <Grid item xs={4}>
      <Card style={{ marginTop:'20px'}}  sx={{ height: 400 }}>
        <CardActionArea onClick={ () => setAlert(notifs[2])} >
          <CardMedia
            component="img"
            height="140"
            image={tabImg}
            alt="Desktop"
          />  
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Tablets
            </Typography>
            <Typography variant="body2" color="text.secondary">
            Experience the perfect balance of portability and productivity with our range of tablets. 
            From entertainment to work, our devices offer stunning displays, powerful processors, 
            and all-day battery life to keep you connected wherever you go.
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
    </Grid>
    </Box>
    </>
    
  );
}