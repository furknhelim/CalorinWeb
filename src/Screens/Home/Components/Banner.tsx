import { useTranslation } from 'react-i18next'
import Images from '../Images'
import './Banner.css'

function Banner() {

    const { t } = useTranslation()

    return (
        <div id='banner-container'>
            <div>
                <h1 className='header-title'>{t('page.home.banner.title.start')}<span className='header-title-dif'>{t("page.home.banner.title.middle")}</span>{t("page.home.banner.title.end")}</h1>
                <p id='header-desc'>{t('page.home.banner.description')}</p>
            </div>
            <img src={Images.Banner} id='banner-image' />
        </div>
    )
}

export default Banner