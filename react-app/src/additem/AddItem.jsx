import React from 'react'
import img1 from  "./images/Group 160.svg"
import img2 from  "./images/Group 62.svg"
import img3 from "./images/LOGO.svg"
import img4 from "./images/bx_bx-qr.svg"
import img5 from "./images/arrow_back_ios.svg"
import {Image,  Row, Col, Container,  Alert} from 'react-bootstrap'
import { useHistory, Link } from 'react-router-dom'
import FeatherIcon from 'feather-icons-react'
import { useAuth } from '../context/AuthContext'
import { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
// import Webcam from "react-webcam";
// import Camera from 'react-html5-camera-photo';
import Camera from './Camera'



export default function AddItem() {
    const { logout } = useAuth()
    const history = useHistory()
    const [error, setError] = useState("")


    async function handleLogout() {
        setError("")
    
        try {
          await logout()
          history.push("/signInS")
        } catch {
          setError("Failed to log out")
        }
      }
    //   function handleTakePhoto (dataUri) {
    //     // Do stuff with the photo...
    //     console.log('takePhoto');
    //   }
    return (
        <div>
            <Container>
            {error && <Alert variant="danger">{error}</Alert>}
            <Row>
                <Col>        
                    <div  style={{position:"absolute", width:"150px", height:"10px",left:"5%"}}>
                    <Link to="/">
                    <Image src={img3} fluid/>
                    </Link>
                </div>
                    <div  style={{position:"absolute", width:"50px", height:"50px",left:"5%",top:"15%"}}>
                    <Link to="/Buisness_home">
                    <Image src={img5} fluid/>
                    </Link>
                </div>
                 </Col>
                <Col>
                <div style={{ position:"absolute",left:"20%",top:"3.5%",height:"35px", width:"35px"}}>
                    <Link to ="/QR_Generation">
                    <Image src={img4} fluid/>
                    </Link>
                </div>
                <div style={{position:"absolute", left:"10%", top:"20%"}}>
                </div>
                </Col>
            </Row>
            </Container>
            <Container>
            <Row>
                <Col>
                <div style={{top:"25%", position:"absolute", left:"15%"}}>
                    <h1 className="display-4" style={{color:"#F16B44"}}>
                        Add an Item
                    </h1>
                    <Form>
                    <br />
                    <Form.Control style={{borderColor:"#DD5A34",  borderWidth:"1.5px"}} type="text" placeholder="Product name" />
                    <br />
                    <Row>
                        <Col>
                            <Form.Control style={{borderColor:"#DD5A34",borderWidth:"1.5px"}} type="text" placeholder="Product Cost" />
                            <br /></Col>
                        <Col>
                    <Form.Control style={{borderColor:"#DD5A34", borderWidth:"1.5px"}}  type="text" placeholder="Stock" />
                    <br />
                    </Col>
                    </Row>
                    </Form>
                    <div className="d-grid gap-2">
                    <Button style={{backgroundColor:"#DD5A34", borderColor:"#DD5A34"}}>Add Item</Button>
                    </div>

                </div>
                </Col>
                <Col>
                <div 
                // style={{height:"20%", width:"20%"}}
                >
                {/* <Webcam/> */}
                {/* <Camera
                onTakePhoto = { (dataUri) => { handleTakePhoto(dataUri); } }
                /> */}
                <Camera/>
                </div>
                </Col>
            </Row>
            </Container>
            <div style={{position:"absolute", width:"144px", height:"144px", right:"0%", top:"0"}}>
            <Image src={img1} fluid/>
            </div>
            <div style={{position:"absolute", bottom:"0",width:"200px",  left:"0%"}}>
            <Image src={img2} fluid/>
            </div>        
                <div  onClick={handleLogout} style={{position:"absolute",width:"50px", height:"50px",color:"white", top:"3%",right:"3%"}}>
                    <FeatherIcon  icon="log-out"/>
                </div>            
        </div>
    )
}