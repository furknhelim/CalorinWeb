import Images from '../../Images'
import './index.css'

const AppLink = () => {
    return (
        <div id='appLink-container'>
            <img src={Images.App} id='appLink-image' />
            <div>
                <h1 className='header-title'><span className='header-title-dif'>En hızlı</span> yöntem</h1>
                <p id='header-desc'>Yemeğini hazırladıktan sonra tek yapman gereken fotoğrafını çekmek. Saniyeler içerisinde tüm besin değerleri hesabına işlenmiş olacak.</p>
                <div id='appLink-links'>
                    <img src={Images.GooglePlay} id='appLink-linkImage' style={{ marginRight: 5 }} />
                    <img src={Images.AppStore} id='appLink-linkImage' />
                </div>
            </div>
        </div>
    )
}

export default AppLink