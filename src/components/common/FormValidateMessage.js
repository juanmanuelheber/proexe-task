import { Form } from "react-bootstrap"

export const FormValidateMessage = ({message}) => {
    return (
        <Form.Text className="text-danger position-absolute bottom-0 left-0">
            {message}
        </Form.Text>
    )
}
