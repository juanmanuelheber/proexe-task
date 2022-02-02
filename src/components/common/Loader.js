import { Container, Spinner } from "react-bootstrap"

export const Loader = () => {
    return (
        <Container className="centrado">
            <Spinner animation="border" variant="primary" role="status">
                <span className="visually-hidden">Loading...</span>
            </Spinner>
        </Container>
    )
}
