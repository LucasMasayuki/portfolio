import { Box, Grid, Typography } from '@mui/material';
import React from 'react';
import {
  SiJavascript,
  SiNextdotjs,
  SiReact,
  SiSolidity,
  SiSvelte,
  SiTypescript,
} from 'react-icons/si';
import SideProjectInfoCard from '../../base/side-project-info-card';

const SideProjectSection: React.FC = () => {
  return (
    <Grid
      container
      gap={4}
      sx={{ height: '100%' }}
      id="side-projects-section"
      position="relative"
    >
      <Grid item xs={12}>
        <Typography variant="h2" fontWeight="bold">
          Side projects
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <SideProjectInfoCard
          title="Kuma world"
          description="Kuma world was an nft project that aimed to make interactive
                collections directly on marketplaces like opensea. Two
                collections were created, Kuma world which guaranteed free mint
                of the second collection, which was the NFT puzzle, which was a
                mini puzzle playable on opensea."
          imgLink="/kumaworld.png"
          imgAlt="kuma world project"
          githubLink="https://github.com/LucasMasayuki/kuma-world"
          demoLink="https://kuma-world.vercel.app/"
          whatIUse={
            <>
              <SiJavascript />
              <Box mr={2} display="inline-block" />
              <SiNextdotjs />
              <Box mr={2} display="inline-block" />
              <SiReact />
              <Box mr={2} display="inline-block" />
              <SiSolidity />
            </>
          }
        />
      </Grid>
      <Grid item xs={12}>
        <SideProjectInfoCard
          title="Eth Lottery"
          description="The Idea of project is to mint lottery number nft in the mint page, each nft corresponds toa lottery number, the numbers will be drawn via contract, that will be registered on the blockchain"
          imgLink="/ethlottery.png"
          imgAlt="eth lottery project"
          githubLink="https://github.com/LucasMasayuki/ETH-Lottery-NFT"
          demoLink="https://ethlotery.github.io/mint/"
          whatIUse={
            <>
              <SiJavascript />
              <Box mr={2} display="inline-block" />
              <SiNextdotjs />
              <Box mr={2} display="inline-block" />
              <SiReact />
              <Box mr={2} display="inline-block" />
              <SiSolidity />
            </>
          }
        />
      </Grid>
      <Grid item xs={12}>
        <SideProjectInfoCard
          title="Burnout"
          description="Burnout is my personal blog, where I share my experiences and insights based on my career and studies in the field of software development and technology."
          imgLink="/burnout.png"
          imgAlt="burnout blog"
          demoLink="https://burnoutdev.com/"
          whatIUse={
            <>
              <SiJavascript />
              <Box mr={2} display="inline-block" />
              <SiSvelte />
              <Box mr={2} display="inline-block" />
              <SiTypescript />
            </>
          }
        />
      </Grid>
    </Grid>
  );
};

export default SideProjectSection;
