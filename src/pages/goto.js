import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import FormLabel from '@mui/material/FormLabel';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router';
import { buttonStyle } from '../components/Navbar/styles';

export default function GOTO() {
  const [value, setValue] = React.useState('');
  const [error, setError] = React.useState(false);
  const [helperText, setHelperText] = React.useState('Choose wisely');
  const navigate = useNavigate();

  const handleRadioChange = (event) => {
    setValue(event.target.value);
    setHelperText(' ');
    setError(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (value === 'sellProduct') {
      navigate('/sell-products');
      setError(false);
    } else if (value === 'help') {
      navigate('/help');
      setError(true);
    } else {
      setHelperText('Please select an option.');
      setError(true);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{marginLeft: '220px'}}>
      <FormControl sx={{ m: 3 }} error={error} variant="standard">
        <FormLabel id="demo-error-radios">Select the Page where you wish to Jump</FormLabel>
        <RadioGroup
          aria-labelledby="demo-error-radios"
          name="quiz"
          value={value}
          onChange={handleRadioChange}
        >
          <FormControlLabel value="sellProduct" control={<Radio />} label="Sell Product" />
          <FormControlLabel value="help" control={<Radio />} label="Help" />
        </RadioGroup>
        <FormHelperText>{helperText}</FormHelperText>
        <Button sx={buttonStyle.Customerbutton} type="submit" variant="outlined">
          Jump
        </Button>
      </FormControl>
    </form>
  );
}