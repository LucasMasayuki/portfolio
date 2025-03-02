import {
  Box,
  Button,
  Card,
  IconButton,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import React from 'react';
import { FaGithub } from 'react-icons/fa';

import Image from 'next/image';

type Props = {
  title: string;
  githubLink?: string;
  link: string;
  imgLink: string;
  imgAlt: string;
  description: React.ReactElement;
  whatIUse: React.ReactElement;
};

const ExperienceCard: React.FC<Props> = ({
  title,
  description,
  githubLink,
  link,
  imgLink,
  imgAlt,
  whatIUse,
}) => {
  const theme = useTheme();

  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box
      sx={{
        alignItems: 'center',
        display: 'grid',
        gridTemplateColumns: '1fr 170px 1fr',
      }}
    >
      <Card
        sx={{
          borderRadius: 4,
          display: 'flex',
          gridArea: { xs: 'unset', md: '1 / 1 / auto / 3' },
          gridColumn: { xs: '1 / 4', md: null },
          minHeight: { xs: 'unset', md: '600px' },
          padding: { xs: '30px', md: '50px' },
        }}
      >
        <Box
          sx={{
            p: 0,
            minHeight: '100%',
            width: { xs: '100%', md: '75%' },
            position: 'relative',
          }}
          gap={4}
          justifyContent={'space-between'}
          display="flex"
          flexDirection="column"
        >
          <Box
            sx={{ display: 'flex', flexDirection: 'column', p: 0 }}
            gap={4}
            flex={1}
          >
            <Typography variant="h3" fontWeight="bold">
              {title}
            </Typography>
            <Box sx={{ overflow: 'auto' }}>{description}</Box>
          </Box>
          <Box sx={{ p: 0 }}>
            <Button
              variant="contained"
              size="large"
              onClick={() => {
                window.open(link, '_blank');
              }}
            >
              Acessar
            </Button>
            {githubLink ? (
              <IconButton
                size="large"
                onClick={() => window.open(githubLink, '_blank')}
              >
                <FaGithub />
              </IconButton>
            ) : null}
          </Box>
        </Box>
      </Card>
      <Box
        sx={{
          gridArea: '1 / 2 / auto / 4',
          ...(isMobile ? { gridColumn: '1 / 4' } : null),
          position: 'relative',
          right: { xs: 0, md: '-20px' },
        }}
      >
        <Box
          sx={{
            overflow: 'hidden',
            position: 'relative',
            borderRadius: 2,
            height: { xs: 160, md: 480 },
          }}
        >
          <Image src={imgLink} alt={imgAlt} layout="fill" />
        </Box>
        <br />
        <Box
          sx={{
            display: 'flex',
            gap: 3,
            alignItems: 'center',
            justifyContent: 'end',
            pl: 2,
            pr: 2,
          }}
        >
          {whatIUse}
        </Box>
      </Box>
    </Box>
  );
};

export default ExperienceCard;
