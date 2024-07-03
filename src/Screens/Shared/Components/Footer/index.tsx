import Pages, { IPageListParam } from "./Pages"
import Social from "./Social"
import "./style.css"

const Footer = () => {
    return (
        <div id="footer">
            <Pages list={PAGE_LIST}/>
            <Social />
            <p id="copyright">© 2024 Calorin</p>
        </div>
    )
}

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
        onClick: () => { }
    },
]

export default Footer