import Pages, { IPageListParams } from "./Pages"
import "./style.css"

const PAGE_LIST: IPageListParams[] = [
    {
        title: 'Premium',
        style: {
            color: '#FEA013'
        },
        onClick: () => {console.log("selam")}
    },
    {
        title: 'Hakkımızda',
        onClick: () => {}
    },
    {
        title: 'İletişim',
        onClick: () => {}
    },
]

function Header() {
    return (
        <div className="header-container">
            <div className="header-left">
                <img src="../../../../logo.png" className="left-logo" />
                <p className="left-title">Calorin</p>
            </div>
            <Pages
                list={PAGE_LIST}
            />
        </div>
    )
}

export default Header