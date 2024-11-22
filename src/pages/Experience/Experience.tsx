import { Form, Button, Row, Col } from "react-bootstrap";
import React from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { addExperience, updateExperience, deleteExperience } from './ExperienceSlice'

interface ExperienceData {

}

enum WorkModel {
    'Full-Time', 'Part-Time', 'Casual', 'Contract', 'Intern', 'Volunteer'
}

const Experience: React.FC<ExperienceData> = () => {
    const experiences = useAppSelector((state) => state.experience)
    const dispatch = useAppDispatch();


    const addItem = () => {
        let item = {
            id: crypto.randomUUID(), companyName: '', location: '', position: '', workModel: '', majorDuties: '', achievements: '',
            startDate: '', endDate: '', notes: '', heading: ''
        };
        dispatch(addExperience(item));

    }

    const deleteItem = (id: string) => {
        dispatch(deleteExperience(id));
    };

    const handleChange = (id: string, e: any) => {
        // Retrive name and value attribute from element
        const { name, value } = e.target;

        dispatch(updateExperience({
            id,
            updatedData: { [name]: value },
        }));

    };

    return (
        <div>
            {experiences.map((experience, index) => (
                <div key={index}>
                    <Row>
                        <Col md={10}>
                            <h4>Experience - {index + 1}</h4>
                        </Col>
                        <Col md={2} className="d-flex justify-content-end align-items-center">
                            <Button variant="danger" key={`delete${index}`} onClick={() => deleteItem(experience.id)}>
                                Delete
                            </Button>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={4}>
                            <Form.Group controlId={`expCmpanyName${index}`} className="mb-3">
                                <Form.Label>Company Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="companyName"
                                    value={experience.companyName}
                                    onChange={(e) => handleChange(experience.id, e)}
                                    placeholder="Enter company name"
                                />
                            </Form.Group>
                        </Col>

                        <Col md={4}>
                            <Form.Group controlId={`expLocation${index}`} className="mb-3">
                                <Form.Label>Location</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="location"
                                    value={experience.location}
                                    onChange={(e) => handleChange(experience.id, e)}
                                    placeholder="Enter Location"
                                />
                            </Form.Group>
                        </Col>
                        <Col md={4}>
                            <Form.Group controlId={`expPosition${index}`} className="mb-3">
                                <Form.Label>Position</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="position"
                                    value={experience.position}
                                    onChange={(e) => handleChange(experience.id, e)}
                                    placeholder="Enter Position"
                                />
                            </Form.Group>
                        </Col>


                    </Row>
                    <Row>
                        <Col md={4}>
                            <Form.Group controlId={`expWorkType${index}`} className="mb-3">
                                <Form.Label>Work Type</Form.Label>
                                <Form.Select aria-label="Work Type"
                                    value={experience.workModel}
                                    name="workModel"
                                    onChange={(e) => handleChange(experience.id, e)}
                                >
                                    <option>Select work type</option>
                                    {Object.values(WorkModel)
                                        .filter((value) => typeof value === "string")
                                        .map((workModel, index) => (
                                            <option key={index} value={workModel}>
                                                {workModel}
                                            </option>
                                        ))}

                                </Form.Select>
                            </Form.Group>
                        </Col>
                        <Col md={4}>
                            <Form.Group controlId={`expStartDate${index}`}>
                                <Form.Label>From Date</Form.Label>
                                <Form.Control
                                    type="date"
                                    value={experience.startDate}
                                    name="startDate"
                                    onChange={(e) => handleChange(experience.id, e)}
                                />
                            </Form.Group>
                        </Col>
                        <Col md={4}>
                            <Form.Group controlId={`expEndDate${index}`}>
                                <Form.Label>To Date</Form.Label>
                                <Form.Control
                                    type="date"
                                    value={experience.endDate}
                                    name="endDate"
                                    onChange={(e) => handleChange(experience.id, e)}
                                />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={12}>
                            <Form.Group className="mb-3" controlId={`expMajorDuties${index}`}>
                                <Form.Label>Heading</Form.Label>
                                <Form.Control
                                    as="textarea" rows={2}
                                    placeholder="Write about what you did in a sentence. e.g. Project Inovlved (It appears at the top )"
                                    value={experience.heading}
                                    name="heading"
                                    onChange={(e) => handleChange(experience.id, e)}
                                />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={6}>
                            <Form.Group className="mb-3" controlId={`expMajorDuties${index}`}>
                                <Form.Label>Major Duties</Form.Label>
                                <Form.Control
                                    as="textarea" rows={10}
                                    placeholder="Write major duties"
                                    value={experience.majorDuties}
                                    name="majorDuties"
                                    onChange={(e) => handleChange(experience.id, e)}
                                />
                            </Form.Group>
                        </Col>
                        <Col md={6}>
                            <Form.Group className="mb-3" controlId={`expAchievements${index}`}>
                                <Form.Label>Achievements</Form.Label>
                                <Form.Control
                                    as="textarea"
                                    rows={10}
                                    placeholder="Write achievements"
                                    value={experience.achievements}
                                    name="achievements"
                                    onChange={(e) => handleChange(experience.id, e)}
                                />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={12}>
                            <Form.Group className="mb-3" controlId={`expNotes${index}`}>
                                <Form.Label>Notes</Form.Label>
                                <Form.Control
                                    as="textarea"
                                    rows={3}
                                    placeholder="Write notes (It appears at the bottom)"
                                    value={experience.notes}
                                    name="notes"
                                    onChange={(e) => handleChange(experience.id, e)}

                                />
                            </Form.Group>
                        </Col>
                    </Row>
                    <hr />
                </div>

            ))}
            <Button variant="primary" onClick={addItem}>
                + Add Experience
            </Button>
        </div>
    )

}

export default Experience;