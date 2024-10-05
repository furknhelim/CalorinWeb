import { CSSProperties } from "react"
import "./index.css"

const ContactInput = ({ style, placeholder, title }: IContactInputProps) => {
    return (
        <div id="contactInput-container" style={style}>
            <div id="contactInput-title">{title}</div>
            <input
                id="contactInput-input"
                placeholder={placeholder}
            />
        </div>
    )
}

interface IContactInputProps {
    style?: CSSProperties
    title: string
    placeholder: string
}

export default ContactInput