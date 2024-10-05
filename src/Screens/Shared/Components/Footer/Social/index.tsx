import { CSSProperties } from "react"
import Images from "../../../Images"
import "./index.css"

const LIST: ISocialParams[] = [
    {
        image: Images.Social.Instagram,
        link: 'https://www.instagram.com/calorin_app/'
    },
    {
        image: Images.Social.Linkedin,
        link: 'https://www.linkedin.com/company/calorin'
    },
    {
        image: Images.Social.Facebook,
        link: ''
    },
]

const Social = ({style}: ISocialProps) => {
    return (
        <div id="social" style={style}>
            {
                LIST.map(({ image, link }, index) => {
                    return (
                        <button
                            id="social-box"
                            key={index}
                            onClick={() => {
                                link && window.open(link)
                            }}
                        >
                            <img id="social-image" src={image} />
                        </button>
                    )
                })
            }
        </div>
    )
}

interface ISocialParams {
    image: any
    link: string
}

interface ISocialProps {
    style?: CSSProperties
}

export default Social