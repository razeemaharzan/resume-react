
import { Form, Row, Col, Button, Container } from "react-bootstrap";
import './Preview.css';
import { useFormContext } from "../../context/FormContext";

interface PreviewData {

}

const Preview: React.FC<PreviewData> = () => {

    const { formData, updateForm } = useFormContext();

    return (
        <div>

            <Container id="resume">
                <Row>
                    {/* <!-- Left Column --> */}
                    <Col md={4} className="left-column text-white">
                        {/* <!-- Profile Picture --> */}

                        <Row>
                            <Col md={12} >

                                <h1 className="font-weight"> {formData.name}
                                </h1>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={12} >
                                <h4 className="font-weight">{formData.role}
                                </h4>
                            </Col>
                        </Row>

                        {/* <!-- Contact Details --> */}
                        <Row>
                            <h5 className="section-title">Contact</h5>
                        </Row>
                        <Row>
                            <Col md={12} >
                                <p><strong>Address: </strong></p>
                                <p><strong>{formData.address.country}</strong></p>
                                <p><strong>Phone:</strong> {formData.phone}</p>
                                <p><strong>Email:</strong> {formData.email}</p>
                            </Col>
                        </Row>
                        {/* <!-- Skills --> */}

                        <Row>
                            <h5 className="section-title">Skills</h5>
                            <ul>
                                {/* {formData.skills.map((skill, index) => (
                                    <li>{skill}</li>
                                ))} */}
                            </ul>
                        </Row>
                    </Col>

                    {/* <!-- Right Column --> */}
                    <Col md={8} className="right-column ">
                        {/* <!-- Summary --> */}

                        <p>{formData.summary}
                        </p>
                        {/* <!-- Work History --> */}
                        <h5 className="resume-heading">Work History</h5>
                        <div>

                            <Row className=" work-history-detail">
                                <Col md={2}>
                                    <p>Aug 2023 - Present</p>
                                </Col>
                                <Col md={10}>
                                    <h4>Software Developer</h4>
                                    <p><em>Company: Workharu, Location: Remote</em></p>
                                    <p className="text-center font-weight heading-color"> Project - Real estate management system (Trusty Group
                                        Realty)</p>
                                    <h5>Major Duties</h5>
                                    <ul>
                                        <li>Lead the development of custom software solutions, including a Rental Management System, by
                                            collaborating closely with
                                            clients to gather and clarify requirements.
                                        </li>

                                    </ul>
                                    <h5>Achievements</h5>
                                    <ul>
                                        <li>Successfully led development of rental Management System, translating client requirements into
                                            scalable solutions using
                                            Java for backend and AngularJS/Angular 8+ for the frontend, ensuring on-time delivery.
                                        </li>

                                    </ul>
                                    <p><b>Technologies Involved</b> - Java, Springboot Framework, Angular 8, Cypress, Mysql, HTML, CSS</p>
                                </Col>
                            </Row>

                        </div>

                        {/* <!-- Education content start --> */}
                        <h5 className="resume-heading">Education</h5>
                        <Row className="row">
                            <Col md={2}>
                                <p>Oct 2012 - Aug 2016</p>
                            </Col>
                            <Col md={10}>
                                <h6>National College of Computer Studies</h6>
                                <p><em>Bachelor in Information Management</em></p>
                            </Col>

                        </Row>
                        <Row className="row">
                            <Col md={2}>
                                <p>Jul 2022 - May 2024</p>
                            </Col>
                            <Col md={10}>
                                <h6>University of Southern Queensland</h6>
                                <p><em>Masters of Information Systems</em></p>
                            </Col>

                        </Row>
                        {/* <!-- Interests --> */}
                        <h5 className="resume-heading">Interests</h5>
                        <p>{formData.interests}</p>

                        {/* <!-- Hobbies --> */}
                        <h5 className="resume-heading">Hobbies</h5>
                        <p>{formData.hobbies}</p>
                    </Col>
                </Row>
            </Container>

        </div>

    );

}

export default Preview