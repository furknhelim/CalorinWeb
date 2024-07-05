import './Key.css'

const Key = ({ icon, title, desc }: IKeyProps) => {

    return (
        <div id='goldenKey-container'>
            <div id='goldenKey-box'>
                <img src={icon} id='goldenKey-image' />
                <h4 id='goldenKey-title'>{title}</h4>
            </div>
            <p id='goldenKey-desc'>{desc}</p>
        </div>
    )
}

interface IKeyProps {
    icon: any
    title: string
    desc: string
}

export default Key