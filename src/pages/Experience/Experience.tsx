import ListManager from '../../components/ListManager'
import { Form, Button, Row, Col } from "react-bootstrap";
import React, { useState } from 'react';
interface ExperienceData {

}
interface ExperienceItem {
    id: string,
    companyName: string,
    location: string,
    position: string,
    workModel: string,
    majorDuties: string,
    achievements: string,
    startDate: string,
    endDate: string,
    notes: string
}

enum WorkModel {
    'Full-Time', 'Part-Time', 'Casual', 'Contract', 'Intern', 'Volunteer'
}

const Experience: React.FC<ExperienceData> = () => {
    const initialExperience = {
        id: crypto.randomUUID(), companyName: "", location: "", position: '', workModel: '', majorDuties: '', achievements: '',
        startDate: '', endDate: '', notes: ''
    };
    const [listManager] = useState(
        new ListManager<ExperienceItem>([initialExperience])
    );
    const [experiences, setExperiences] = useState<ExperienceItem[]>(listManager.getItems());

    const addExperience = () => {

        listManager.addItem(initialExperience);
        setExperiences(listManager.getItems());
    }

    const updateExperience = (index: number, key: string, data: string) => {

        listManager.updateItem(index, { [key]: data });
        setExperiences(listManager.getItems());
        console.log(listManager.getItems())
    }

    const deleteExperience = (index: number) => {

        listManager.deleteItem(index);
        setExperiences(listManager.getItems());
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
                            <Button variant="danger" key={`delete${index}`} onClick={() => deleteExperience(index)}>
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
                                    value={experience.companyName}
                                    onChange={(e) => updateExperience(index, "companyName", e.target.value)}
                                    placeholder="Enter company name"
                                />
                            </Form.Group>
                        </Col>

                        <Col md={4}>
                            <Form.Group controlId={`expLocation${index}`} className="mb-3">
                                <Form.Label>Location</Form.Label>
                                <Form.Control
                                    type="text"
                                    value={experience.location}
                                    onChange={(e) => updateExperience(index, "location", e.target.value)}
                                    placeholder="Enter Location"
                                />
                            </Form.Group>
                        </Col>
                        <Col md={4}>
                            <Form.Group controlId={`expPosition${index}`}className="mb-3">
                                <Form.Label>Position</Form.Label>
                                <Form.Control
                                    type="text"
                                    value={experience.position}
                                    onChange={(e) => updateExperience(index, "position", e.target.value)}
                                    placeholder="Enter Position"
                                />
                            </Form.Group>
                        </Col>


                    </Row>
                    <Row>
                        <Col md={4}>
                            <Form.Group controlId={`expWorkType${index}`} className="mb-3">
                                <Form.Label>Work Type</Form.Label>
                                <Form.Select aria-label="Work Type" value={experience.workModel}
                                    onChange={(e) => updateExperience(index, "workModel", e.target.value)}>
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
                                    onChange={(e) => updateExperience(index, "startDate", e.target.value)}
                                />
                            </Form.Group>
                        </Col>
                        <Col md={4}>
                            <Form.Group controlId={`expEndDate${index}`}>
                                <Form.Label>To Date</Form.Label>
                                <Form.Control
                                    type="date"
                                    value={experience.endDate}
                                    onChange={(e) => updateExperience(index, "endDate", e.target.value)}
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
                                    onChange={(e) => updateExperience(index, "majorDuties", e.target.value)}
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
                                    onChange={(e) => updateExperience(index, "achievements", e.target.value)}
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
                                    placeholder="Write notes"
                                    value={experience.notes}
                                    onChange={(e) => updateExperience(index, "notes", e.target.value)}
                                />
                            </Form.Group>
                        </Col>

                    </Row>
                </div>

            ))}
            <Button variant="primary" onClick={addExperience}>
                + Add Experience
            </Button>
        </div>
    )

}

export default Experience;