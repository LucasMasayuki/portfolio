/* eslint-disable react/no-unescaped-entities */
import { Typography } from '@mui/material';

const PetzillasExperieceText: React.FC = () => {
  return (
    <>
      <Typography variant="h4" fontWeight="bold">
        Freelancer Full Stack Developer
      </Typography>
      <Typography variant="h6" fontWeight="lighter">
        Petzillas
      </Typography>
      <Typography variant="h6" fontWeight="lighter">
        Aog/2021 - Mar/2023
      </Typography>
      <br />
      <Typography variant="h6" fontWeight="lighter">
        Petzillas is a company that provides an Pet care app and a ERP system
        for pet shops, focusing on connecting different pet shops and pet
        products marketplaces.
      </Typography>
      <br />
      <Typography variant="h5" color="text.secondary">
        Resume:
      </Typography>
      <br />
      <Typography variant="body2" color="text.secondary">
        ● Construction of an ERP from scratch, to assist in the management of
        pet shops, integrated with an Android/iOS application, along the lines
        of a pet products marketplace.
      </Typography>
      <Typography variant="body2" color="text.secondary">
        ● Full stack development, using TypeScript as the primary language, with
        Node (Express) on the backend and React on the frontend. Built the
        application's graphical interface using React's Material-UI, following
        best UI and UX practices. Used TypeORM as ORM, working on top of a SQL
        Server database.
      </Typography>
      <Typography variant="body2" color="text.secondary">
        ● Planned and managed features, usability, and delivery based on client
        insights and requests, with constant delivery of results.
      </Typography>
      <Typography variant="body2" color="text.secondary">
        ● Structured the project from scratch, using best practices for project
        design, making it easy to handle and maintain, applying knowledge of
        clean architecture, TDD, and SOLID principles.
      </Typography>
    </>
  );
};

export default PetzillasExperieceText;
