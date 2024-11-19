import { Form } from "react-bootstrap";
import { useFormContext } from "../../context/FormContext";
interface HobbiesData {

}


const Hobbies: React.FC<HobbiesData> = () => {
    const { formData, updateForm } = useFormContext();
    return (
        <div>

            <Form.Group className="mb-3" controlId="form.interests">
                <Form.Label>Hobbies</Form.Label>
                <Form.Control as="textarea" rows={10} placeholder="Write hobbies"
                 value={formData.hobbies}
                 onChange={(e) => updateForm("hobbies", e.target.value)}
                />
            </Form.Group>

        </div>

    );

}

export default Hobbies