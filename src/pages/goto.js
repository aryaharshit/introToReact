import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom'
import { buttonStyle } from '../components/Navbar/styles'; 

const GOTO= () => {
  const [value, setValue] = React.useState('');


  const handleRadioChange = (event) => {
    setValue(event.target.value);
  };

  const navigate = useNavigate();
  const handleSubmit = () => {

    if (value === 'sellProducts') {
      navigate('/sell-products')
    } else if (value === 'help') {
      navigate('/help');
    }
};

    return (
    <>
    <div style={{marginLeft: '220px'}}>
            <h3>This page allows you to jump to other pages</h3>
            <form onSubmit={handleSubmit}>
      <FormControl sx={{ m: 3 }} variant="standard">
        <RadioGroup
          aria-labelledby="demo-error-radios"
          name="quiz"
          value={value}
          onChange={handleRadioChange}
        >
          <FormControlLabel value="sellProducts" control={<Radio />} label="Sell Products" />
          <FormControlLabel value="help" control={<Radio />} label="Help" />
        </RadioGroup>
        
        <Button sx={buttonStyle.Customerbutton} type="submit" variant="outlined">
          JUMP
        </Button>
      </FormControl>
    </form>
    </div>
      </>
    )
}


export default GOTO;