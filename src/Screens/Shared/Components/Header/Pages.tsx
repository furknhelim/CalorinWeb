function Pages({ list }: IPageProps) {
    return (
        <div className="pages">
            {
                list.map(({ title, onClick, style }, index) => {
                    const _style: React.CSSProperties = { marginLeft: index === 0 ? 0 : 25 }
                    return (
                        <button className="page-title" style={{ ...style, ..._style }} key={index} onClick={onClick}>{title}</button>
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
    style?: React.CSSProperties
    onClick: () => void
    title: string
}

export default Pages