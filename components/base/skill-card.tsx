import {
  Box,
  Card,
  CardContent,
  Grid,
  Typography,
  useTheme,
} from '@mui/material';

import React from 'react';

type Props = {
  title: string;
  description: string;
  icon: React.ReactElement;
};

const SkillCard: React.FC<Props> = ({ title, description, icon }) => {
  const theme = useTheme();

  return (
    <Card sx={{ height: '100%' }}>
      <CardContent sx={{ p: 2 }}>
        <Grid container alignItems="center">
          <Grid item xs={12} textAlign="center">
            <Box
              width={64}
              height={64}
              bgcolor={theme.palette.primary.main}
              borderRadius={100}
              sx={{
                display: 'inline-grid',
                alignItems: 'center',
                justifyItems: 'center',
              }}
            >
              {icon}
            </Box>
          </Grid>
          <Grid item xs={12} textAlign="center">
            <Typography variant={'h5'}>{title}</Typography>
          </Grid>
          <Grid item xs={12} textAlign="center">
            <Typography variant={'subtitle1'}>{description}</Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default SkillCard;
