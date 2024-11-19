import { Form, Button, Row, Col } from "react-bootstrap";
import React, { useState } from 'react';
import ListManager from '../../components/ListManager';
import { useFormContext } from "../../context/FormContext";

interface CertificationData {

}

interface CertificationItem {
    id: string;
    name: string;
    obtainedFrom: string;
}
const Certification: React.FC<CertificationData> = () => {

    const { formData, updateForm } = useFormContext();
    const [listManager] = useState(
        new ListManager<CertificationItem>([{ id: crypto.randomUUID(), name: "", obtainedFrom: '' }])
    );
    const [skills, setSkills] = useState<CertificationItem[]>(listManager.getItems());

    const addCertification = () => {

        listManager.addItem({ id: crypto.randomUUID(), name: "", obtainedFrom: "" });
        setSkills(listManager.getItems());
    }

    const updateCertification = (index: number, key: string, data: string) => {

        listManager.updateItem(index, { [key]: data });
        setSkills(listManager.getItems());
        updateForm("certifications",listManager.getItems());
    }
    const deleteCertificate = (index: number) => {

        listManager.deleteItem(index);
        setSkills(listManager.getItems());
    };

    return (
        <div>

            {skills.map((certificate, index) => (
                <div key={index}>
                    <Row>
                        <Col md={4}>
                            <Form.Group controlId={`certificationName${index}`} className="mb-3">
                                <Form.Label>Certificate Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter cetrificate name"
                                    value={certificate.name}
                                    onChange={(e) => updateCertification(index, "name", e.target.value)}
                                />
                            </Form.Group>
                        </Col>
                        <Col md={4}>
                            <Form.Group controlId={`obtainedFrom${index}`} className="mb-3">
                                <Form.Label>Certificate Obtained From</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter institute name where certificate obtained"
                                    value={certificate.obtainedFrom}
                                    onChange={(e) => updateCertification(index, "obtainedFrom", e.target.value)}
                                />
                            </Form.Group>
                        </Col>
                        <Col md={2}>
                            <div className="mb-3">
                                <Button variant="danger" onClick={() => deleteCertificate(index)}>
                                    Delete
                                </Button>
                            </div>
                        </Col>
                    </Row>
                </div>
            ))}


            <Button variant="primary" onClick={addCertification}>
                + Add Certificate
            </Button>


        </div>

    );

}

export default Certification