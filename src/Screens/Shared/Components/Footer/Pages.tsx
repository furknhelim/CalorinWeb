import { NavigateFunction, useNavigate } from "react-router-dom"

function Pages({ list, activePath }: IPageProps) {

    const navigate = useNavigate()

    return (
        <div id="footer-pages">
            {
                list.map(({ title, onClick, path }, index) => {
                    const isSelected = activePath !== undefined && activePath === path

                    const style: React.CSSProperties = {
                        marginLeft: index === 0 ? 0 : 25,
                        fontWeight: isSelected ? 500 : 400,
                        color: isSelected ? '#864AF9' : '#8A8A8A'
                    }

                    return (
                        <button
                            id="footer-page-button"
                            style={style}
                            key={index}
                            onClick={() => onClick(navigate)}
                        >{title}</button>
                    )
                })
            }
        </div>
    )
}

interface IPageProps {
    list: IPageListParam[]
    activePath?: string
}

export interface IPageListParam {
    onClick: (navigate: NavigateFunction) => void
    title: string
    path?: string
}

export default Pages
