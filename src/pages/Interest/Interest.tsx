
import { Form } from "react-bootstrap";
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { updateItem } from './InterestSlice';


const Interest: React.FC = () => {
    const interest = useAppSelector((state) => state.interest)
    const dispatch = useAppDispatch();


    const handleChange = (id: string, e: any) => {
        // Retrive name and value attribute from element
        const { name, value } = e.target;

        dispatch(updateItem({
            id,
            updatedData: { [name]: value },
        }));

    };
    return (
        <div>

            <Form.Group className="mb-3" controlId="form.interests">
                <Form.Label>Interest</Form.Label>
                <Form.Control as="textarea" rows={10} placeholder="Write interests"
                    value={interest.interest}
                    name="interest"
                            onChange={(e) => handleChange(interest.id, e)}
            
                />
            </Form.Group>
        </div>

    );

}

export default Interest