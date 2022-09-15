import Style from '../../styles/social-media-icon.module.css';

type Props = {
  children: React.ReactElement;
  socialMediaName: string;
  href: string;
};

const SocialMediaIcon: React.FC<Props> = ({
  children,
  socialMediaName,
  href,
}) => {
  return (
    <div className={Style.wrapper__links}>
      <a
        href={href}
        target="_blank"
        className={Style[`social-link--${socialMediaName}`]}
        id={socialMediaName}
        rel="noreferrer"
      >
        {children}
      </a>
    </div>
  );
};

export default SocialMediaIcon;
