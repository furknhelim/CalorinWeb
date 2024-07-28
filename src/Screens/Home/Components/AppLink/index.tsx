import Images from '../../Images'
import './index.css'

const AppLink = () => {
    return (
        <div id='appLink-container' style={{ flexDirection: "row-reverse" }}>
            <img src={Images.AppContent} id='appLink-image' style={{ marginRight: 0, marginLeft: 150 }} />
            <div>
                <h1 className='header-title'><span className='header-title-dif'>Kişiye Özel</span> Plan</h1>
                <p id='header-desc-20'>Calorin’in sana sunduğu kişisel plan sayesinde gelişimini takip et, plana sadık kal ve hedefe ulaş!</p>
                <div id='appLink-links'>
                    <img src={Images.GooglePlay} id='appLink-linkImage' style={{ marginRight: 5 }} />
                    <img src={Images.AppStore} id='appLink-linkImage' />
                </div>
            </div>
        </div>
    )
}

export default AppLink