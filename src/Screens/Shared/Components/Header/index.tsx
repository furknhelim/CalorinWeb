// import Pages, { IPageListParam } from "./Pages"
import { useLocation } from "react-router-dom"
import Pages, { IPageListParam } from "./Pages"
import "./style.css"
import { useEffect } from "react"

const PAGE_LIST: IPageListParam[] = [
    {
        title: 'Ana Sayfa',
        path: '/',
        onClick: (navigate) => { navigate('/') },
    },
    {
        title: 'Hakkımızda',
        path: '/about',
        onClick: (navigate) => { navigate('/about') },

    },
    {
        title: 'İletişim',
        // path: '/contact',
        onClick: () => {  },

    },
    {
        title: 'Premium',
        hasContainer: true,
        onClick: () => { },
    },
]


function Header() {

    const location = useLocation()
    const currentPath = location.pathname

    useEffect(() => {
        window.scrollTo(0, 0); // Sayfanın en üstüne kaydırır
      }, [location]);

    return (
        <div id="header-container">
            <button id="logo-button">
                <img src="logo.png" id="logo-image" />
                <div style={{ display: "flex" }}>
                    <p id="logo-title">Calorin</p>
                </div>
            </button>
            <Pages list={PAGE_LIST} activePath={currentPath} />
        </div>
    )
}

export default Header