import { Grid, Typography } from '@mui/material';
import React from 'react';
import CplugExperiece from '../../experiences/cplug-experience';
import DeliveryDiretoExperiece from '../../experiences/delivery-direto-experience';
import HubaudienceExperiece from '../../experiences/hubaudience-experience';
import IhungryExperiece from '../../experiences/ihungry-experience';
import PetzillasExperiece from '../../experiences/petzillas-experience';

const ExperienceSection: React.FC = () => {
  return (
    <Grid container sx={{ height: '100%' }} gap={4} id="experience-section">
      <Grid item xs={12}>
        <Typography variant="h2" fontWeight="bold">
          Experience
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <CplugExperiece />
      </Grid>
      <Grid item xs={12}>
        <IhungryExperiece />
      </Grid>
      <Grid item xs={12}>
        <HubaudienceExperiece />
      </Grid>
      <Grid item xs={12}>
        <DeliveryDiretoExperiece />
      </Grid>
      <Grid item xs={12}>
        <PetzillasExperiece />
      </Grid>
    </Grid>
  );
};

export default ExperienceSection;
