import StepNavigation from "../../components/StepNavigation/StepNavigation";
import Profile from "../Profile/Profile";
import Education from "../Education/Education";
import Experience from "../Experience/experience";
import Skill from "../Skill/Skill";
import Certification from "../Certification/certification";
import Hobbies from "../Hobbies/hobbies"
import Interest from "../Interest/Interest"
import { Step } from "../../components/StepNavigation/Step"
import React from 'react';
import Form from 'react-bootstrap/Form';
import { FormProvider } from "../../context/FormContext";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const steps: Step[] = [
  { title: 'Profile', content: <Profile /> },
  { title: 'Education', content: <Education /> },
  { title: 'Experience', content: <Experience /> },
  { title: 'Skills', content: <Skill /> },
  { title: 'Certification', content: <Certification /> },
  { title: 'Hobbies', content: <Hobbies /> },
  { title: 'Interest', content: <Interest /> },
  { title: 'Preview', content: <div>Preview Content</div> },
];

const Home: React.FC<any> = () => {
  return (
    <div>

      <FormProvider>
        <Form>
          <Row className="justify-content-md-center">
            <Col>
              <StepNavigation steps={steps}></StepNavigation>
            </Col>
          </Row>

        </Form>
      </FormProvider>

    </div >

  );

}

export default Home