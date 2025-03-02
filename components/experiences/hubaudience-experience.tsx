import {
  SiCss3,
  SiHtml5,
  SiJavascript,
  SiJquery,
  SiReact,
} from 'react-icons/si';
import ExperienceCard from '../experience-card';
import HubaudienceExperieceText from './hubaudience-experience-text';

const HubaudienceExperiece: React.FC = () => {
  return (
    <ExperienceCard
      title="HubAudience"
      description={<HubaudienceExperieceText />}
      imgLink="/hubaudience.png"
      imgAlt="hubaudience"
      link="https://www.linkedin.com/company/hubaudience/about/"
      whatIUse={
        <>
          <SiJavascript />
          <SiJquery />
          <SiReact />
          <SiHtml5 />
          <SiCss3 />
        </>
      }
    />
  );
};

export default HubaudienceExperiece;
