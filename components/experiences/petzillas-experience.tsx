import {
  SiJavascript,
  SiPostgresql,
  SiReact,
  SiTypescript,
} from 'react-icons/si';
import ExperienceCard from '../experience-card';
import PetzillasExperieceText from './petzillas-experience-text';

const PetzillasExperiece: React.FC = () => {
  return (
    <ExperienceCard
      title="Petzillas"
      description={<PetzillasExperieceText />}
      imgLink="/petzillas.png"
      imgAlt="petzillas"
      link="https://petzillas.com.br/"
      whatIUse={
        <>
          <SiJavascript />
          <SiTypescript />
          <SiReact />
          <SiPostgresql />
        </>
      }
    />
  );
};

export default PetzillasExperiece;
