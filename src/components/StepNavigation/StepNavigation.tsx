import React, { useState } from 'react';
import { ProgressBar, ButtonGroup, Button, Row } from 'react-bootstrap';
import { Step } from './Step'
import Card from 'react-bootstrap/Card';

const StepNavigation: React.FC<{ steps: Step[] }> = ({ steps }) => {
    // Navigation current step
    const [currentStep, setCurrentStep] = useState<number>(0);

    // Handlers for navigation
    const handleNext = () => {
        if (currentStep < steps.length - 1) {
            setCurrentStep((prev) => prev + 1);
        }
    };
    const handlePrevious = () => setCurrentStep((prev) => prev - 1);


    const handleButton = (index: number) => {
        setCurrentStep(index); // Update the state to the clicked button's index
    };

    const handleSubmit = (event: React.FormEvent) => event.preventDefault();

    return (
        <div>
            
            {/* ButtonGroup step wise step UI */}
            <Row className="justify-content-center">
                <ButtonGroup className="d-flex flex-column flex-md-row"
                    role="group">
                    {steps.map((step, index) => (
                        <Button
                            key={index}
                            variant={index === currentStep ? 'primary' : 'outline-primary'}
                            onClick={() => handleButton(index)}
                            style={{ flex: 1 }}
                            className="mb-2 mb-md-0" // Make each button take up equal space
                        >
                            {step.title}
                        </Button>
                    ))}
                </ButtonGroup>
            </Row>

            {/* Progressbar with percentage */}
            <ProgressBar
                className="w-100 mt-3"
                now={((currentStep + 1) / steps.length) * 100}
                label={`Step ${currentStep + 1} / ${steps.length}`}
                style={{ height: '30px' }}

            />

            {/* Form with step content */}
            <Card className="mt-3">
                <Card.Body>
                    {steps[currentStep]['content']}
                </Card.Body>
            </Card>

            {/* Navigation buttons */}
            <div className="d-flex justify-content-between mt-3">
                <Button
                    variant="primary"
                    onClick={handlePrevious}
                    disabled={currentStep === 0}
                >
                    Previous
                </Button>

                
                 <Button variant="primary" onClick={currentStep < steps.length - 1 ? handleNext : handleSubmit}>
                    {currentStep < steps.length - 1 ? (<span> Next</span>) : (<span> Submit</span>)}
                </Button>
            </div>

        </div>
    );
};

export default StepNavigation;