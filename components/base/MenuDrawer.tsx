import { CloseOutlined } from '@mui/icons-material';
import {
  AppBar,
  Container,
  Divider,
  Drawer,
  Grid,
  IconButton,
  Tabs,
  Toolbar,
  Typography,
} from '@mui/material';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectColorMode } from '../../src/presentation/stores/color-mode-slice';
import { ColorModes } from '../../src/utils/constants';
import LinkTab from './link-tab';
import PhotoAvatar from './photo-avatar';
import SocialMediaIcon from './social-media-icon';
import GithubIconSvg from './svgs/github-icon-svg';
import LinkedinIconSvg from './svgs/linkedin-icon-svg';

type Props = {
  handleClose: () => void;
  open: boolean;
};

const MenuDrawer: React.FC<Props> = ({ open, handleClose }) => {
  const { colorMode } = useSelector(selectColorMode);

  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Drawer
      open={open}
      variant="temporary"
      onClose={handleClose}
      transitionDuration={200}
      sx={{ width: '100vw', height: '100vh' }}
      PaperProps={{
        sx: { width: '100vw', height: '100vh' },
      }}
    >
      <AppBar
        position="fixed"
        sx={{
          boxShadow: '0 2px 9px rgb(0 0 0 / 5%)',
          alignContent: 'center',
        }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <IconButton>
              <CloseOutlined onClick={handleClose} />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>
      <Toolbar />
      <Grid container alignItems="center" mt={4}>
        <Grid item xs={12} justifyContent="center" display="inline-flex">
          <PhotoAvatar
            name="test"
            height={64}
            width={64}
            picture="lucas.jpeg"
          />
        </Grid>
        <Grid item xs={12} justifyContent="center" display="inline-flex">
          <Typography variant="subtitle1" fontWeight="bold">
            Lucas Masayuki Tamaribuchi
          </Typography>
        </Grid>
        <Grid item xs={12} justifyContent="center" display="inline-flex">
          <Typography variant="body2" fontWeight="bold">
            Full stack web developer
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          mt={4}
          justifyContent="center"
          display="inline-flex"
          mb={4}
        >
          <Tabs
            orientation="vertical"
            value={value}
            onChange={handleChange}
            aria-label="nav tabs example"
            sx={{
              color: colorMode === ColorModes.LIGHT ? '#121212' : 'unset',
            }}
          >
            <Divider />
            <LinkTab label="Home" href="#home-section" />
            <Divider />
            <LinkTab label="About" href="#about-section" />
            <Divider />
            <LinkTab label="Experience" href="#experience" />
            <Divider />
            <LinkTab label="Portfolio" href="#spam" />
            <Divider />
          </Tabs>
        </Grid>
        <Grid
          item
          xs={12}
          sx={{ display: 'inline-flex' }}
          justifyContent="center"
        >
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
        </Grid>
      </Grid>
    </Drawer>
  );
};

export default MenuDrawer;
