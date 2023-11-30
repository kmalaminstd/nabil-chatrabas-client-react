import React from 'react'
import { Card, Col, Container, Row, Table } from 'react-bootstrap'
import { Link } from "react-router-dom"

function Borders() {
  return (
    <div className="pb-5">

        <div className="section-header">
            <h2>বর্তমান ছাত্রদের তালিকা</h2>
        </div>

        <Container>

            <Row>

                <Col lg={4} md={6} sm={12} className="mt-5">
                    <Card style={{boxShadow: "0px 2px 2px 2px lightgray"}}>

                        <Row>
                            <Col lg={12} className="p-3 text-center" style={{maxHeight: "300px"}}>
                               <Card.Img src="images/student.png" />
                            </Col>
                            <Col lg={12} className="mt-5">
                                <Table responsive variant="dark" className="mt-5">
                                    <thead>
                                        <tr>
                                            <th>Name:</th>
                                            <td>John Doe</td>
                                        </tr>
                                        
                                        <tr>
                                            <th>Institute:</th>
                                            <td>Tangail Polytechnic Institute</td>
                                        </tr>

                                        <tr>
                                            <th>District: </th>
                                            <td>Pabna</td>
                                        </tr>

                                        <tr>
                                            <th>Technology:</th>
                                            <td>Computer</td>
                                        </tr>

                                        <tr>
                                            <th>Session:</th>
                                            <td>20-21</td>
                                        </tr>

                                        <tr>
                                            <th>Probidhan: </th>
                                            <td>2016</td>
                                        </tr>

                                        <tr>
                                            <th>Date of Birth:</th>
                                            <td>9 Nov, 2004</td>
                                        </tr>

                                        <tr>
                                            <th>Contact No.:</th>
                                            <td>01700000000</td>
                                        </tr>

                                        <tr>
                                            <th>Email : </th>
                                            <td>alaminkhanstd@gmail.com</td>
                                        </tr>

                                        <tr>
                                            <th>Facebook Profile:</th>
                                            <td><Link to="facebook">Facebook</Link></td>
                                        </tr>

                                        <tr>
                                            <th>Favourite Quote:</th>
                                            <td>No Quote</td>
                                        </tr>
                                    </thead>
                                </Table>
                            </Col>
                        </Row>

                    </Card>
                </Col>

                <Col lg={4} md={6} sm={12} className="mt-5">
                    <Card style={{boxShadow: "0px 2px 2px 2px lightgray"}}>

                        <Row>
                            <Col lg={12} className="p-3 text-center" style={{maxHeight: "300px"}}>
                               <Card.Img src="images/student.png" />
                            </Col>
                            <Col lg={12} className="mt-5">
                                <Table responsive variant="dark" className="mt-5">
                                    <thead>
                                        <tr>
                                            <th>Name:</th>
                                            <td>John Doe</td>
                                        </tr>
                                        
                                        <tr>
                                            <th>Institute:</th>
                                            <td>Tangail Polytechnic Institute</td>
                                        </tr>

                                        <tr>
                                            <th>District: </th>
                                            <td>Pabna</td>
                                        </tr>

                                        <tr>
                                            <th>Technology:</th>
                                            <td>Computer</td>
                                        </tr>

                                        <tr>
                                            <th>Session:</th>
                                            <td>20-21</td>
                                        </tr>

                                        <tr>
                                            <th>Probidhan: </th>
                                            <td>2016</td>
                                        </tr>

                                        <tr>
                                            <th>Date of Birth:</th>
                                            <td>9 Nov, 2004</td>
                                        </tr>

                                        <tr>
                                            <th>Contact No.:</th>
                                            <td>01700000000</td>
                                        </tr>

                                        <tr>
                                            <th>Email : </th>
                                            <td>alaminkhanstd@gmail.com</td>
                                        </tr>

                                        <tr>
                                            <th>Facebook Profile:</th>
                                            <td><Link to="facebook">Facebook</Link></td>
                                        </tr>

                                        <tr>
                                            <th>Favourite Quote:</th>
                                            <td>No Quote</td>
                                        </tr>
                                    </thead>
                                </Table>
                            </Col>
                        </Row>

                    </Card>
                </Col>

                <Col lg={4} md={6} sm={12} className="mt-5">
                    <Card style={{boxShadow: "0px 2px 2px 2px lightgray"}}>

                        <Row>
                            <Col lg={12} className="p-3 text-center" style={{maxHeight: "300px"}}>
                               <Card.Img src="images/student.png" />
                            </Col>
                            <Col lg={12} className="mt-5">
                                <Table responsive variant="dark" className="mt-5">
                                    <thead>
                                        <tr>
                                            <th>Name:</th>
                                            <td>John Doe</td>
                                        </tr>
                                        
                                        <tr>
                                            <th>Institute:</th>
                                            <td>Tangail Polytechnic Institute</td>
                                        </tr>

                                        <tr>
                                            <th>District: </th>
                                            <td>Pabna</td>
                                        </tr>

                                        <tr>
                                            <th>Technology:</th>
                                            <td>Computer</td>
                                        </tr>

                                        <tr>
                                            <th>Session:</th>
                                            <td>20-21</td>
                                        </tr>

                                        <tr>
                                            <th>Probidhan: </th>
                                            <td>2016</td>
                                        </tr>

                                        <tr>
                                            <th>Date of Birth:</th>
                                            <td>9 Nov, 2004</td>
                                        </tr>

                                        <tr>
                                            <th>Contact No.:</th>
                                            <td>01700000000</td>
                                        </tr>

                                        <tr>
                                            <th>Email : </th>
                                            <td>alaminkhanstd@gmail.com</td>
                                        </tr>

                                        <tr>
                                            <th>Facebook Profile:</th>
                                            <td><Link to="facebook">Facebook</Link></td>
                                        </tr>

                                        <tr>
                                            <th>Favourite Quote:</th>
                                            <td>No Quote</td>
                                        </tr>
                                    </thead>
                                </Table>
                            </Col>
                        </Row>

                    </Card>
                </Col>


                <Col lg={4} md={6} sm={12} className="mt-5">
                    <Card style={{boxShadow: "0px 2px 2px 2px lightgray"}}>

                        <Row>
                            <Col lg={12} className="p-3 text-center" style={{maxHeight: "300px"}}>
                               <Card.Img src="images/student.png" />
                            </Col>
                            <Col lg={12} className="mt-5">
                                <Table responsive variant="dark" className="mt-5">
                                    <thead>
                                        <tr>
                                            <th>Name:</th>
                                            <td>John Doe</td>
                                        </tr>
                                        
                                        <tr>
                                            <th>Institute:</th>
                                            <td>Tangail Polytechnic Institute</td>
                                        </tr>

                                        <tr>
                                            <th>District: </th>
                                            <td>Pabna</td>
                                        </tr>

                                        <tr>
                                            <th>Technology:</th>
                                            <td>Computer</td>
                                        </tr>

                                        <tr>
                                            <th>Session:</th>
                                            <td>20-21</td>
                                        </tr>

                                        <tr>
                                            <th>Probidhan: </th>
                                            <td>2016</td>
                                        </tr>

                                        <tr>
                                            <th>Date of Birth:</th>
                                            <td>9 Nov, 2004</td>
                                        </tr>

                                        <tr>
                                            <th>Contact No.:</th>
                                            <td>01700000000</td>
                                        </tr>

                                        <tr>
                                            <th>Email : </th>
                                            <td>alaminkhanstd@gmail.com</td>
                                        </tr>

                                        <tr>
                                            <th>Facebook Profile:</th>
                                            <td><Link to="facebook">Facebook</Link></td>
                                        </tr>

                                        <tr>
                                            <th>Favourite Quote:</th>
                                            <td>No Quote</td>
                                        </tr>
                                    </thead>
                                </Table>
                            </Col>
                        </Row>

                    </Card>
                </Col>

            </Row>

        </Container>


    </div>
  )
}

export default Borders