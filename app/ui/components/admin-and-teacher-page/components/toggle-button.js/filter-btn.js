import * as React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

export default function ColorToggleButton() {
  const [alignment, setAlignment] = React.useState('web');

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  return (
    <ToggleButtonGroup
      color="primary"
      value={alignment}
      exclusive
      onChange={handleChange}
      aria-label="Platform"
    >
      <ToggleButton value="all">Усі</ToggleButton>
      <ToggleButton value="online">Онлайн</ToggleButton>
      <ToggleButton value="offline">Офлайн</ToggleButton>
      <ToggleButton value="corporate">Корпоративні</ToggleButton>
    </ToggleButtonGroup>
  );
}