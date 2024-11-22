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
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button'
import generatePDF from 'react-to-pdf';
import { useRef } from 'react';

import { RefContext } from "../../context/RefContext";
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

  const contentRef = useRef<HTMLDivElement | null>(null);

  return (
    <div>
      <Button variant="primary" className="mb-3" onClick={() => generatePDF(contentRef, { filename: 'page.pdf' })}>Download PDF</Button>

      <RefContext.Provider value={contentRef}>
        <Form>
          <Row className="justify-content-md-center">
            <Col>
              <StepNavigation steps={steps}></StepNavigation>
            </Col>
          </Row>

        </Form>
      </RefContext.Provider>

    </div>
  );

}

export default Home