// src/components/Button.js

import React from 'react';
import Button from '@mui/material/Button';

const CustomButton = ({ text, onClick, color = "primary", variant = "contained", size = "medium", disabled = false }) => {
  return (
    <Button
      onClick={onClick}
      color={color}         // MUI Button color (primary, secondary, etc.)
      variant={variant}     // MUI Button variant (contained, outlined, etc.)
      size={size}           // Button size (small, medium, large)
      disabled={disabled}   // Whether the button is disabled or not
      fullWidth              // Makes the button take up the full width of its parent
    >
      {text}
    </Button>
  );
};

export default CustomButton;
