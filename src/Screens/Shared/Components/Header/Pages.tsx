import { NavigateFunction, useNavigate } from "react-router-dom"

function Pages({ list, activePath }: IPageProps) {

    const navigate = useNavigate()

    return (
        <div id="header-pages">
            {
                list.map(({ title, onClick, hasContainer, path }, index) => {
                    const isSelected = activePath !== undefined && activePath === path
                    const _style: React.CSSProperties = {
                        marginLeft: index === 0 ? 0 : 35,
                        fontWeight: isSelected ? 600 : 500
                    }
                    if (!hasContainer) {
                        return (
                            <button
                                id="header-page-button"
                                style={_style}
                                key={index}
                                onClick={() => onClick(navigate)}
                            >
                                <p>{title}</p>
                                {
                                    isSelected && (
                                        <div id="header-page-button-pointer" />
                                    )
                                }
                            </button>
                        )
                    } else {
                        return (
                            <button id="header-page-container-button" style={_style}>
                                <p>{title}</p>
                            </button>
                        )
                    }
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
    hasContainer?: boolean
    onClick: (navigate: NavigateFunction) => void
    title: string
    path?: string
}

export default Pages