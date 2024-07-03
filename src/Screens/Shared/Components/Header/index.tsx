// import Pages, { IPageListParam } from "./Pages"
import Pages, { IPageListParam } from "./Pages"
import "./style.css"

const PAGE_LIST: IPageListParam[] = [
    {
        title: 'Ana Sayfa',
        onClick: () => { },
        isSelected: true
    },
    {
        title: 'Hakkımızda',
        onClick: () => { }
    },
    {
        title: 'İletişim',
        onClick: () => { }
    },
    {
        title: 'Premium',
        onClick: () => { },
        hasContainer: true
    },
]


function Header() {
    return (
        <div id="header-container">
            <button id="logo-button">
                <img src="logo.png" id="logo-image" />
                <div style={{ display: "flex" }}>
                    <p id="logo-title">Calor<span id="logo-title-2">in</span></p>
                </div>
            </button>
            <Pages list={PAGE_LIST} />
        </div>
    )
}

export default Header