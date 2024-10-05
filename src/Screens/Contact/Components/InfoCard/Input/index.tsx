import { CSSProperties } from "react"
import "./index.css"

const ContactInput = ({ style, placeholder, title, onChange }: IContactInputProps) => {
    return (
        <div id="contactInput-container" style={style}>
            <div id="contactInput-title">{title}</div>
            <input
                id="contactInput-input"
                placeholder={placeholder}
                onChange={({ target: { value } }) => { onChange(value) }}
            />
        </div>
    )
}

interface IContactInputProps {
    style?: CSSProperties
    title: string
    placeholder: string
    onChange: (text: string) => void
}

export default ContactInput