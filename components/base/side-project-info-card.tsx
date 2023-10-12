import {
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  IconButton,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import React from 'react';
import { FaGithub } from 'react-icons/fa';

import Image from 'next/image';

type Props = {
  title: string;
  description: string;
  githubLink?: string;
  demoLink: string;
  imgLink: string;
  imgAlt: string;
  whatIUse: React.ReactElement;
};

const SideProjectInfoCard: React.FC<Props> = ({
  title,
  description,
  githubLink,
  demoLink,
  imgLink,
  imgAlt,
  whatIUse,
}) => {
  const theme = useTheme();

  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box
      sx={{
        alignItems: 'center',
        display: 'grid',
        gridTemplateColumns: '1fr 170px 1fr',
      }}
    >
      <Card
        sx={{
          gridArea: { xs: 'unset', md: '1 / 1 / auto / 3' },
          gridColumn: { xs: '1 / 4', md: null },
          minHeight: { xs: 'unset', md: '400px' },
          padding: { xs: '30px', md: '50px' },
        }}
      >
        <CardContent sx={{ width: { xs: '100%', md: '75%' } }}>
          <Grid container sx={{ p: 0 }}>
            <Grid item xs={12} sx={{ p: 0 }}>
              <Typography variant="h5" fontWeight="bold">
                {title}
              </Typography>
            </Grid>
            <Grid
              item
              xs={12}
              sx={{
                p: 0,
                minHeight: { xs: 'unset', md: '250px' },
              }}
            >
              <Typography variant="subtitle1">{description}</Typography>
            </Grid>
            <Grid item xs={12} sx={{ p: 0 }}>
              <Button
                variant="contained"
                onClick={() => {
                  window.open(demoLink, '_blank');
                }}
              >
                Demo
              </Button>
              {githubLink ? (
                <IconButton onClick={() => window.open(githubLink, '_blank')}>
                  <FaGithub />
                </IconButton>
              ) : null}
            </Grid>
          </Grid>
        </CardContent>
      </Card>
      <Box
        sx={{
          gridArea: '1 / 2 / auto / 4',
          ...(isMobile ? { gridColumn: '1 / 4' } : null),
          position: 'relative',
          right: { xs: 0, md: '-20px' },
        }}
      >
        <Box
          sx={{
            overflow: 'hidden',
            position: 'relative',
            borderRadius: 2,
            height: { xs: 160, md: 320 },
          }}
        >
          <Image src={imgLink} alt={imgAlt} layout="fill" />
        </Box>
        <br />
        {whatIUse}
      </Box>
    </Box>
  );
};

export default SideProjectInfoCard;
