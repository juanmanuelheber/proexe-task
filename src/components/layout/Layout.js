import { useCallback, useEffect } from 'react'
import { Container } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { BASE_URL } from '../../consts/const'
import { useFetch } from '../../hooks/useFetch'
import { types } from '../../redux/types'
import { Loader } from '../common/Loader'

export const Layout = ({children}) => {
    const dispatch = useDispatch()
    const state = useSelector(state=>state.state)

    // Custom hook to retreive the data from the API
    const { data, loading } = useFetch(BASE_URL)
    
    // Dispatch data as a Callback so it doest´n affect the useEffect dependencies
    const dispatchData = useCallback((data) => {
            dispatch({
                type: types.SET_USERS,
                payload: {users: data}
            })
            dispatch({
                type: types.DATA_FETCHED,
                payload: {dataFetched: true}
            })
    }, [dispatch])

    // If Redux is empty and exists data from the custom hook, it send the data to Redux
    useEffect(() => {
        if (!state.dataFetched && data.length>0){
            // Filter the needed data
            const usersData = data.map(user=>{
                return {
                    id: user.id,
                    name: user.name,
                    username: user.username,
                    email: user.email,
                    city: user.address?.city
            }})
            dispatchData(usersData)
        }
    }, [state.users, data, state.dataFetched, dispatchData])
    
    return (
        <Container fluid className="layout d-flex justify-content-center">
            {loading 
            ?<Loader />
            :children}
        </Container>
    )
}
