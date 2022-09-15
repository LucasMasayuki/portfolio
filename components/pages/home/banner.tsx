import { Grid, Typography } from '@mui/material';
import React from 'react';
import PhotoAvatar from '../../base/photo-avatar';

import Style from '../../../styles/banner.module.css';

const Banner: React.FC = () => {
  return (
    <Grid container alignItems="center" sx={{ p: 8, height: 'inherit' }}>
      <Grid item xs={12} md={2}>
        <PhotoAvatar
          name="test"
          height={{
            xs: 64,
            md: 164,
          }}
          width={{
            xs: 64,
            md: 164,
          }}
          picture="lucas.jpeg"
        />
      </Grid>
      <Grid item xs={12} md={5}>
        <Typography
          className={`${Style['seamless-animated-text']}`}
          variant="h2"
          fontWeight="bold"
        >
          Hi,
        </Typography>
        <Typography
          className={Style['seamless-animated-text']}
          variant="h2"
          fontWeight="bold"
        >
          {"I'm Lucas"}
        </Typography>
        <Typography
          className={Style['seamless-animated-text']}
          variant="h2"
          fontWeight="bold"
        >
          Web developer
        </Typography>
      </Grid>
      <Grid
        item
        xs={12}
        md={5}
        sx={{ position: 'relative' }}
        justifySelf="center"
      >
        <div className={Style['laptop']}>
          <div className={Style['laptop-frame']}>
            <div className={Style['laptop-content']}>
              <iframe
                title="blog"
                src="https://devmon.vercel.app/"
                style={{ width: '100%', border: 'none', height: '100%' }}
              />
            </div>
          </div>
          <div className={Style['laptop-body']} />
        </div>
      </Grid>
    </Grid>
  );
};

export default Banner;
