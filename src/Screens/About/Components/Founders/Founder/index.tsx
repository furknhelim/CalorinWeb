import Images from '../../../Images'
import './index.css'

const Founder = ({ image, linkedin, name, title }: IFounderProps) => {
    return (
        <div id='founder-container'>
            <img id='founder-box' src={image} />
            <h2 id='founder-name'>{name}</h2>
            <h3 id='founder-title'>{title}</h3>
            <button
                id="social-box"
                style={{backgroundColor:'#828282'}}
                onClick={() => {
                    window.open(linkedin)
                }}
            >
                <img id="social-image" src={Images.Linkedin} />
            </button>
        </div>
    )
}

interface IFounderProps {
    image: any
    name: string
    title: string
    linkedin: string
}

export default Founder