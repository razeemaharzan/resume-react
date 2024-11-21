import UploadPicture from "../../components/UploadPicture";
import React from "react";
import { Form, Row, Col } from "react-bootstrap";
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { setProfile } from './ProfileSlice';


interface ProfileData {

}

const Profile: React.FC<ProfileData> = () => {

    const profile = useAppSelector((state) => state.profile)
    const dispatch = useAppDispatch();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        dispatch(setProfile({ [name]: value }));
    };

    const handlePhone = (e: any) => {
        dispatch(setProfile({ phone: e }));
    };

    return (
        <div>
            <Row>
                <Col md={4}>
                    <Form.Group controlId="formName" className="mb-3">
                        <Form.Label>Full Name</Form.Label>
                        <Form.Control
                            type="text"
                            name="name"
                            value={profile.name}
                            onChange={handleChange}
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
                            value={profile.email}
                            onChange={handleChange}
                        />
                    </Form.Group>
                </Col>
                <Col md={4}>
                    <Form.Group controlId="formMobile" className="mb-3">
                        <Form.Label>Phone</Form.Label>
                        <PhoneInput
                            placeholder="Enter phone number"
                            value={profile.phone}
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
                            name="role"
                            value={profile.role}
                            onChange={handleChange}
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
                            value={profile.address}
                            onChange={handleChange}
                        />
                    </Form.Group>
                </Col>
            </Row>
            <Row>
                <Col md={12}>
                    <Form.Group className="mb-3" controlId="summary">
                        <Form.Label>Summary</Form.Label>


                        <Form.Control
                            as="textarea" rows={3}
                            placeholder="Write a summary of yourself"
                            name="summary"
                            value={profile.summary}
                            onChange={handleChange} />

                    </Form.Group>
                </Col>
            </Row>
            <UploadPicture></UploadPicture>

        </div>

    );

}

export default Profile