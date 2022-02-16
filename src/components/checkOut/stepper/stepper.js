import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import ConfirmationCard from '../confirmationEmailCard/confirmationEmailCard';
import PersonalInfo from '../personalInformationForm/personalInfo';
import ShippingAddressInfo from '../shippingAddressInfoForm/shippingAddressInfo';
import PlaceOrder from '../placeOrder/placeOrder';
import { useStyles } from '../../cart/styles';


const steps = ['Personal Info', 'Shipping Address', 'Place Order'];

export default function FormStepper() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  return (
    <Box className={classes.topMargin} sx={{ width: '100%' }}>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => {
          const stepProps = {};
          const labelProps = {};

          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {/*end of step 3 display confirmation email card */}
      {activeStep === steps.length ? (
        <React.Fragment>
          <div className={classes.topMargin}>
            <ConfirmationCard></ConfirmationCard>
          </div>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Box sx={{ flex: '1 1 auto' }} />
          </Box>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <div className={activeStep + 1 !== 3 ? classes.formContainer : classes.placeOrder}>
            {
              //step1 display personalInfo Form
              (activeStep + 1 === 1) ? <PersonalInfo handleNext={handleNext}></PersonalInfo>
                //step2 display ShippingAddressInfo Form
                : (activeStep + 1 === 2) ? <ShippingAddressInfo handleNext={handleNext}></ShippingAddressInfo>
                  //step3 display PlaceOrder Form
                  : <PlaceOrder handleNext={handleNext}></PlaceOrder >
            }
          </div>
        </React.Fragment>
      )}
    </Box>
  );
}
