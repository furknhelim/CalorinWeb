import { useLocation } from "react-router-dom"
import Pages, { IPageListParam } from "./Pages"
import Social from "./Social"
import "./style.css"

const Footer = () => {

    const location = useLocation()
    const currentPath = location.pathname

    return (
        <div id="footer">
            <Pages list={PAGE_LIST} activePath={currentPath} />
            <Social />
            <p id="copyright">© 2024 Calorin</p>
        </div>
    )
}

const PAGE_LIST: IPageListParam[] = [
    {
        title: 'Ana Sayfa',
        onClick: (navigate) => { navigate('/') },
        path: '/',
    },
    {
        title: 'Hakkımızda',
        onClick: (navigate) => { navigate('/about') },
        path: '/about',
    },
    {
        title: 'İletişim',
        onClick: () => { }
    },
    {
        title: 'Premium',
        onClick: () => { }
    },
]

export default Footer