
import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { useRefContext } from "../../context/RefContext";
import './Preview.css';

const Preview: React.FC = () => {

    const profile = useSelector((state: RootState) => state.profile);
    const educations = useSelector((state: RootState) => state.education);
    const experiences = useSelector((state: RootState) => state.experience);
    const skills = useSelector((state: RootState) => state.skill);
    const hobby = useSelector((state: RootState) => state.hobby);
    const interest = useSelector((state: RootState) => state.interest);
    const ref = useRefContext();

    const getFormattedDate = (date: string) => {
        if (date) {
            let dt = new Date(date);
            return dt.toLocaleString('en-EN', { month: "short", year: "numeric" });
        }

    }

    return (
        <div ref={ref}>

            <Container id="resume" className="fluid">
                <Row>
                    {/* <!-- Left Column --> */}
                    <Col md={4} className="left-column text-white">
                        {/* <!-- Profile Picture --> */}

                        <Row>
                            <Col md={12} >

                                <h1 className="font-weight"> {profile.name}
                                </h1>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={12} >
                                <h4 className="font-weight">{profile.role}
                                </h4>
                            </Col>
                        </Row>

                        {/* <!-- Contact Details --> */}
                        <Row>
                            <h5 className="section-title">Contact</h5>
                        </Row>
                        <Row>
                            <Col md={12} >
                                <p><strong>Address: {profile.address}</strong></p>
                                <p><strong>Phone:</strong> {profile.phone}</p>
                                <p><strong>Email:</strong> {profile.email}</p>
                            </Col>
                        </Row>
                        {/* <!-- Skills --> */}

                        <Row>
                            <h5 className="section-title">Skills</h5>
                            <ul>
                                {skills.map((skill) => (
                                    <li key={skill.id}>{skill.name}</li>
                                ))}
                            </ul>
                        </Row>
                    </Col>

                    {/* <!-- Right Column --> */}
                    <Col md={8} className="right-column ">
                        {/* <!-- Summary --> */}

                        <p>{profile.summary}
                        </p>
                        {/* <!-- Work History --> */}
                        <h5 className="resume-heading">Work History</h5>
                        {experiences.map((experience) => (
                            <div key={experience.id}>

                                <Row className=" work-history-detail">
                                    <Col md={2}>
                                        <span> {getFormattedDate(experience.startDate)} - <br/>
                                              {getFormattedDate(experience.endDate)}</span>
                                    </Col>
                                    <Col md={10}>
                                        <h4>{experience.position}</h4>
                                        <p><em>Company: {experience.companyName}, Location: {experience.location}</em></p>
                                        <p className="text-center font-weight heading-color">{experience.heading}</p>
                                        <h5>Major Duties</h5>
                                        <ul>
                                            <li>{experience.majorDuties}
                                            </li>

                                        </ul>
                                        <h5>Achievements</h5>
                                        <ul>
                                            <li>{experience.achievements}
                                            </li>

                                        </ul>
                                        <span><i>{experience.notes}</i></span>
                                    </Col>
                                </Row>

                            </div>
                        ))}

                        {/* <!-- Education content start --> */}
                        <h5 className="resume-heading">Education</h5>
                        {educations.map((education) => (
                            <div key={education.id}>
                                <Row className="row">
                                    <Col md={2}>
                                        <span>{getFormattedDate(education.startDate)} - <br/> {getFormattedDate(education.endDate)} </span>
                                    </Col>
                                    <Col md={10}>
                                        <h6>{education.institution}</h6>
                                        <span><em>{education.degree}</em></span>
                                    </Col>

                                </Row>
                            </div>
                        ))}

                        {/* <!-- Interests --> */}
                        <h5 className="resume-heading">Interests</h5>
                        <p>{interest.interest}</p>

                        {/* <!-- Hobbies --> */}
                        <h5 className="resume-heading">Hobbies</h5>

                        <p>{hobby.hobby}</p>


                    </Col>
                </Row>
            </Container>

        </div>

    );

}

export default Preview