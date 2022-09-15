import { Box } from '@mui/material';

import Style from '../../styles/gradient-background.module.css';

type Props = {
  children: React.ReactElement;
};

const GradientBackground: React.FC<Props> = ({ children }) => {
  return (
    <div>
      <Box id="home" className={Style['gradient-background']}>
        {children}
      </Box>
    </div>
  );
};

export default GradientBackground;
