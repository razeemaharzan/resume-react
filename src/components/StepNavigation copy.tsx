import React, { useState } from 'react';
import { ButtonGroup, Button, Col } from 'react-bootstrap';

interface StepNavigationProps {
  steps: string[];
}

const StepNavigation1: React.FC<StepNavigationProps> = ({ steps }) => {
  const [currentStep, setCurrentStep] = useState(0);

  const handleStepClick = (index: number) => {
    // if (index <= currentStep) {
      setCurrentStep(index);
    // }
  };

  return (
    <Col md={3}>
    <ButtonGroup className="my-3">
      {steps.map((step, index) => (
        <Button
          key={index}
          variant={index === currentStep ? 'primary' : 'outline-primary'}
          onClick={() => handleStepClick(index)}
        >
          {step}
        </Button>
      ))}
    </ButtonGroup>
    </Col>
  );
};

export default StepNavigation1;