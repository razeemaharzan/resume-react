import UploadPicture from "../../components/UploadPicture";
import React from "react";
import { Form, Row, Col } from "react-bootstrap";
import { useFormContext } from "../../context/FormContext";
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';

interface ProfileData {

}

const Profile: React.FC<ProfileData> = () => {

    const { formData, updateForm } = useFormContext();

    const handlePhone = (e: any) => {

        updateForm("phone", e);
        console.log(formData);
    };

    return (
        <div>
            <Row>
                <Col md={4}>
                    <Form.Group controlId="formName" className="mb-3">
                        <Form.Label>Full Name</Form.Label>
                        <Form.Control
                            type="text"
                            value={formData.name}
                            onChange={(e) => updateForm("name", e.target.value)}
                            placeholder="Enter your name"
                        />
                    </Form.Group>
                </Col>
                <Col md={4}>
                    <Form.Group controlId="formEmail" className="mb-3">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="Enter your email"
                            name="email"
                            value={formData.email}
                            onChange={(e) => updateForm("email", e.target.value)}
                        />
                    </Form.Group>
                </Col>
                <Col md={4}>
                    <Form.Group controlId="formMobile" className="mb-3">
                        <Form.Label>Phone</Form.Label>
                        <PhoneInput
                            placeholder="Enter phone number"
                            value={formData.phone}
                            onChange={handlePhone} />
                    </Form.Group>
                </Col>
            </Row>
            <Row>
            <Col md={4}>
                    <Form.Group controlId="formName" className="mb-3">
                        <Form.Label>Role</Form.Label>
                        <Form.Control
                            type="text"
                            value={formData.role}
                            onChange={(e) => updateForm("role", e.target.value)}
                            placeholder="Enter role/position"
                        />
                    </Form.Group>
                </Col>
                <Col md={4}>
                    <Form.Group controlId="address" className="mb-3">
                        <Form.Label>Address</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter your address"
                            name="address"
                            readOnly
                        />
                    </Form.Group>
                </Col>
            </Row>
            <Row>
                <Col md={12}>
                    <Form.Group className="mb-3" controlId="form.summary">
                        <Form.Label>Summary</Form.Label>
                        <Form.Control as="textarea" rows={3} value={formData.summary} placeholder="Write a summary of yourself"
                             onChange={(e) => updateForm("summary", e.target.value)}/>
                    </Form.Group>
                </Col>
            </Row>
            <UploadPicture></UploadPicture>

        </div>

    );

}

export default Profile