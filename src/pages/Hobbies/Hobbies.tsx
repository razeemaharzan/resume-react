import { Form } from "react-bootstrap";
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { updateItem } from './HobbiesSlice';


const Hobbies: React.FC = () => {
    const hobby = useAppSelector((state) => state.hobby)
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
                <Form.Label>Hobbies</Form.Label>
                <Form.Control as="textarea" rows={10} placeholder="Write hobbies"
                    value={hobby.hobby}
                    name="hobby"
                    onChange={(e) => handleChange(hobby.id, e)}
                />
            </Form.Group>
        </div>

    );

}

export default Hobbies