import React, { useState } from 'react';
import { TextField, Button, FormControlLabel, Checkbox, FormGroup, Typography } from '@mui/material';
export const Home = () => {
    const [projectName, setName] = useState('');
    const [projectTitle, setprojectTitle] = useState('');
    const [url, seturl] = useState('');
    const [description, setDescription] = useState('');

    const [termsAccepted, setTermsAccepted] = useState(false);
    
    // State for form validation
    const [errors, setErrors] = useState({
projectName: '',
      projectTitle: '',
      url: '',
      terms: '',
      description
    });
  
    // Handle form submission
    const handleSubmit = (e) => {
      e.preventDefault();
  
      // Simple validation
      let formErrors = {};
      if (!projectName) formErrors.projectName = 'Name is required';
      if (!projectTitle) formErrors.projectTitle = 'projectTitle is required';
      if (!url) formErrors.url = 'url is required';
      if (!description) formErrors.description = 'description is required';

      if (!termsAccepted) formErrors.terms = 'You must accept the terms and conditions';
  
      // Set validation errors
      setErrors(formErrors);
  
      // If no errors, form can be submitted
      if (Object.keys(formErrors).length === 0) {
        alert('Form submitted successfully!');
        // Here you can handle actual form submission logic (API calls, etc.)
      }
    };
  return(
    <div className="form-container" style={{ maxWidth: '1200px', margin: 'auto' }}>
      <Typography variant="h5" gutterBottom>
        Project Information
      </Typography>
      <form onSubmit={handleSubmit}>
        {/* project Name Field */}
        <div style={{display:'flex', justifyContent:'between', gap:'10px'}}>
        <TextField
          label="Project Name"
          variant="outlined"
          fullWidth
          margin="normal"
          value={projectName}
          onChange={(e) => setName(e.target.value)}
          error={!!errors.projectName}
          helperText={errors.projectName}
        />

        {/* projectTitle Field */}
        <TextField
          label="Project Title"
          variant="outlined"
          fullWidth
          margin="normal"
          type="text"
          value={projectTitle}
          onChange={(e) => setprojectTitle(e.target.value)}
          error={!!errors.projectTitle}
          helperText={errors.projectTitle}
        />
        </div>
        

        {/* url Field */}
        <TextField
          label="Url"
          variant="outlined"
          fullWidth
          margin="normal"
          type="url"
          value={url}
          onChange={(e) => seturl(e.target.value)}
          error={!!errors.url}
          helperText={errors.url}
        />
         {/* description */}
         <TextField
          label="Description"
          variant="outlined"
          fullWidth
          margin="normal"
          type="text"
          multiline
          rows={4}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          error={!!errors.description}
          helperText={errors.description}
        />

        {/* Terms and Conditions Checkbox */}
        {/* <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                checked={termsAccepted}
                onChange={(e) => setTermsAccepted(e.target.checked)}
                color="primary"
              />
            }
            label="I accept the terms and conditions"
          />
          {errors.terms && <Typography color="error">{errors.terms}</Typography>}
        </FormGroup> */}

        {/* Submit Button */}
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          size="large"
          style={{ marginTop: '20px' }}
        >
          Submit
        </Button>
      </form>
    </div>
  )
    
};


