import {
  SiDocker,
  SiFlutter,
  SiJavascript,
  SiJquery,
  SiMysql,
  SiPhp,
  SiTypescript,
  SiVuedotjs,
} from 'react-icons/si';
import ExperienceCard from '../experience-card';
import DeliveryDiretoExperieceText from './delivery-direto-experience-text';

const DeliveryDiretoExperiece: React.FC = () => {
  return (
    <ExperienceCard
      title="Delivery Direto"
      description={<DeliveryDiretoExperieceText />}
      imgLink="/deliverydireto.png"
      imgAlt="delivery-direto"
      link="https://site.deliverydireto.com.br/"
      whatIUse={
        <>
          <SiJavascript />
          <SiPhp />
          <SiMysql />
          <SiJquery />
          <SiTypescript />
          <SiDocker />
          <SiVuedotjs />
          <SiFlutter />
        </>
      }
    />
  );
};

export default DeliveryDiretoExperiece;
