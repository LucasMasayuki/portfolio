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
          {"I've "}
          been working with web/mobile full stack development since 2017, where
          I currently impact about 5 millions users within 5000
          stores/restaurants with my work, mainly because I am primarily
          responsible for the current integration with online payment. I value
          the constant and gradual improvement, in order to be able to
          positively affect both the product team in which I am inserted, and
          for the customers who will use the application. In my spare time I
          have invested time in learning to build applications within web3
          environments, mainly on the ETH network
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
