import { Form, Button, Row, Col } from "react-bootstrap";
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import {addCertificate, updateCertificate, deleteCertificate} from './CertificateSlice';


const Certificate: React.FC = () => {

    const certificates = useAppSelector((state) => state.certificate)
    const dispatch = useAppDispatch();

    const addItem = () => {
        let item = {id: crypto.randomUUID(), name: '' , obtainedFrom: ''};
        dispatch(addCertificate(item));

    }

    const handleChange = (id: string, e: any) => {
        // Retrive name and value attribute from element
        const { name, value } = e.target;

        dispatch(updateCertificate({
            id,
            updatedData: { [name]: value },
        }));

    };

    return (
        <div>

            {certificates.map((certificate, index) => (
                <div key={index}>
                    <Row>
                        <Col md={4}>
                            <Form.Group controlId={`CertificateName${index}`} className="mb-3">
                                <Form.Label>Certificate Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter cetrificate name"
                                    value={certificate.name}
                                    name="name"
                                    onChange={(e) => handleChange(certificate.id, e)}
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
                                    name="obtainedFrom"
                                    onChange={(e) => handleChange(certificate.id, e)}
                                />
                            </Form.Group>
                        </Col>
                        <Col md={2}>
                            <div className="mb-3">
                                <Button variant="danger" onClick={() => deleteCertificate(certificate.id)}>
                                    Delete
                                </Button>
                            </div>
                        </Col>
                    </Row>
                </div>
            ))}


            <Button variant="primary" onClick={addItem}>
                + Add Certificate
            </Button>


        </div>

    );

}

export default Certificate