// import Pages, { IPageListParam } from "./Pages"
import { useLocation } from "react-router-dom"
import Pages, { IPageListParam } from "./Pages"
import "./style.css"
import { useEffect, useMemo } from "react"
import { useTranslation } from "react-i18next"

function Header() {

    const { t } = useTranslation()

    const PAGE_LIST: IPageListParam[] = useMemo(() => [
        {
            title: t("header.page.home"),
            path: '/',
            onClick: (navigate) => { navigate('/') },
        },
        {
            title: t("header.page.about"),
            path: '/about',
            onClick: (navigate) => { navigate('/about') },

        },
        {
            title: t("header.page.contact"),
            path: '/contact',
            onClick: (navigate) => { navigate('/contact') },

        },
        {
            title: t("header.premium"),
            hasContainer: true,
            onClick: () => { },
        },
    ], [t])

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