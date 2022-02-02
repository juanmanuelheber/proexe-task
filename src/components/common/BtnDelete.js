import { Button } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { types } from "../../redux/types"
import { useModal } from "../../hooks/useModal"
import { filterArrayById } from "../../utils/functions"
import { ModalConfirm } from "./ModalConfirm"

export const BtnDelete = ({id}) => {
    const state = useSelector(state=>state.state)
    const dispatch = useDispatch()
    const { visible,toggle } = useModal()

    // Delete the user from Redux
    const handleDelete = () => {
        dispatch({
            type: types.SET_USERS,
            payload: {users: filterArrayById(state.users,id)}
        })
    }

    return (
        <>
            <Button variant="danger" size="sm" className="text-dark" onClick={toggle}>Delete</Button>
            <ModalConfirm visible={visible} hide={toggle} handleDelete={handleDelete} />
        </>
    )
}
