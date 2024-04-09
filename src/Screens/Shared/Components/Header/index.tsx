import "./index.css"

function Header() {
    return (
        <div className="headerContainer">
            <div className="header-left">
                <img src="../../../../../logo.png" className="header-logo" />
                <h1 className="header-title">Calorin</h1>
            </div>
            <div className="headerScreens">
                <div>Hakkımızda</div>
                <div>İletişim</div>
            </div>
        </div>
    )
}

export default Header