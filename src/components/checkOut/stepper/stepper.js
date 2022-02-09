import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import ConfirmationCard from '../confirmationCard/confirmationCard';
import PersonalInfo from '../personalInformation/personalInfo';
import ShippingAddressInfo from '../shippingAddressInfo/shippingAddressInfo';
import PlaceOrder from '../placeOrder/placeOrder';

const steps = ['Personal Info', 'Shipping Address', 'Place Order'];

export default function FormStepper() {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};

          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {activeStep === steps.length ? (
        <React.Fragment>
          <ConfirmationCard></ConfirmationCard>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Box sx={{ flex: '1 1 auto' }} />
          </Box>
        </React.Fragment>
      ) : (
        <React.Fragment>
          {
            //step1 display personalInfo Form
            (activeStep + 1 == 1) ? <PersonalInfo handleNext={handleNext}></PersonalInfo>
              //step2 display ShippingAddressInfo Form
              : (activeStep + 1 == 2) ? <ShippingAddressInfo handleNext={handleNext}></ShippingAddressInfo>
                //step3 display PlaceOrder Form
                : <PlaceOrder handleNext={handleNext}></PlaceOrder >
          }
        </React.Fragment>
      )}
    </Box>
  );
}
