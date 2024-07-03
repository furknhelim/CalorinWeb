
function Pages({ list }: IPageProps) {
    return (
        <div id="header-pages">
            {
                list.map(({ title, onClick, isSelected, hasContainer }, index) => {
                    const _style: React.CSSProperties = {
                        marginLeft: index === 0 ? 0 : 48,
                        fontWeight: isSelected ? 600 : 500
                    }
                    if (!hasContainer) {
                        return (
                            <button
                                id="header-page-button"
                                style={_style}
                                key={index}
                                onClick={onClick}
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
}

export interface IPageListParam {
    isSelected?: boolean
    hasContainer?: boolean
    onClick: () => void
    title: string
}

export default Pages