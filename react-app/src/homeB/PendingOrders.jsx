import React from 'react'
import { Card, Container, Row, Col } from 'react-bootstrap'
import './PendingOrders.css'

export default function PendingOrders() {
    return (
        <div>
            <Container>
            <div style={{position:"absolute",top:"50%", width:"1000px",height:"320px", overflowY:"scroll", overflowX:"hidden"}}>
                    <Row>
                        <Col>
                        <Card style={{borderColor:"#DD5A34",width:"600px", borderWidth:"1.5px"}} body>Order Id</Card>
                        <br/>
                        </Col>
                        <Col>
                        <Card style={{borderColor:"#DD5A34",width:"300px", borderWidth:"1.5px"}} body>Customer Name</Card>
                        <br/>
                        </Col>
                        <br/>
                    </Row>
                    <Row>
                        <Col >
                        <Card style={{borderColor:"#DD5A34",width:"600px", borderWidth:"1.5px"}} body>Order Id</Card>
                        <br/>
                        </Col>
                        <Col>
                        <Card style={{borderColor:"#DD5A34",width:"300px",borderWidth:"1.5px"}} body>Customer Name</Card>                        <br/>
                        </Col>
                        <br/>
                    </Row>
                    <Row>
                        <Col>
                        <Card style={{borderColor:"#DD5A34",width:"600px", borderWidth:"1.5px"}} body>Order Id</Card>
                        <br/>
                        </Col>
                        <Col >
                        <Card style={{borderColor:"#DD5A34",width:"300px",borderWidth:"1.5px"}} body>Customer Name</Card>                        <br/>
                        </Col>
                        <br/>
                    </Row>
                    <Row>
                        <Col>
                        <Card style={{borderColor:"#DD5A34",width:"600px", borderWidth:"1.5px"}} body>Order Id</Card>
                        <br/>
                        </Col>
                        <Col>
                        <Card style={{borderColor:"#DD5A34",width:"300px",borderWidth:"1.5px"}} body>Customer Name</Card>                        <br/>
                        </Col>
                        <br/>
                    </Row>
                    <Row>
                        <Col>
                        <Card style={{borderColor:"#DD5A34",width:"600px", borderWidth:"1.5px"}} body>Order Id</Card>
                        <br/>
                        </Col>
                        <Col>
                        <Card style={{borderColor:"#DD5A34",width:"300px",borderWidth:"1.5px"}} body>Customer Name</Card>
                        <br/>
                        </Col>
                        <br/>
                    </Row>
                </div>
            </Container>
        </div>
    )
}
