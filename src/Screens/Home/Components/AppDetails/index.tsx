import { useTranslation } from 'react-i18next'
import Images from '../../Images'

const AppDetails = () => {

    const { t } = useTranslation()
    
    return (
        <div id='appLink-container'>
            <img src={Images.AppDetails} id='appLink-image' />
            <div>
                <h1 className='header-title'><span className='header-title-dif'>{t("page.home.appDetails.title.start")}</span>{t("page.home.appDetails.title.end")}</h1>
                <p id='header-desc-20'>{t("page.home.appDetails.description")}</p>
            </div>
        </div>
    )
}

export default AppDetails