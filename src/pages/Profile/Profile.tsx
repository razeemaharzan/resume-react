import UploadPicture from "./components/UploadPicture";
import React from "react";
import { Form } from "react-bootstrap";
import { useFormContext } from "../../context/FormContext";
interface ProfileData {

}


const Profile: React.FC<ProfileData> = () => {
    const { formData, updateForm } = useFormContext();
    return (
        <div>

            <Form.Group controlId="formName" className="mb-3">
                <Form.Label>Full Name</Form.Label>
                <Form.Control
                    type="text"
                    value={formData.name}
                    onChange={(e) => updateForm("name", e.target.value)}
                    placeholder="Enter your name"
                />
            </Form.Group>

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

            <Form.Group controlId="formMobile" className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control
                    type="phone"
                    placeholder="Enter your phone number"
                    name="phone"
                    value={formData.phone}
                    onChange={(e) => updateForm("phone", e.target.value)}
                />
            </Form.Group>


            <UploadPicture></UploadPicture>

        </div>

    );

}

export default Profile