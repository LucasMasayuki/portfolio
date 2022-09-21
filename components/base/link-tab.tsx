import { Tab } from '@mui/material';

type Props = {
  label: string;
  href: string;
  scrollTo?: boolean;
};

const LinkTab: React.FC<Props> = ({ label, href, scrollTo }) => {
  return (
    <Tab
      component="a"
      onClick={(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        event.preventDefault();

        if (!scrollTo) {
          window.open(href, '_blank');
        }

        document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
      }}
      label={label}
      href={href}
    />
  );
};

LinkTab.defaultProps = {
  scrollTo: true,
};

export default LinkTab;
