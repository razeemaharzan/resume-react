import { Form, Button, Row, Col } from "react-bootstrap";
import React, { useState } from 'react';
import { useFormContext } from "../../context/FormContext";
import ListManager from '../../components/ListManager';

interface SkillData {

}

interface SkillItem {
    id: string;
    name: string;
}



const Skill: React.FC<SkillData> = () => {

    const { formData, updateForm } = useFormContext();
    const [listManager] = useState(
        new ListManager<SkillItem>([{ id: crypto.randomUUID(), name: "" }])
    );

    const [skills, setSkills] = useState<SkillItem[]>(listManager.getItems());

    const addSkill = () => {
        listManager.addItem({ id: crypto.randomUUID(), name: "" });
        setSkills(listManager.getItems());
        updateForm("skills", listManager.getItems());
    }

    const updateSkill = (index: number, name: string) => {
        listManager.updateItem(index, { name });
        setSkills(listManager.getItems());
    }

    const deleteSkill = (index: number) => {
        listManager.deleteItem(index);
        setSkills(listManager.getItems());
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
                                        value={skill.name}
                                        onChange={(e) => updateSkill(index, e.target.value)}
                                    />
                                </Form.Group>
                            </Col>

                            <Col md={6}>
                                <Button variant="danger" onClick={() => deleteSkill(index)}>
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
            <Button variant="primary" onClick={addSkill}>
                + Add Skill
            </Button>

        </div>

    );

}

export default Skill