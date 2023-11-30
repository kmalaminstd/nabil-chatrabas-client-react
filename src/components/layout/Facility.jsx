import React from 'react'
import { Card, Container } from 'react-bootstrap'
import { MdElectricBolt, MdGasMeter  } from "react-icons/md"
import { IoIosWater } from "react-icons/io"

function Facility() {
  return (
    <Container> 

        <div className="section-header">
            <h2>সু্যোগ - সুবিধা</h2>
        </div>

        <div className="d-flex align-items-center justify-content-around">

            <Card className="text-center fac-card">
                <Card.Header className="d-flex flex-column" style={{fontSize: "20px"}}>
                    <div className="d-flex justify-content-around p-2 mx-auto" style={{backgroundColor: "white", height: "40px", width: "40px", borderRadius: "100%", color: "green", fontSize: "25px"}}>
                        <MdElectricBolt /> 
                    </div>
                    <div>
                        <p className="" style={{fontSize: "25px" , fontWeight: "bold"}}>বিদ্যুৎ</p>
                    </div>
                </Card.Header>
                <Card.Body style={{backgroundColor: "white"}}>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita eligendi et quisquam id ad incidunt, excepturi totam quas voluptates veniam aut reiciendis quidem libero odio, distinctio ullam? Voluptates harum, ducimus fuga, quos accusamus qui dicta quod ipsum, veniam est vero cum atque doloremque! Dignissimos beatae vero accusantium corporis doloribus ducimus!</p>
                </Card.Body>
            </Card>

            <Card className="text-center fac-card">
                <Card.Header className="d-flex flex-column" style={{fontSize: "20px"}}>
                    <div className="d-flex justify-content-around p-2 mx-auto" style={{backgroundColor: "white", height: "40px", width: "40px", borderRadius: "100%", color: "green", fontSize: "25px"}}>
                        <IoIosWater /> 
                    </div>
                    <div>
                        <p className="" style={{fontSize: "25px" , fontWeight: "bold"}}>পানি</p>
                    </div>
                </Card.Header>
                <Card.Body style={{backgroundColor: "white"}}>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita eligendi et quisquam id ad incidunt, excepturi totam quas voluptates veniam aut reiciendis quidem libero odio, distinctio ullam? Voluptates harum, ducimus fuga, quos accusamus qui dicta quod ipsum, veniam est vero cum atque doloremque! Dignissimos beatae vero accusantium corporis doloribus ducimus!</p>
                </Card.Body>
            </Card>

            <Card className="text-center fac-card">
                <Card.Header className="d-flex flex-column" style={{fontSize: "20px"}}>
                    <div className="d-flex justify-content-around p-2 mx-auto" style={{backgroundColor: "white", height: "40px", width: "40px", borderRadius: "100%", color: "green", fontSize: "25px"}}>
                        <MdGasMeter />
                    </div>
                    <div>
                        <p className="" style={{fontSize: "25px" , fontWeight: "bold"}}>গ্যাস</p>
                    </div>
                </Card.Header>
                <Card.Body style={{backgroundColor: "white"}}>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita eligendi et quisquam id ad incidunt, excepturi totam quas voluptates veniam aut reiciendis quidem libero odio, distinctio ullam? Voluptates harum, ducimus fuga, quos accusamus qui dicta quod ipsum, veniam est vero cum atque doloremque! Dignissimos beatae vero accusantium corporis doloribus ducimus!</p>
                </Card.Body>
            </Card>

        </div>

    </Container>
  )
}

export default Facility