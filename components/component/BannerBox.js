import React from 'react';
import styles from '../../styles/Home.module.css'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid'

const bull = (
    <Box
      component="span"
      sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
      •
    </Box>
  );

function BannerBox() {
    return (
        <Grid container className={styles.MainBannerBox} > 
            <Grid md={2} className={styles.BannerBox}>
            <Card >
            <CardContent>
        
            
            </CardContent>
            <CardActions>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
            </Grid>
            <Grid md={2} className={styles.BannerBox}>
            <Card >
            <CardContent>
        
            
            </CardContent>
            <CardActions>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
            </Grid>
            <Grid md={2} className={styles.BannerBox}>
            <Card >
            <CardContent>
        
            
            </CardContent>
            <CardActions>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
            </Grid>
            <Grid md={2} className={styles.BannerBox}>
            <Card >
            <CardContent>
        
            
            </CardContent>
            <CardActions>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
            </Grid>
        </Grid>
        
    )
}

export default BannerBox;
