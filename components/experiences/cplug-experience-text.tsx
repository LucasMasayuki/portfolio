import { Typography } from '@mui/material';

const CplugExperieceText: React.FC = () => {
  return (
    <>
      <Typography variant="h4" fontWeight="bold">
        Senior Software Engineer
      </Typography>
      <Typography variant="h6" fontWeight="lighter">
        Connect Plug
      </Typography>
      <Typography variant="h6" fontWeight="lighter">
        Dec/2023 - actual
      </Typography>
      <br />
      <Typography variant="h6" fontWeight="lighter">
        Connect Plug is a company that provides integrations and automation
        solutions for businesses, focusing on connecting different ERP systems,
        marketplaces, and payment platforms.
      </Typography>
      <br />
      <Typography variant="h5" color="text.secondary">
        Resume:
      </Typography>
      <br />
      <Typography variant="body2" color="text.secondary">
        ● Development and maintenance of a new system to manage the subscription
        of products and services contracted by clients.
      </Typography>
      <Typography variant="body2" color="text.secondary">
        ● Full stack development, with the main stack centered around PHP,
        TypeScript, SQL, HTML, and CSS, using Laravel and Vue as frameworks, and
        AWS as the infrastructure.
      </Typography>
      <Typography variant="body2" color="text.secondary">
        ● Responsible for planning the structure of the new project (database,
        code style, architecture), managing deliverables and milestones, and
        configuring and maintaining the deployment to production.
      </Typography>
      <Typography variant="body2" color="text.secondary">
        ● Development of the front end of the new ERP.
      </Typography>
    </>
  );
};

export default CplugExperieceText;
