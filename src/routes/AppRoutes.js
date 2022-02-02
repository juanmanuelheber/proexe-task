import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { SingleUser } from "../views/SingleUser"
import { Home } from "../views/Home"
import { NotFound } from "../components/common/NotFound"

export const AppRoutes = () => {
    return(
        <Router>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="user" element={<SingleUser />}>
                    <Route path=":userId" element={<SingleUser />} />
                    <Route path="new" element={<SingleUser />} />
                </Route>
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Router>
    )
}
