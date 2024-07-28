import Images from '../../Images'

const AppDetails = () => {
    return (
        <div id='appLink-container'>
            <img src={Images.AppDetails} id='appLink-image' />
            <div>
                <h1 className='header-title'><span className='header-title-dif'>En Hızlı</span> Yöntem</h1>
                <p id='header-desc-20'>Tek yapman gereken öğününün fotoğrafını çekmek. Calorin sana saniyeler içerisinde tüm besin değerlerini gösterecek.</p>
            </div>
        </div>
    )
}

export default AppDetails