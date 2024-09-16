import { NavigateFunction, useNavigate } from "react-router-dom"
import Images from "../../Images"
import { useTranslation } from "react-i18next"
import { useCallback } from "react"

function Pages({ list, activePath }: IPageProps) {

    const { i18n } = useTranslation()

    const navigate = useNavigate()

    const onLanguageClick = useCallback(() => {
        i18n.changeLanguage(i18n.language === "en" ? "tr" : "en")
    }, [])

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
            <button id="language-button" onClick={onLanguageClick}>
                <img src={i18n.language === "en" ? Images.Language.EN : Images.Language.TR} id="language-image" />
            </button>
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