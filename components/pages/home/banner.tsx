import { Grid } from '@mui/material';
import React, { useState } from 'react';
import Typewriter from 'typewriter-effect';

import Style from '../../../styles/banner.module.css';
import LaptopView from './laptop-view';

const Banner: React.FC = () => {
  const [isFinishWriting, setIsFinishWriting] = useState(false);

  return (
    <Grid
      container
      alignItems="center"
      sx={{
        p: 8,
        height: 'inherit',
        '@media (max-width: 600px)': {
          p: 1,
        },
      }}
      id="home-section"
    >
      <Grid item xs={0} md={3} />
      <Grid
        item
        xs={12}
        md={6}
        sx={{ position: 'relative' }}
        justifySelf="center"
      >
        <div className={Style['laptop']}>
          <div className={Style['laptop-frame']}>
            <div className={Style['laptop-content']}>
              {!isFinishWriting ? (
                <Typewriter
                  onInit={(typewriter) => {
                    typewriter
                      .changeDelay(1)
                      .typeString('PORTFOLIO:~$')
                      .changeDelay(50)
                      .typeString('  Hi! <br/>')
                      .changeDelay(1)
                      .typeString('PORTFOLIO:~$')
                      .changeDelay(50)
                      .typeString("  I'm Lucas <br/>")
                      .changeDelay(1)
                      .typeString('PORTFOLIO:~$')
                      .changeDelay(50)
                      .typeString('  Full stack web developer <br/>')
                      .typeString('initializing')
                      .changeDelay(50)
                      .typeString('.')
                      .typeString('.')
                      .typeString('.')
                      .callFunction(() => {
                        setIsFinishWriting(true);
                      })
                      .start();
                  }}
                />
              ) : (
                <LaptopView />
              )}
            </div>
          </div>
          <div className={Style['laptop-body']} />
        </div>
      </Grid>
      <Grid item xs={0} md={3} />
    </Grid>
  );
};

export default Banner;
