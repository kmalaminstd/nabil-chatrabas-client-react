import React from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'

function ApplyForm() {
  return (
    <div className="pb-5">
        

            <Form className="applyForm">
                <Form.Group>
                    <Row>
                        <Col lg={4} sm={12}>
                            <Form.Label> Full Name:</Form.Label>
                        </Col>
                        <Col lg={8} sm={12}>
                            <Form.Control type="text" name="fullName" />
                        </Col>
                    </Row>
                </Form.Group>

                <Form.Group className="mt-3">
                    <Row>
                        <Col lg={4} sm={12}>
                            <Form.Label> Institute Name:</Form.Label>
                        </Col>
                        <Col lg={8} sm={12}>
                            <Form.Control type="text" name="institute" />
                        </Col>
                    </Row>
                </Form.Group>


                <Form.Group className="mt-3">
                    <Row>
                        <Col lg={4} sm={12}>
                            <Form.Label> District:</Form.Label>
                        </Col>
                        <Col lg={8} sm={12}>
                            <Form.Control type="text" name="district" />
                        </Col>
                    </Row>
                </Form.Group>

                <Form.Group className="mt-3">
                    <Row>
                        <Col lg={4} sm={12}>
                            <Form.Label> Technology:</Form.Label>
                        </Col>
                        <Col lg={8} sm={12}>
                            <Form.Select name="technology">
                                <option value="">Select Your Technology</option>
                                <option value="">Computer</option>
                                <option value="">Civil</option>
                                <option value="">Construction</option>
                                <option value="">Electrical</option>
                                <option value="">Electronics</option>
                                <option value="">Telecommunication</option>
                                <option value="">Mechanical</option>
                            </Form.Select>
                        </Col>
                    </Row>
                </Form.Group>

                <Form.Group className="mt-3">
                    <Row>
                        <Col lg={4} sm={12}>
                            <Form.Label> Session:</Form.Label>
                        </Col>
                        <Col lg={8} sm={12}>
                            <Form.Select name="session">
                                <option value="">Select Your Session</option>
                                <option value="">19-20</option>
                                <option value="">20-21</option>
                                <option value="">22-23</option>
                                <option value="">23-24</option>
                                <option value="">24-25</option>
                                <option value="">25-26</option>
                            </Form.Select>
                        </Col>
                    </Row>
                </Form.Group>

                <Form.Group className="mt-3">
                    <Row>
                        <Col lg={4} sm={12}>
                            <Form.Label> Probidhan:</Form.Label>
                        </Col>
                        <Col lg={8} sm={12}>
                            <Form.Select name="probidhan">
                                <option value="">Select Your Probidhan</option>
                                <option value="">2010</option>
                                <option value="">2016</option>
                                <option value="">2022</option>
                                <option value="">2026</option>
                            </Form.Select>
                        </Col>
                    </Row>
                </Form.Group>

                <Form.Group className="mt-3">
                    <Row>
                        <Col lg={4} sm={12}>
                            <Form.Label> Date of Birth:</Form.Label>
                        </Col>
                        <Col lg={8} sm={12}>
                            <Form.Control type="date" name="DOB" />
                        </Col>
                    </Row>
                </Form.Group>

                <Form.Group className="mt-3">
                    <Row>
                        <Col lg={4} sm={12}>
                            <Form.Label> Contact No:</Form.Label>
                        </Col>
                        <Col lg={8} sm={12}>
                            <Form.Control type="phone" name="phone" />
                        </Col>
                    </Row>
                </Form.Group>

                <Form.Group className="mt-3">
                    <Row>
                        <Col lg={4} sm={12}>
                            <Form.Label> Email:</Form.Label>
                        </Col>
                        <Col lg={8} sm={12}>
                            <Form.Control type="email" name="email" />
                        </Col>
                    </Row>
                </Form.Group>

                <Form.Group className="mt-3">
                    <Row>
                        <Col lg={4} sm={12}>
                            <Form.Label> Facebook Profile Link:</Form.Label>
                        </Col>
                        <Col lg={8} sm={12}>
                            <Form.Control type="url" name="profileLink" />
                        </Col>
                    </Row>
                </Form.Group>

                <Form.Group className="mt-3">
                    <Row>
                        <Col lg={4} sm={12}>
                            <Form.Label> Image:</Form.Label>
                        </Col>
                        <Col lg={8} sm={12}>
                            <Form.Control type="file" accept="image/*" name="profileLink" />
                        </Col>
                    </Row>
                </Form.Group>
                

                <Form.Group className="mt-3">
                    <Row>
                        <Col lg={4} sm={12}>
                            <Form.Label> Favourite Quote:</Form.Label>
                        </Col>
                        <Col lg={8} sm={12}>
                            <Form.Control as="textarea" name="quote" style={{resize: "none"}} />
                        </Col>
                    </Row>
                </Form.Group>

                <Button variant="warning" style={{width: "100%"}} className="mt-3"> Submit </Button>
            </Form>
        
    </div>
  )
}

export default ApplyForm