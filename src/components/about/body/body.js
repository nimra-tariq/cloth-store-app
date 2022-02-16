
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { useStyles } from './styles';
import { Typography } from '@material-ui/core';
import '@fontsource/roboto/500.css';

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export default function Body() {
    const classes = useStyles();
    return (
        <Box sx={{ width: '100%' }}>
            <Grid  container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid  item xs={12} md={12} sm={12}>
                    <Item> <div className={classes.bodyBgImg}>
                        <div className={classes.textContainer}>
                            <Typography className={classes.tagLine} variant="h3" component="h3">
                                Our Mission
                            </Typography>
                            <div className='container'>
                                <Typography paragraph={true} className={classes.paragraph} >
                                Designer is a fashion brand created for thoes who enjoy indulging in the latest lifestyle trends; wear it to look stylish.
                                </Typography>
                            </div>
                        </div>
                    </div>
                    </Item>
                </Grid>
                <Grid   item xs={12} md={12} sm={12} >
                    <Item > <div className={classes.aboutDiv}>
                        <div >
                            <Typography className={classes.aboutStatement} variant="h3" component="h3">
                                About Us
                            </Typography>
                            <div >
                                <Typography paragraph={true} className={classes.aboutParagraph} >
                                Designer has always been able to provide the best in fashion through a unique and flexible model that is open to adapting to the constant changes that occur during a season. At the same time, we are able to respond to key trends and develop them into wearable fashion in the shortest possible time for a collection that is fun, vibrant, and expressive.
                                </Typography>
                            </div>
                        </div>
                    </div>
                    </Item>
                </Grid>
            </Grid>
        </Box>
    );
}
