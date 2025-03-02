import {
  SiDocker,
  SiLaravel,
  SiPhp,
  SiPostgresql,
  SiTypescript,
  SiVuedotjs,
} from 'react-icons/si';
import ExperienceCard from '../experience-card';
import IhungryExperieceText from './ihungry-experience-text';

const IhungryExperiece: React.FC = () => {
  return (
    <ExperienceCard
      title="IHungry"
      description={<IhungryExperieceText />}
      imgLink="/ihungry.png"
      imgAlt="ihungry"
      link="https://ihungry.com.br/"
      whatIUse={
        <>
          <SiPhp />
          <SiPostgresql />
          <SiTypescript />
          <SiDocker />
          <SiVuedotjs />
          <SiLaravel />
        </>
      }
    />
  );
};

export default IhungryExperiece;
