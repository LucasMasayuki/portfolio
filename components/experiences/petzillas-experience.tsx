import { Grid, Typography } from '@mui/material';

const PetzillasExperiece: React.FC = () => {
  return (
    <>
      <Grid item xs={12} md={6} display={{ xs: 'block', md: 'none' }}>
        <Typography variant="h4" fontWeight="bold">
          Freelancer full stack web developer
        </Typography>
        <Typography variant="h6" fontWeight="lighter">
          Petzillas
        </Typography>
        <Typography variant="h6" fontWeight="lighter">
          ago/2021 - ago/2022
        </Typography>
        <br />
        <Typography variant="h6" fontWeight="lighter">
          Application to help take care of the pet and help pet professionals to
          manage their business through a web system
        </Typography>
        <Typography variant="h6" fontWeight="lighter">
          I was Construction of an ERP from scratch, to assist in the management
          of pet shops, integrated with an Android/Ios application, along the
          lines of a pet products marketplace
        </Typography>
        <Typography variant="h6" fontWeight="lighter">
          The Erp was built using{' '}
          <Typography component="span" variant="h6" fontWeight="bold">
            typescript
          </Typography>{' '}
          as the primary language, using{' '}
          <Typography component="span" variant="h6" fontWeight="bold">
            node (Express)
          </Typography>{' '}
          on the backend and{' '}
          <Typography component="span" variant="h6" fontWeight="bold">
            React.js
          </Typography>{' '}
          on the frontend, as main tools and frameworks. In addition, I built
          every part of the {"application's"} graphical interface using material
          ui library, with the best UI and UX practices. I used{' '}
          <Typography component="span" variant="h6" fontWeight="bold">
            Typeorm
          </Typography>{' '}
          as ORM, to work on top of a database in{' '}
          <Typography component="span" variant="h6" fontWeight="bold">
            SQL Server
          </Typography>{' '}
        </Typography>
      </Grid>
      <Grid item xs={12} display={{ xs: 'none', md: 'block' }}>
        <Typography variant="h4" fontWeight="bold">
          Freelancer full stack web developer
        </Typography>
        <Typography variant="h6" fontWeight="lighter">
          Petzillas
        </Typography>
        <Typography variant="h6" fontWeight="lighter">
          ago/2021 - ago/2022
        </Typography>
        <br />
        <Typography variant="h6" fontWeight="lighter">
          Application to help take care of the pet and help pet professionals to
          manage their business through a web system
        </Typography>
        <Typography variant="h6" fontWeight="lighter">
          I was Construction of an ERP from scratch, to assist in the management
          of pet shops, integrated with an Android/Ios application, along the
          lines of a pet products marketplace
        </Typography>
        <Typography variant="h6" fontWeight="lighter">
          The Erp was built using{' '}
          <Typography component="span" variant="h6" fontWeight="bold">
            typescript
          </Typography>{' '}
          as the primary language, using{' '}
          <Typography component="span" variant="h6" fontWeight="bold">
            node (Express)
          </Typography>{' '}
          on the backend and{' '}
          <Typography component="span" variant="h6" fontWeight="bold">
            React.js
          </Typography>{' '}
          on the frontend, as main tools and frameworks. In addition, I built
          every part of the {"application's"} graphical interface using material
          ui library, with the best UI and UX practices. I used{' '}
          <Typography component="span" variant="h6" fontWeight="bold">
            Typeorm
          </Typography>{' '}
          as ORM, to work on top of a database in{' '}
          <Typography component="span" variant="h6" fontWeight="bold">
            SQL Server
          </Typography>{' '}
        </Typography>
      </Grid>
    </>
  );
};

export default PetzillasExperiece;
