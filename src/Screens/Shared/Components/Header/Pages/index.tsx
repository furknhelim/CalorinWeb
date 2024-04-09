

function Pages({ list }: IPageProps) {
    return (
        <div className="header-right">
            {
                list.map(({ title, onClick, style }, index) => (
                    <button className="page-title" style={style} key={index} onClick={onClick}>{title}</button>
                ))
            }
        </div>
    )
}

interface IPageProps {
    list: IPageListParams[]
}

export interface IPageListParams {
    style?: React.CSSProperties
    onClick: () => void
    title: string
}

export default Pages