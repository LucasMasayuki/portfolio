import {
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  Typography,
} from '@mui/material';
import Image from 'next/image';
import React from 'react';

const ExperienceSection: React.FC = () => {
  const onClickGoTo = (url: string): void => {
    window.open(url, '_blank');
  };

  return (
    <Grid
      container
      sx={{ p: 8, height: '100%' }}
      gap={4}
      id="experiencce-section"
    >
      <Grid item xs={12}>
        <Typography variant="h2" fontWeight="bold">
          Experience
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Card sx={{ height: '100%' }}>
          <CardContent sx={{ p: 2 }}>
            <Grid container alignItems="center">
              <Grid item xs={4} textAlign="center">
                <Box
                  height={256}
                  width="100%"
                  position="relative"
                  sx={{ borderRadius: 20 }}
                >
                  <Image
                    src="/deliverydireto.png"
                    alt="delivery-direto"
                    layout="fill"
                  />
                </Box>
                <br />
                <Button
                  variant="contained"
                  onClick={() => {
                    onClickGoTo('https://site.deliverydireto.com.br/');
                  }}
                >
                  Go to Delivery Direto
                </Button>
              </Grid>
              <Grid item xs={8}>
                <Typography variant="h4" fontWeight="bold">
                  Full stack web developer
                </Typography>
                <Typography variant="h6" fontWeight="lighter">
                  Delivery Direto
                </Typography>
                <Typography variant="h6" fontWeight="lighter">
                  Dec/2017 - actual
                </Typography>
                <br />
                <Typography variant="h6" fontWeight="lighter">
                  White label delivery platform, ranging from the
                  application/web to the website for managing the restaurant
                  business.
                </Typography>
                <Typography variant="h6" fontWeight="lighter">
                  I have been involved in several projects, including:
                </Typography>
                <Typography variant="h6" fontWeight="lighter">
                  Maintenance and improvement in legacy system built with{' '}
                  <Typography component="span" variant="h6" fontWeight="bold">
                    cakePHP
                  </Typography>{' '}
                  and{' '}
                  <Typography component="span" variant="h6" fontWeight="bold">
                    JQuery
                  </Typography>{' '}
                </Typography>
                <Typography variant="h6" fontWeight="lighter">
                  Implementation and integration of new features built in{' '}
                  <Typography component="span" variant="h6" fontWeight="bold">
                    Flutter
                  </Typography>{' '}
                  in the legacy system, through webview
                </Typography>
                <Typography variant="h6" fontWeight="lighter">
                  Maintenance and development of a new management system built
                  on{' '}
                  <Typography component="span" variant="h6" fontWeight="bold">
                    Nuxt.js
                  </Typography>{' '}
                  in order to replace the legacy
                </Typography>
                <Typography variant="h6" fontWeight="lighter">
                  Integration with online payment via{' '}
                  <Typography component="span" variant="h6" fontWeight="bold">
                    Stripe
                  </Typography>{' '}
                  and{' '}
                  <Typography component="span" variant="h6" fontWeight="bold">
                    Vindi
                  </Typography>{' '}
                </Typography>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12}>
        <Card sx={{ height: '100%' }}>
          <CardContent sx={{ p: 2 }}>
            <Grid container alignItems="center">
              <Grid item xs={8}>
                <Typography variant="h4" fontWeight="bold">
                  Freelancer full stack web developer
                </Typography>
                <Typography variant="h6" fontWeight="lighter">
                  Petzillas
                </Typography>
                <Typography variant="h6" fontWeight="lighter">
                  ago/2021 - ago/2022
                </Typography>
                <br />
                <Typography variant="h6" fontWeight="lighter">
                  Application to help take care of the pet and help pet
                  professionals to manage their business through a web system
                </Typography>
                <Typography variant="h6" fontWeight="lighter">
                  I was Construction of an ERP from scratch, to assist in the
                  management of pet shops, integrated with an Android/Ios
                  application, along the lines of a pet products marketplace
                </Typography>
                <Typography variant="h6" fontWeight="lighter">
                  The Erp was built using{' '}
                  <Typography component="span" variant="h6" fontWeight="bold">
                    typescript
                  </Typography>{' '}
                  as the primary language, using{' '}
                  <Typography component="span" variant="h6" fontWeight="bold">
                    node (Express)
                  </Typography>{' '}
                  on the backend and{' '}
                  <Typography component="span" variant="h6" fontWeight="bold">
                    React.js
                  </Typography>{' '}
                  on the frontend, as main tools and frameworks. In addition, I
                  built every part of the application's graphical interface
                  using material ui library, with the best UI and UX practices.
                  I used{' '}
                  <Typography component="span" variant="h6" fontWeight="bold">
                    Typeorm
                  </Typography>{' '}
                  as ORM, to work on top of a database in{' '}
                  <Typography component="span" variant="h6" fontWeight="bold">
                    SQL Server
                  </Typography>{' '}
                </Typography>
              </Grid>
              <Grid item xs={4} textAlign="center">
                <Box
                  height={256}
                  width="100%"
                  position="relative"
                  sx={{ borderRadius: 20 }}
                >
                  <Image src="/petzillas.png" alt="petzillas" layout="fill" />
                </Box>
                <br />
                <Button
                  variant="contained"
                  onClick={() => {
                    onClickGoTo('https://petzillas.com.br/');
                  }}
                >
                  Go to Petzillas
                </Button>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default ExperienceSection;
