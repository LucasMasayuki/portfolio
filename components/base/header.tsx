import { Brightness4, Brightness7, MenuOutlined } from '@mui/icons-material';
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
import MenuDrawer from './MenuDrawer';
import LinkTab from './link-tab';
import SocialMediaIcon from './social-media-icon';
import GithubIconSvg from './svgs/github-icon-svg';
import LinkedinIconSvg from './svgs/linkedin-icon-svg';

const Header: React.FC = () => {
  const dispatch = useAppDispatch();

  const { colorMode } = useSelector(selectColorMode);

  const [value, setValue] = useState(0);
  const [open, setOpen] = useState(false);

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
          <IconButton
            sx={{ display: { xs: 'block', md: 'none' } }}
            onClick={() => {
              setOpen(true);
            }}
          >
            <MenuOutlined />
          </IconButton>
          <MenuDrawer
            open={open}
            handleClose={() => {
              setOpen(false);
            }}
          />
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="nav tabs example"
            sx={{
              color: colorMode === ColorModes.LIGHT ? '#121212' : 'unset',
              display: { xs: 'none', md: 'block' },
            }}
          >
            <LinkTab label="Home" href="#home-section" />
            <LinkTab label="About" href="#about-section" />
            <LinkTab label="Experience" href="#experience-section" />
            <LinkTab label="Side projects" href="#side-projects-section" />
            <LinkTab label="Contact me" href="#contact-section" />
            <LinkTab
              scrollTo={false}
              label="Blog"
              href="https://burnoutdev.com/"
            />
          </Tabs>
          <Box component="div" sx={{ flexGrow: 1 }} />
          <Box
            sx={{
              display: { xs: 'none', md: 'block' },
            }}
          >
            <SocialMediaIcon
              socialMediaName="github"
              href="https://github.com/LucasMasayuki"
            >
              <GithubIconSvg />
            </SocialMediaIcon>
          </Box>
          <Box
            sx={{
              display: { xs: 'none', md: 'block' },
            }}
          >
            <SocialMediaIcon
              socialMediaName="linkedin"
              href="https://github.com/LucasMasayuki"
            >
              <LinkedinIconSvg />
            </SocialMediaIcon>
          </Box>

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
