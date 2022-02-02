import { useCallback, useEffect } from "react"
import { Button, Col, Container, FloatingLabel, Form, Row } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"
import { useFormik } from "formik"
import * as Yup from "yup"
import { types } from "../../redux/types"
import { findMaxId } from "../../utils/functions"
import { FormValidateMessage } from "../common/FormValidateMessage"

export const FormUser = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const state = useSelector(state=>state.state)
    const params = useParams()

    // Dispatch data as a Callback so it doest´n affect the useEffect dependencies
    const dispatchData = useCallback((id) => {
        dispatch({
            type: types.CURRENT_USER,
            payload: {currentUserId: (id)}
        })
    }, [dispatch])

    // Handle the app if the user enter directly to the url (/user/:userId), updating the currentUserId to Redux, to retreive the user info
    useEffect(() => {
        if (params.userId && !state.currentUserId){
            dispatchData(Number(params.userId))
        }
    }, [state.currentUserId, params.userId, dispatchData])

    // Redirect to Home
    const cancel = () => {
        navigate(`/`)
    }

    // If a param exists, set the user values to Formik. Otherwise, set the values empty
    const setInitialValues = () => {
        if (params.userId) {
            return state.users.filter(user=>user.id===state.currentUserId)[0]
        }
        return {
            id: findMaxId(state.users) + 1,
            name: "",
            username: "",
            email: "",
            city: ""
        }
    }

    // Validate the form fields
    const formik = useFormik({
        initialValues: setInitialValues(),
        validationSchema: Yup.object({
            name: Yup.string().required("Name is required"),
            email: Yup.string().email("Invalid email address").required("Email is required")
        }),
        // Update Redux with the updated user and redirects to Home
        onSubmit: (values) => {
            const newUser = [...state.users]
            const index = newUser.findIndex(user=>user.id===state.currentUserId)
            if (index >= 0) {
                newUser[index] = values // Update an existing user
            } else {
                newUser.push(values) // Create a new user
            }
            dispatch({
                type: types.SET_USERS,
                payload: {users: newUser}
            })
            navigate('/')
        }
    })

    return (
        <Container className="border border-secondary rounded p-5">
            <Form onSubmit={formik.handleSubmit}>
                <Row>
                    <Col xs={12} md={6} className="mb-3 pb-4 position-relative">
                        <FloatingLabel label="Name">
                            <Form.Control placeholder="Name" type="text" name="name" value={formik.values?.name} onBlur={formik.handleBlur} onChange={formik.handleChange} />
                        </FloatingLabel>
                        {formik.touched.name && formik.errors.name && <FormValidateMessage message={formik.errors.name} />}
                    </Col>
                    <Col xs={12} md={6} className="mb-3 pb-4 position-relative">
                        <FloatingLabel label="Username">
                            <Form.Control placeholder="Username" type="text" name="username" value={formik.values?.username} onBlur={formik.handleBlur} onChange={formik.handleChange} />
                        </FloatingLabel>
                    </Col>
                    <Col xs={12} md={6} className="mb-3 pb-4 position-relative">
                        <FloatingLabel label="Email">
                            <Form.Control placeholder="Email" type="email" name="email" value={formik.values?.email} onBlur={formik.handleBlur} onChange={formik.handleChange} />
                        </FloatingLabel>
                        {formik.touched.email && formik.errors.email && <FormValidateMessage message={formik.errors.email} />}
                    </Col>
                    <Col xs={12} md={6} className="mb-3 pb-4 position-relative">
                        <FloatingLabel label="City">
                            <Form.Control placeholder="City" type="text" name="city" value={formik.values?.city} onBlur={formik.handleBlur} onChange={formik.handleChange} />
                        </FloatingLabel>
                    </Col>
                    <Col xs={12} className="my-3 centrado">
                        <Button className="mx-2" variant="danger" onClick={cancel}>Cancel</Button>
                        <Button className="mx-2" variant="primary" type="submit">Submit</Button>
                    </Col>
                </Row>
            </Form>
        </Container>
    )
}
