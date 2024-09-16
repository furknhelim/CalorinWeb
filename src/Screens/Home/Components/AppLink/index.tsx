import { useTranslation } from 'react-i18next'
import Images from '../../Images'
import './index.css'

const AppLink = () => {

    const { t } = useTranslation()

    return (
        <div id='appLink-container' style={{ flexDirection: "row-reverse" }}>
            <img src={Images.AppContent} id='appLink-image' style={{ marginRight: 0, marginLeft: 150 }} />
            <div>
                <h1 className='header-title'><span className='header-title-dif'>{t("page.home.appLink.title.start")}</span>{t("page.home.appLink.title.end")}</h1>
                <p id='header-desc-20'>{t("page.home.appLink.description")}</p>
                <div id='appLink-links'>
                    <img src={Images.GooglePlay} id='appLink-linkImage' style={{ marginRight: 5 }} />
                    <img src={Images.AppStore} id='appLink-linkImage' />
                </div>
            </div>
        </div>
    )
}

export default AppLink