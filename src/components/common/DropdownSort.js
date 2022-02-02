import { ButtonGroup, Dropdown, DropdownButton } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { types } from "../../redux/types"
import { sortArrayByValue } from "../../utils/functions"

export const DropdownSort = () => {
    const state = useSelector(state=>state.state)
    const dispatch = useDispatch()

    // Sort usernames by order
    const sort = (order) => {
        dispatch({
            type: types.SET_USERS,
            payload: {users: sortArrayByValue(state.users,order)}
        })
    }
    
    return(
        <DropdownButton as={ButtonGroup} size="sm" variant="outline-secondary" title="Sort" className="ms-2">
            <Dropdown.Item onClick={()=>sort("a-z")}>A-Z</Dropdown.Item>
            <Dropdown.Item onClick={()=>sort("z-a")}>Z-A</Dropdown.Item>
        </DropdownButton>
    )
}
