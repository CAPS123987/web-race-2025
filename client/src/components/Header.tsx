
import { Outlet } from "react-router-dom"

const Header: React.FC = () => {
    return (
        <>
        <header>
            <h1 className="text-red-500 font-semibold">Header</h1>
        </header>
        <Outlet />
        </>
    )
}

export default Header