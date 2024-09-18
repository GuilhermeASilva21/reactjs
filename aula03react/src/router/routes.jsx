import { createBrowserRouter } from "react-router-dom"
import Home from "../pages/Home"
import Contato from "../pages/Contato"
import Generico from "../pages/Generico"
import Final from "../pages/Final"

const router = createBrowserRouter([
    {path: "/", element: <Home/>},
    {path: "/contato", element: <Contato/>},
    {path: "/generico", element: <Generico/>},
    {path: "/final", element: <Final/>},
])

export default router;