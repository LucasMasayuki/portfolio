import { Box, Grid, Typography } from '@mui/material';
import React from 'react';
import {
  SiDocker,
  SiFlutter,
  SiJavascript,
  SiJquery,
  SiMysql,
  SiPhp,
  SiPostgresql,
  SiReact,
  SiTypescript,
  SiVuedotjs,
} from 'react-icons/si';
import ExperienceCard from '../../experience-card';
import DeliveryDiretoExperiece from '../../experiences/delivery-direto-experience';
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
        <ExperienceCard
          title="Delivery Direto"
          description={<DeliveryDiretoExperiece />}
          imgLink="/deliverydireto.png"
          imgAlt="delivery-direto"
          link="https://site.deliverydireto.com.br/"
          whatIUse={
            <>
              <SiJavascript />
              <Box mr={2} display="inline-block" />
              <SiPhp />
              <Box mr={2} display="inline-block" />
              <SiMysql />
              <Box mr={2} display="inline-block" />
              <SiJquery />
              <Box mr={2} display="inline-block" />
              <SiTypescript />
              <Box mr={2} display="inline-block" />
              <SiDocker />
              <Box mr={2} display="inline-block" />
              <SiVuedotjs />
              <Box mr={2} display="inline-block" />
              <SiFlutter />
            </>
          }
        />
      </Grid>
      <Grid item xs={12}>
        <ExperienceCard
          title="Petzillas"
          description={<PetzillasExperiece />}
          imgLink="/petzillas.png"
          imgAlt="petzillas"
          link="https://petzillas.com.br/"
          whatIUse={
            <>
              <SiJavascript />
              <Box mr={2} display="inline-block" />
              <SiTypescript />
              <Box mr={2} display="inline-block" />
              <SiReact />
              <Box mr={2} display="inline-block" />
              <SiPostgresql />
            </>
          }
        />
      </Grid>
    </Grid>
  );
};

export default ExperienceSection;
