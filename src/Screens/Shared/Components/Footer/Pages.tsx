function Pages({ list }: IPageProps) {
    return (
        <div id="footer-pages">
            {
                list.map(({ title, onClick, isSelected }, index) => {

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
                            onClick={onClick}
                        >{title}</button>
                    )
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
    onClick: () => void
    title: string
}

export default Pages
