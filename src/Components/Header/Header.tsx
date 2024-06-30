import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Link } from 'react-router-dom';
import './Header.scss';

interface LinkTabProps {
  label: string;
  to: string;
  selected?: boolean;
}

function LinkTab(props: LinkTabProps) {
  return (
    <Tab
      component={Link}
      to={props.to}
      aria-current={props.selected ? 'page' : undefined}
      {...props}
    />
  );
}

export default function Header() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box className='header' sx={{ width: '100%' }}>
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="nav tabs example"
        role="navigation"
      >
        <LinkTab label="Toutes les équipes" to="/" selected={value === 0} />
        <LinkTab label="Tous les joueurs" to="/allPlayers" selected={value === 1} />
        <LinkTab label="Page Three" to="/spam" selected={value === 2} />
      </Tabs>
    </Box>
  );
}
