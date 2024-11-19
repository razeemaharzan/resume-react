import { useFormContext } from "../../context/FormContext";
import { Form } from "react-bootstrap";

interface InterestData {

}


const Interest: React.FC<InterestData> = () => {
    const { formData, updateForm } = useFormContext();
    return (
        <div>

            <Form.Group className="mb-3" controlId="form.interests">
                <Form.Label>Interest</Form.Label>
                <Form.Control as="textarea" rows={10} placeholder="Write interests"
                    value={formData.interests}
                    onChange={(e) => updateForm("interests", e.target.value)}
            
                />
            </Form.Group>
        </div>

    );

}

export default Interest