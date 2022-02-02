import { Button, Col, Container, ListGroup, Row } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { SingleUserInfo } from './SingleUserInfo'

export const UsersList = () => {
    const state = useSelector(state=>state.state)
    const navigate = useNavigate()

    // Redirect to /user/new
    const newUser = () => {
        navigate('user/new')
    }

    return (
        <Container className="border border-secondary rounded p-2">
            <Row className='my-3'>
                <Col>
                    <h2 className='text-white'>Users List</h2>
                </Col>
                <Col className='d-flex justify-content-end'>
                    <Button variant='primary' onClick={newUser}>Add User</Button>
                </Col>  
            </Row>
            <ListGroup>
                <SingleUserInfo header />
                {state.users.length>0 
                    ?state.users.map(user=>(
                        <SingleUserInfo key={user.id} {...user} />))
                    :<ListGroup.Item>
                        <Row className='text-center py-2 py-md-4'>
                            <Col>There are no users</Col>
                        </Row>
                    </ListGroup.Item>
                }
            </ListGroup>
        </Container>
    )
}
