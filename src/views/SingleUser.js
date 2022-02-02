import { useParams } from "react-router-dom"
import { Container } from "react-bootstrap"
import { PageTitle } from "../components/common/PageTitle"
import { FormUser } from "../components/users/FormUser"

export const SingleUser = () => {
    const params = useParams()

    return(
        <Container fluid className="p-2 p-md-5">
            <PageTitle title={params.userId ? 'Edit user' : 'New user'} />
            <FormUser />
        </Container>
    )
}
