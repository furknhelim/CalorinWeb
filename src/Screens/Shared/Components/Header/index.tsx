import Pages, { IPageListParam } from "./Pages"
import "./style.css"

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
        onClick: () => { }
    },
    {
        title: 'İletişim',
        onClick: () => { }
    },
]


function Header() {
    return (
        <div className="header-container">
            <div className="header-content">
                <button className="header-logo-title">
                    <img src="logo.png" className="header-logo" />
                    <p className="header-title">Calorin</p>
                </button>
                <Pages
                    list={PAGE_LIST}
                />
            </div>
        </div>
    )
}

export default Header