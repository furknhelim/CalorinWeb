import { useTranslation } from 'react-i18next'
import Images from '../../Images'
import './index.css'
import Key from './Key'

const GoldenKeys = () => {

    const { t } = useTranslation()

    return (
        <div id='goldenKeys-container'>
            <h1 id='goldenKeys-title'>{t("page.home.goldenKeys.title")}</h1>
            <div id='goldenKeys-list'>
                <Key
                    icon={Images.GoldenKeys.Time}
                    title={t("page.home.goldenKeys.time.title")}
                    desc={t("page.home.goldenKeys.time.description")}
                />
                <Key
                    icon={Images.GoldenKeys.Energy}
                    title={t("page.home.goldenKeys.energy.title")}
                    desc={t("page.home.goldenKeys.energy.description")}
                />
                <Key
                    icon={Images.GoldenKeys.Motivation}
                    title={t("page.home.goldenKeys.motivation.title")}
                    desc={t("page.home.goldenKeys.motivation.description")}
                />
            </div>
        </div>
    )
}

export default GoldenKeys