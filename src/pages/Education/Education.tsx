
import { Form, Button, Row, Col } from "react-bootstrap";
import React, { useState } from 'react';
import ListManager from '../../components/ListManager';

interface EducationData {



}
interface EducationItem {
    id: string;
    degree: string;
    fieldOfStudy: string;
    institution: string;
    startDate: string;
    endDate: string;
}


const Education: React.FC<EducationData> = () => {


    const [listManager] = useState(
        new ListManager<EducationItem>([{ id: crypto.randomUUID(), degree: "", fieldOfStudy: '', institution: '', startDate: '', endDate: '' }])
    );
    const [educations, setEducations] = useState<EducationItem[]>(listManager.getItems());

    const addEducation = () => {

        listManager.addItem({ id: crypto.randomUUID(), degree: "", fieldOfStudy: '', institution: '', startDate: '', endDate: '' });
        setEducations(listManager.getItems());
    }

    const updateEducation = (index: number, key: string, data: string) => {

        listManager.updateItem(index, { [key]: data });
        setEducations(listManager.getItems());
    }
    const deleteEducation = (index: number) => {

        listManager.deleteItem(index);
        setEducations(listManager.getItems());
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
                                    onChange={(e) => updateEducation(index, "institution", e.target.value)}
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
                                    onChange={(e) => updateEducation(index, "degree", e.target.value)}
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
                                    onChange={(e) => updateEducation(index, "fieldOfStudy", e.target.value)}
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
                                    onChange={(e) => updateEducation(index, "startDate", e.target.value)}
                                />
                            </Form.Group>
                        </Col>
                        <Col md={4}>
                            <Form.Group controlId={`eduEndDate${index}`} className="mb-3">
                                <Form.Label>End Date</Form.Label>
                                <Form.Control
                                    type="date"
                                    value={education.endDate}
                                    onChange={(e) => updateEducation(index, "endDate", e.target.value)}
                                />
                            </Form.Group>
                        </Col>
                        <Col md={4}>
                            <Button variant="danger" key={`delete${index}`} onClick={() => deleteEducation(index)}>
                                Delete
                            </Button>
                        </Col>
                    </Row>
                    <hr />
                </div>
            ))}

            <Button variant="primary" onClick={addEducation}>
                + Add Education
            </Button>

        </div>

    );

}

export default Education