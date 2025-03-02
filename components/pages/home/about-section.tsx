import {
  CodeOutlined,
  RocketLaunchOutlined,
  TipsAndUpdatesOutlined,
} from '@mui/icons-material';
import { Grid, Typography } from '@mui/material';
import React from 'react';
import PhotoAvatar from '../../base/photo-avatar';
import SkillCard from '../../base/skill-card';
import SkillSetCard from './skill-set-card';

const AboutSection: React.FC = () => {
  return (
    <Grid container sx={{ height: '100%' }} id="about-section">
      <Grid item xs={12}>
        <Typography variant="h2" fontWeight="bold">
          About me
        </Typography>
      </Grid>
      <Grid
        item
        xs={12}
        md={4}
        justifyContent="center"
        pb={{ xs: 0, md: 8 }}
        pt={8}
        sx={{ display: 'inline-grid' }}
      >
        <PhotoAvatar
          name="lucas"
          height={{
            xs: 128,
            md: 164,
          }}
          width={{
            xs: 128,
            md: 164,
          }}
          picture="lucas.jpeg"
        />
      </Grid>
      <Grid item xs={12} md={8} textAlign="center" pb={8} pt={8}>
        <Typography variant="subtitle1">
          I have been working as a full stack web/mobile developer for over 7
          years, currently impacting around 5 million users across 10000
          stores/restaurants with my work. I have been part of growing startups,
          where I worked on both smaller and larger projects, including those
          with a significant impact on the core operations, such as being
          responsible for the integration process with online payment methods
          and building and managing a suscription hub from scratch. Throughout
          my journey, I have used various languages and tools, with my core
          expertise being in TypeScript, PHP, and SQL, along with frameworks
          like Laravel, Vue, React, and Express. I also have some experience
          with Flutter.
        </Typography>
      </Grid>
      <Grid item xs={12} md={4}>
        <SkillCard
          title="Dynamic"
          description="I can handle the back end and front end efficiently, regardless of framework and language"
          icon={<RocketLaunchOutlined />}
        />
      </Grid>
      <Grid item xs={12} md={4}>
        <SkillCard
          title="Creative Solutions"
          description="I like to create creative solutions to problems and challenges"
          icon={<TipsAndUpdatesOutlined />}
        />
      </Grid>
      <Grid item xs={12} md={4}>
        <SkillCard
          title="Love programming"
          description="I love to see what I write turn into solutions to real problems. "
          icon={<CodeOutlined />}
        />
      </Grid>
      <Grid item xs={12} sx={{ mt: 8 }}>
        <Typography variant="h4" fontWeight="bold">
          Skills
        </Typography>
        <Typography variant="h6" fontWeight="lighter">
          skills I have ranked by experience level
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <SkillSetCard />
      </Grid>
    </Grid>
  );
};

export default AboutSection;
