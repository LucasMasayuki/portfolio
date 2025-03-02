import {
  SiDocker,
  SiLaravel,
  SiNuxtdotjs,
  SiPhp,
  SiPostgresql,
  SiTypescript,
  SiVuedotjs,
} from 'react-icons/si';
import ExperienceCard from '../experience-card';
import CplugExperieceText from './cplug-experience-text';

const CplugExperiece: React.FC = () => {
  return (
    <ExperienceCard
      title="ConnectPlug"
      description={<CplugExperieceText />}
      imgLink="/connectplug.png"
      imgAlt="connectplug"
      link="https://connectplug.com.br/"
      whatIUse={
        <>
          <SiTypescript />
          <SiPhp />
          <SiVuedotjs />
          <SiLaravel />
          <SiDocker />
          <SiNuxtdotjs />
          <SiPostgresql />
        </>
      }
    />
  );
};

export default CplugExperiece;
