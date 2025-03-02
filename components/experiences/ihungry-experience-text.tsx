import { Typography } from '@mui/material';

const IhungryExperieceText: React.FC = () => {
  return (
    <>
      <Typography variant="h4" fontWeight="bold">
        Freelancer Full Stack Web Developer
      </Typography>
      <Typography variant="h6" fontWeight="lighter">
        IHungry
      </Typography>
      <Typography variant="h6" fontWeight="lighter">
        Dec/2024 - actual
      </Typography>
      <br />
      <Typography variant="h6" fontWeight="lighter">
        IHungry is a company that provides physical totems for restaurants, an
        ERP system, and a digital catalog to make restaurant operations easier.
      </Typography>
      <br />
      <Typography variant="h5" color="text.secondary">
        Resume:
      </Typography>
      <br />
      <Typography variant="body2" color="text.secondary">
        ● Development of the integration with iFood, including communication and
        the necessary backend to monitor and integrate with the current order
        and product system, as well as the frontend to receive order events and
        manage orders
      </Typography>
      <Typography variant="body2" color="text.secondary">
        ● Development of the integration with Cielo and wallet-based payments
        such as Google Pay and Apple Pay, covering both the communication and
        the necessary backend implementation to monitor and integrate the order
        system with the online payment provider. The solution is designed to be
        modular and extensible, allowing for the seamless addition of multiple
        payment providers or the replacement of an existing provider without
        deeply coupling it to the project
      </Typography>
      <Typography variant="body2" color="text.secondary">
        ● Providing advice and guidance on the development of new features, idea
        validation, and assisting programmers already working on the project by
        offering problem-solving support and technical insights
      </Typography>
    </>
  );
};

export default IhungryExperieceText;
