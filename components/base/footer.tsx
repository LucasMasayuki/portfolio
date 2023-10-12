import { Paper, Toolbar } from '@mui/material';
import React from 'react';
import styles from '../../styles/footer.module.css';
import SocialMediaIcon from './social-media-icon';
import GithubIconSvg from './svgs/github-icon-svg';
import LinkedinIconSvg from './svgs/linkedin-icon-svg';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <Paper sx={{ padding: 1 }}>
        <Toolbar disableGutters>
          <SocialMediaIcon
            socialMediaName="github"
            href="https://github.com/LucasMasayuki"
          >
            <GithubIconSvg />
          </SocialMediaIcon>
          <SocialMediaIcon
            socialMediaName="linkedin"
            href="https://github.com/LucasMasayuki"
          >
            <LinkedinIconSvg />
          </SocialMediaIcon>
        </Toolbar>
      </Paper>
    </footer>
  );
};

export default Footer;
