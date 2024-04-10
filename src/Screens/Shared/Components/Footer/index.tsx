import Images from "../../Images"
import Pages, { IPageListParam } from "../Header/Pages"
import "./style.css"

function Footer() {
    return (
        <div className="footer-container">
            <Pages
                list={PAGE_LIST}
            />
            <div className="footer-links-container">
                {
                    LINK_LIST.map(({ icon, onClick }, index) => {
                        const style: React.CSSProperties = { marginLeft: index === 0 ? 0 : 35 }
                        return (
                            <button onClick={onClick} style={style}>
                                <img src={icon} className="footer-link-icon"></img>
                            </button>
                        )
                    })
                }
            </div>
            <p className="footer-copyright">© 2024 Calorin </p>
        </div>
    )
}

const PAGE_LIST: IPageListParam[] = [
    {
        title: 'Premium',
        style: {
            color: '#FEA013',
            fontWeight: "600",
            textShadow: "1px 4px 4px rgba(0, 0, 0, .25)"
        },
        onClick: () => { }
    },
    {
        title: 'Hakkımızda',
        style: {
            color: '#828282'
        },
        onClick: () => { }
    },
    {
        title: 'İletişim',
        style: {
            color: '#828282'
        },
        onClick: () => { }
    },
]

const LINK_LIST: ILinkListParam[] = [
    {
        icon: Images.Facebook,
        onClick: () => { }
    },
    {
        icon: Images.Instagram,
        onClick: () => { window.open('https://www.instagram.com/calorin_app/') }
    },
    {
        icon: Images.Linkedin,
        onClick: () => { window.open('https://www.linkedin.com/company/calorin') }
    },
]

interface ILinkListParam {
    icon: any
    onClick: () => void
}

export default Footer