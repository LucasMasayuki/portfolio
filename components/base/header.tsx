import { Brightness4, Brightness7 } from '@mui/icons-material';
import {
  AppBar,
  Box,
  Container,
  IconButton,
  Tabs,
  Toolbar,
} from '@mui/material';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../../src/presentation/app/hooks';
import {
  selectColorMode,
  toogleColorMode,
} from '../../src/presentation/stores/color-mode-slice';
import { ColorModes } from '../../src/utils/constants';
import LinkTab from './link-tab';
import SocialMediaIcon from './social-media-icon';
import GithubIconSvg from './svgs/github-icon-svg';
import LinkedinIconSvg from './svgs/linkedin-icon-svg';

const Header: React.FC = () => {
  const dispatch = useAppDispatch();

  const { colorMode } = useSelector(selectColorMode);

  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        boxShadow: '0 2px 9px rgb(0 0 0 / 5%)',
        alignContent: 'center',
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="nav tabs example"
            sx={{ color: colorMode === ColorModes.LIGHT ? '#121212' : 'unset' }}
          >
            <LinkTab label="Home" href="#home-section" />
            <LinkTab label="About" href="#about-section" />
            <LinkTab label="Experience" href="#experience" />
            <LinkTab label="Portfolio" href="#spam" />
          </Tabs>
          <Box component="div" sx={{ flexGrow: 1 }} />
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
          <IconButton
            sx={{ ml: 1 }}
            onClick={() => dispatch(toogleColorMode(null))}
          >
            {colorMode === ColorModes.DARK ? <Brightness7 /> : <Brightness4 />}
          </IconButton>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
