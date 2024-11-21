import { Form, Button, Row, Col } from "react-bootstrap";
import React from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { addSkill, updateSkill, deleteSkill } from './SkillSlice';


const Skill: React.FC = () => {

    const skills = useAppSelector((state) => state.skill)
    const dispatch = useAppDispatch();

    const addItem = () => {
        let item = { id: crypto.randomUUID(), name: '' };
        dispatch(addSkill(item));

    }

    const deleteItem = (id: string) => {
        dispatch(deleteSkill(id));
    };

    const handleChange = (id: string, e: any) => {
        // Retrive name and value attribute from element
        const { name, value } = e.target;

        dispatch(updateSkill({
            id,
            updatedData: { [name]: value },
        }));

    };

    return (
        <div>
            <Row>
                <Col md={8}>
                    {skills.map((skill, index) => (
                        <Row key={skill.id}>

                            <Col md={6}>
                                <Form.Group controlId={`skill${index}`} className="mb-3">
                                    <Form.Label>Skill Name</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Enter skill name"
                                        name="name"
                                        value={skill.name}
                                        onChange={(e) => handleChange(skill.id, e)}
                                    />
                                </Form.Group>
                            </Col>

                            <Col md={6}>
                                <Button variant="danger" onClick={() => deleteItem(skill.id)}>
                                    Delete
                                </Button>
                            </Col>

                        </Row>

                    ))}
                </Col>
                <Col md={4}>
                    <ul>
                        {skills.map((skill, index) => (
                            (skill.name != '') ? <li key={index}>{skill.name}</li> : <p key={index}></p>
                        ))}
                    </ul>
                </Col>
            </Row>
            <Button variant="primary" onClick={addItem}>
                + Add Skill
            </Button>

        </div>

    );

}

export default Skill