import { useTranslation } from "react-i18next"
import Images from "../../Images"

function Vision() {

    const { t } = useTranslation()

    return (
        <div id='banner-container' style={{ flexDirection: "row-reverse" }}>
            <div style={{ marginLeft: 35 }} >
                <h1 className='header-title-dif'><span className='header-title'>{t("page.about.vision.title")}</span></h1>
                <p id='header-desc-20' style={{ color: '#6C6C6C', textAlign: "justify" }} dangerouslySetInnerHTML={{ __html: t("page.about.vision.description") }}></p>
            </div>
            <img src={Images.Vision} id='banner-image' style={{ marginLeft: 0 }} />
        </div>
    )
}

export default Vision