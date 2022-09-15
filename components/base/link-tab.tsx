import { Tab } from '@mui/material';

type Props = {
  label: string;
  href: string;
};

const LinkTab: React.FC<Props> = ({ label, href }) => {
  return (
    <Tab
      component="a"
      onClick={(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        event.preventDefault();
      }}
      label={label}
      href={href}
    />
  );
};

export default LinkTab;
