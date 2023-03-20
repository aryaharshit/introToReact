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
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  
  const navigate = useNavigate();
  const handleClick = () => navigate('/go-to');
  const activateButton = (emailRegex.test(email) && passwordRegex.test(password) && email !== '' && password !== '');  
  
  const handleEmailChange = (event) => {
    const emailInput = event.target.value;
    setEmail(emailInput);
    if (!emailRegex.test(emailInput) && emailInput !== '') {
      setEmailError(true);
    } else {
      setEmailError(false);
    }
  }

  const handlePasswordChange = (event) => {
    const passwordInput = event.target.value;
    setPassword(passwordInput);
    if (!passwordRegex.test(passwordInput) && passwordInput !== '') {
      setPasswordError(true);
    } else {
      setPasswordError(false);
    }
  }

  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      Validate
      autoComplete="off"
      style={{ marginLeft: '220px' }}
    >
      <div>
        <TextField
          required
          id="emailID"
          label="Email ID"
          value={email}
          onChange={handleEmailChange}
          error={emailError}
          helperText={emailError ? "Enter a Valid Email" : ""}
        />

        <TextField
          required
          id="password"
          type="password"
          label="Password"
          value={password}
          onChange={handlePasswordChange}
          error={passwordError}
          helperText={passwordError ? "Enter a Valid Password" : ""}
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


