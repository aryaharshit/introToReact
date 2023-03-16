import React, { useState }  from 'react';
import CommonButton from '../components/Navbar/common/commonButton';
import { buttonStyle } from '../components/Navbar/styles';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useNavigate } from 'react-router-dom'
import { emailRegex, passwordRegex } from '../components/regex';

const Validation = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  
  const navigate = useNavigate();
  const handleClick = () => navigate('/go-to');
  const activateButton = (emailRegex.test(email) && passwordRegex.test(password))  
  
    return (
      <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
        style={{ marginLeft: '220px' }}
      >
        <div>
          <TextField
            required
            id="emailID"
            label="Email ID"
            value={email}
            onChange={event => setEmail(event.target.value)}
          />

          <TextField
            required
            id="password"
            type="password"
            label="Password"
            value={password}
            onChange={event => setPassword(event.target.value)}
          />
          
          <div style={{ display: 'block', marginLeft: '10px' }}>
              <CommonButton
                variant="outlined"
                sx={buttonStyle.Customerbutton}
                disabled={!activateButton}
                onClick={handleClick}
              >
                Text
              </CommonButton>
          </div>
        </div>
      </Box>
    );
  };
  
  export default Validation;