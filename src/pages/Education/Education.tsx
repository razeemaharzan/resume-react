
import { Form, Button, Row, Col } from "react-bootstrap";
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { updateEducation, deleteEducation, addNewEducation } from './EducationSlice'


const Education: React.FC = () => {

    const educations = useAppSelector((state) => state.education)
    const dispatch = useAppDispatch();


    const addItem = () => {
        let item = {
            id:crypto.randomUUID(),
            degree: '',
            fieldOfStudy: '',
            institution: '',
            startDate: '',
            endDate: ''
        };
        dispatch(addNewEducation(item));
        
    }

    const deleteItem = (id: string) => {
        dispatch(deleteEducation(id));
    };

    const handleChange = (id: string, e: any) => {
        // Retrive name and value attribute from element
        const { name, value } = e.target;

        dispatch(updateEducation({
            id,
            updatedData: { [name]: value },
        }));
       
    };

    return (
        <div>

            {educations.map((education, index) => (
                <div key={index}>
                    <h4>Education - {index + 1}</h4>
                    <Row>
                        <Col md={4}>
                            <Form.Group controlId={`eduInstitution${index}`} className="mb-3">
                                <Form.Label>Institution Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    value={education.institution}
                                    name="institution"
                                    onChange={(e) => handleChange(education.id, e)}
                                    placeholder="Enter your name"
                                />
                            </Form.Group>
                        </Col>

                        <Col md={4}>
                            <Form.Group controlId={`eduDegree${index}`} className="mb-3">
                                <Form.Label>Degree Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    value={education.degree}
                                    name="degree"
                                    onChange={(e) => handleChange(education.id, e)}
                                    placeholder="Enter your name"
                                />
                            </Form.Group>
                        </Col>

                        <Col md={4}>
                            <Form.Group controlId={`eduFieldOfStudy${index}`} className="mb-3">
                                <Form.Label>Field of Study</Form.Label>
                                <Form.Control
                                    type="text"
                                    value={education.fieldOfStudy}
                                    name="fieldOfStudy"
                                    onChange={(e) => handleChange(education.id, e)}
                                    placeholder="Enter your name"
                                />
                            </Form.Group>
                        </Col>
                    </Row>

                    <Row>
                        <Col md={4}>
                            <Form.Group controlId={`eduStartDate${index}`} className="mb-3">
                                <Form.Label>Start Date</Form.Label>
                                <Form.Control
                                    type="date"
                                    value={education.startDate}
                                    name="startDate"
                                   
                                    onChange={(e) => handleChange(education.id, e)}
                                />
                            </Form.Group>
                        </Col>
                        <Col md={4}>
                            <Form.Group controlId={`eduEndDate${index}`} className="mb-3">
                                <Form.Label>End Date</Form.Label>
                                <Form.Control
                                    type="date"
                                    value={education.endDate}
                                    name="endDate"
                                    onChange={(e) => handleChange(education.id, e)}
                                />
                            </Form.Group>
                        </Col>
                        <Col md={4}>
                            <Button variant="danger" key={`delete${index}`} onClick={() => deleteItem(education.id)}>
                                Delete
                            </Button>
                        </Col>
                    </Row>
                    <hr />
                </div>
            ))}

            <Button variant="primary" onClick={addItem}>
                + Add Education
            </Button>

        </div>

    );

}

export default Education