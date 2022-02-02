import { Col, ListGroup, Row } from "react-bootstrap"
import { DropdownSort } from "../common/DropdownSort"
import { BtnDelete } from "../common/BtnDelete"
import { BtnEdit } from "../common/BtnEdit"

export const SingleUserInfo = ({header, id, name, username, email, city}) => {

    if (header) return (
        <ListGroup.Item className="p-0">
            <Row className='text-center py-2 py-md-4 m-0 bg-light'>
                <Col className="centrado" xs={1}>Id</Col>
                <Col className="centrado" xs={2}>Name</Col>
                <Col className="centrado" xs={2}>Username <DropdownSort /></Col>
                <Col className="centrado" xs={3}>Email</Col>
                <Col className="centrado" xs={2}>City</Col>
                <Col className="centrado" xs={1}>Edit</Col>
                <Col className="centrado" xs={1}>Delete</Col>
            </Row>
        </ListGroup.Item>
    )
    return (
        <ListGroup.Item className="p-0">
            <Row className='text-center py-2 py-md-4 m-0'>
                <Col className="centrado" xs={1}>{id}</Col>
                <Col className="centrado" xs={2}>{name}</Col>
                <Col className="centrado" xs={2}>{username}</Col>
                <Col className="centrado" xs={3}>{email}</Col>
                <Col className="centrado" xs={2}>{city}</Col>
                <Col className="centrado" xs={1}><BtnEdit id={id} /></Col>
                <Col className="centrado" xs={1}><BtnDelete id={id} /></Col>
            </Row>
        </ListGroup.Item>
    )
}
