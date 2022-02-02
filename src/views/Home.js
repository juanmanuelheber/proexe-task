import { useCallback, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Container } from "react-bootstrap"
import { UsersList } from "../components/users/UsersList.js"
import { PageTitle } from "../components/common/PageTitle"
import { types } from "../redux/types.js"

export const Home = () => {
    const state = useSelector(state=>state.state)
    const dispatch = useDispatch()

     // Dispatch data as a Callback so it doest´n affect the useEffect dependencies
     const dispatchData = useCallback(() => {
        dispatch({
            type: types.CURRENT_USER,
            payload: {currentUserId: null}
        })
    }, [dispatch])

    // Refresh the currentUserId from Redux
    useEffect(() => {
        if (state.currentUserId){
            dispatchData()
        }
    }, [state.currentUserId, dispatchData])

    return(
        <Container fluid className="p-2 p-md-5">
            <PageTitle title="Dashboard" />
            <UsersList />
        </Container>
    )
}
