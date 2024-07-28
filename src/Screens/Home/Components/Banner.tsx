import Images from '../Images'
import './Banner.css'

function Banner() {
    return (
        <div id='banner-container'>
            <div>
                <h1 className='header-title'>Sağlıklı beslenmek için <span className='header-title-dif'>en kolay</span> yol</h1>
                <p id='header-desc'>Calorin’in yapay zeka destekli asistanı ve yeni görüntü teknolojisi sayesinde artık kalori hesabı yapmak daha kolay!</p>
            </div>
            <img src={Images.Banner} id='banner-image'/>
        </div>
    )
}

export default Banner