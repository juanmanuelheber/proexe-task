import { Button, Col, Container, Row } from "react-bootstrap"
import { useNavigate } from "react-router-dom"

export const NotFound = () => {
    const navigate = useNavigate()
    return(
        <Container className="centrado">
            <Row>
                <Col xs={12} className="my-3">
                    <h1 className="text-white text-center">Something went wrong</h1>
                </Col>
                <Col xs={12} className="my-3">
                    <h3 className="text-white text-center">It seems that the page doesn't exists, please go back home</h3>
                </Col>
                <Col xs={12} className="my-3 centrado">
                    <Button onClick={()=>navigate("/")}>Go back</Button>
                </Col>
            </Row>
        </Container>
    )
}
