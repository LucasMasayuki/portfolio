import { Box, Grid, Link, Typography } from '@mui/material';
import { FaChrome, FaFilePdf } from 'react-icons/fa';

import Style from '../../../styles/laptop-view.module.css';

const LaptopView: React.FC = () => {
  return (
    <Box
      sx={{ width: '100%', height: '100%' }}
      className={Style['laptop-view']}
    >
      <Grid container>
        <Grid item xs={3}>
          <Link download href="/Curriculum.pdf" target="_blank">
            <FaFilePdf />
            <Typography>resume.pdf</Typography>
          </Link>
        </Grid>
        <Grid item xs={3}>
          <Link download href="https://devmon.vercel.app/en-US" target="_blank">
            <FaChrome />
            <Typography>blog.html</Typography>
          </Link>
        </Grid>
      </Grid>
    </Box>
  );
};

export default LaptopView;
