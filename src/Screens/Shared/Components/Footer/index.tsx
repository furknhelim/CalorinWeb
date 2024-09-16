import { useLocation } from "react-router-dom"
import Pages, { IPageListParam } from "./Pages"
import Social from "./Social"
import "./style.css"
import { useMemo } from "react"
import { useTranslation } from "react-i18next"

const Footer = () => {

    const location = useLocation()
    const currentPath = location.pathname

    const { t } = useTranslation()

    const PAGE_LIST: IPageListParam[] = useMemo(() => [
        {
            title: t("header.page.home"),
            onClick: (navigate) => { navigate('/') },
            path: '/',
        },
        {
            title: t("header.page.about"),
            onClick: (navigate) => { navigate('/about') },
            path: '/about',
        },
        {
            title: t("header.page.contact"),
            onClick: (navigate) => { navigate('/contact') },
            path: '/contact',
        },
        {
            title: t("header.premium"),
            onClick: () => { }
        },
    ], [t])

    return (
        <div id="footer">
            <Pages list={PAGE_LIST} activePath={currentPath} />
            <Social />
            <p id="copyright">© 2024 Calorin</p>
        </div>
    )
}



export default Footer