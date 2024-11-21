import StepNavigation from "../../components/StepNavigation/StepNavigation";
import Profile from "../Profile/Profile";
import Education from "../Education/Education";
import Experience from "../Experience/Experience";
import Skill from "../Skill/Skill";
import Certificate from "../Certificate/Certificate";
import Hobbies from "../Hobbies/Hobbies";
import Interest from "../Interest/Interest";
import Preview from "../Preview/Preview";
import { Step } from "../../components/StepNavigation/Step";
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
  { title: 'Certificates', content: <Certificate /> },
  { title: 'Hobbies', content: <Hobbies /> },
  { title: 'Interest', content: <Interest /> },
  { title: 'Preview', content: <Preview></Preview> },
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