import { Button } from "react-bootstrap"
import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { types } from "../../redux/types"

export const BtnEdit = ({id}) => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    // Load the user ID to Redux and redirects to Form
    const handleEdit = () => {
        dispatch({
            type: types.CURRENT_USER,
            payload: {currentUserId: id}
        })
        navigate(`/user/${id}`)
    }

    return (
        <Button variant="warning" size="sm" className="text-dark" onClick={handleEdit}>Edit</Button>
    )
}
