// src/components/InputField.js

import React from 'react';
import TextField from '@mui/material/TextField';

// InputField component using MUI TextField
const InputField = ({ label, type, value, onChange, placeholder, error, helperText }) => {
  return (
    <div className="mb-4">
      <TextField
        label={label} // The label of the input field
        type={type}   // The type of the input (text, password, etc.)
        value={value} // Controlled value from parent state
        onChange={onChange} // Callback to update state on change
        placeholder={placeholder} // Placeholder text
        fullWidth // Makes the input span the full width of its container
        variant="outlined" // The variant of the TextField (outlined, filled, etc.)
        error={error} // If there's an error, it will highlight the field
        helperText={helperText} // Displays helper text below the input field
      />
    </div>
  );
};

export default InputField;
