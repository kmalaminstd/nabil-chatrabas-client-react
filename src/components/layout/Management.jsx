import React from 'react'
import { Card, Col, Container, Row, Table } from 'react-bootstrap'

function Management() {
  return (
    <div>
        <Container>
        <div className="section-header">
            <h2>পরিচালক</h2>
        </div>

        <Card className=" p-3" style={{maxWidth: "80%", margin: "40px auto"}}>
            <Row>
                <Col md={4} sm={12}>
                    <Card.Img variant="left" src="images/user.png" style={{width: "100%", height: "auto"}} />
                </Col>
                
                <Col md={8} sm={12}>
                    <Card.Body>
                        <Card.Text>
                            <Table>
                                <thead>
                                    <tr>
                                        <th>Name:</th>
                                        <td>John Doe</td>
                                    </tr>

                                    <tr>
                                        <th>Address: </th>
                                        <td>Tangail</td>
                                    </tr>

                                    <tr>
                                        <th>Contact: </th>
                                        <td>01700000000</td>
                                    </tr>

                                    <tr>
                                        <th>Profession: </th>
                                        <td>Engineer</td>
                                    </tr>
                                </thead>
                            </Table>
                        </Card.Text>
                    </Card.Body>
                </Col>
            </Row>     
        </Card>

        
        </Container>
    </div>
  )
}

export default Management