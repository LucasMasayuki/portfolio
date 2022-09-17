import { Card, CardContent, Grid, Rating, Typography } from '@mui/material';
import React from 'react';
import {
  FaCss3,
  FaDocker,
  FaHtml5,
  FaJava,
  FaJs,
  FaNodeJs,
  FaPhp,
  FaPython,
  FaReact,
  FaVuejs,
  FaWordpress,
} from 'react-icons/fa';
import {
  SiCakephp,
  SiDart,
  SiFlutter,
  SiJquery,
  SiMysql,
  SiNextdotjs,
  SiNuxtdotjs,
  SiSass,
  SiSolidity,
  SiTypescript,
} from 'react-icons/si';

const SkillSetCard: React.FC = () => {
  return (
    <Card sx={{ height: '100%' }}>
      <CardContent sx={{ p: 2 }}>
        <Grid container alignItems="center" justifyItems="center">
          <Grid item xs={12} md={4}>
            <Grid
              container
              item
              xs={12}
              alignItems="center"
              textAlign="start"
              p={0}
            >
              <Grid item xs={2}>
                <FaPhp size={32} />
              </Grid>
              <Grid item xs={10}>
                <Typography variant="subtitle1">PHP</Typography>
                <Rating value={5} readOnly />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={4}>
            <Grid
              container
              item
              xs={12}
              alignItems="center"
              textAlign="start"
              p={0}
            >
              <Grid item xs={2}>
                <FaJs size={32} />
              </Grid>
              <Grid item xs={10}>
                <Typography variant="subtitle1">Javascript</Typography>
                <Rating value={5} readOnly />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={4}>
            <Grid
              container
              item
              xs={12}
              alignItems="center"
              textAlign="start"
              p={0}
            >
              <Grid item xs={2}>
                <SiTypescript size={32} />
              </Grid>
              <Grid item xs={10}>
                <Typography variant="subtitle1">Typescript</Typography>
                <Rating value={5} readOnly />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={4}>
            <Grid
              container
              item
              xs={12}
              alignItems="center"
              textAlign="start"
              p={0}
            >
              <Grid item xs={2}>
                <SiMysql size={32} />
              </Grid>
              <Grid item xs={10}>
                <Typography variant="subtitle1">SQL</Typography>
                <Rating value={5} readOnly />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={4}>
            <Grid
              container
              item
              xs={12}
              alignItems="center"
              textAlign="start"
              p={0}
            >
              <Grid item xs={2}>
                <FaHtml5 size={32} />
              </Grid>
              <Grid item xs={10}>
                <Typography variant="subtitle1">HTML</Typography>
                <Rating value={5} readOnly />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={4}>
            <Grid
              container
              item
              xs={12}
              alignItems="center"
              textAlign="start"
              p={0}
            >
              <Grid item xs={2}>
                <FaCss3 size={32} />
              </Grid>
              <Grid item xs={10}>
                <Typography variant="subtitle1">Css</Typography>
                <Rating value={5} readOnly />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={4}>
            <Grid
              container
              item
              xs={12}
              alignItems="center"
              textAlign="start"
              p={0}
            >
              <Grid item xs={2}>
                <FaReact size={32} />
              </Grid>
              <Grid item xs={10}>
                <Typography variant="subtitle1">React.js</Typography>
                <Rating value={5} readOnly />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={4}>
            <Grid
              container
              item
              xs={12}
              alignItems="center"
              textAlign="start"
              p={0}
            >
              <Grid item xs={2}>
                <FaNodeJs size={32} />
              </Grid>
              <Grid item xs={10}>
                <Typography variant="subtitle1">Node.js</Typography>
                <Rating value={5} readOnly />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={4}>
            <Grid
              container
              item
              xs={12}
              alignItems="center"
              textAlign="start"
              p={0}
            >
              <Grid item xs={2}>
                <SiNextdotjs size={32} />
              </Grid>
              <Grid item xs={10}>
                <Typography variant="subtitle1">Next.js</Typography>
                <Rating value={4.5} readOnly />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={4}>
            <Grid
              container
              item
              xs={12}
              alignItems="center"
              textAlign="start"
              p={0}
            >
              <Grid item xs={2}>
                <SiCakephp size={32} />
              </Grid>
              <Grid item xs={10}>
                <Typography variant="subtitle1">CakePHP</Typography>
                <Rating value={5} readOnly />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={4}>
            <Grid
              container
              item
              xs={12}
              alignItems="center"
              textAlign="start"
              p={0}
            >
              <Grid item xs={2}>
                <SiJquery size={32} />
              </Grid>
              <Grid item xs={10}>
                <Typography variant="subtitle1">JQuery</Typography>
                <Rating value={5} readOnly />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={4}>
            <Grid
              container
              item
              xs={12}
              alignItems="center"
              textAlign="start"
              p={0}
            >
              <Grid item xs={2}>
                <SiSass size={32} />
              </Grid>
              <Grid item xs={10}>
                <Typography variant="subtitle1">Sass</Typography>
                <Rating value={5} readOnly />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={4}>
            <Grid
              container
              item
              xs={12}
              alignItems="center"
              textAlign="start"
              p={0}
            >
              <Grid item xs={2}>
                <SiFlutter size={32} />
              </Grid>
              <Grid item xs={10}>
                <Typography variant="subtitle1">Flutter</Typography>
                <Rating value={4} readOnly />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={4}>
            <Grid
              container
              item
              xs={12}
              alignItems="center"
              textAlign="start"
              p={0}
            >
              <Grid item xs={2}>
                <SiDart size={32} />
              </Grid>
              <Grid item xs={10}>
                <Typography variant="subtitle1">Dart</Typography>
                <Rating value={4} readOnly />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={4}>
            <Grid
              container
              item
              xs={12}
              alignItems="center"
              textAlign="start"
              p={0}
            >
              <Grid item xs={2}>
                <SiNuxtdotjs size={32} />
              </Grid>
              <Grid item xs={10}>
                <Typography variant="subtitle1">Nuxt js</Typography>
                <Rating value={4} readOnly />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={4}>
            <Grid
              container
              item
              xs={12}
              alignItems="center"
              textAlign="start"
              p={0}
            >
              <Grid item xs={2}>
                <FaVuejs size={32} />
              </Grid>
              <Grid item xs={10}>
                <Typography variant="subtitle1">Vue.js</Typography>
                <Rating value={4} readOnly />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={4}>
            <Grid
              container
              item
              xs={12}
              alignItems="center"
              textAlign="start"
              p={0}
            >
              <Grid item xs={2}>
                <FaWordpress size={32} />
              </Grid>
              <Grid item xs={10}>
                <Typography variant="subtitle1">Wordpress</Typography>
                <Rating value={4} readOnly />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={4}>
            <Grid
              container
              item
              xs={12}
              alignItems="center"
              textAlign="start"
              p={0}
            >
              <Grid item xs={2}>
                <SiSolidity size={32} />
              </Grid>
              <Grid item xs={10}>
                <Typography variant="subtitle1">Solidity</Typography>
                <Rating value={4} readOnly />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={4}>
            <Grid
              container
              item
              xs={12}
              alignItems="center"
              textAlign="start"
              p={0}
            >
              <Grid item xs={2}>
                <FaJava size={32} />
              </Grid>
              <Grid item xs={10}>
                <Typography variant="subtitle1">Java</Typography>
                <Rating value={3} readOnly />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={4}>
            <Grid
              container
              item
              xs={12}
              alignItems="center"
              textAlign="start"
              p={0}
            >
              <Grid item xs={2}>
                <FaDocker size={32} />
              </Grid>
              <Grid item xs={10}>
                <Typography variant="subtitle1">Docker</Typography>
                <Rating value={3} readOnly />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={4}>
            <Grid
              container
              item
              xs={12}
              alignItems="center"
              textAlign="start"
              p={0}
            >
              <Grid item xs={2}>
                <FaPython size={32} />
              </Grid>
              <Grid item xs={10}>
                <Typography variant="subtitle1">Python</Typography>
                <Rating value={3} readOnly />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default SkillSetCard;
