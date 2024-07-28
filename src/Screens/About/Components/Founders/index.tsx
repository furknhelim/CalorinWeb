import Images from '../../Images'
import Founder from './Founder'
import './index.css'

const Founders = () => {
    return (
        <div id='founders-container'>
            <h1 id='founders-title'>Takımımız</h1>
            <div id='goldenKeys-container' style={{ width: '100%', marginTop: 0, height: 590 }}>
                <div id='goldenKeys-list' style={{ marginTop: 0 }}>
                    <Founder
                        name='Umut POLAT'
                        image={Images.Founders.Umut}
                        title='CEO & Co-Founder'
                        linkedin='https://linkedin.com/in/umut-polat-5499841b0'
                    />
                    <Founder
                        name='Sena DAĞLI'
                        image={Images.Founders.Sena}
                        title='CSO & Co-Founder'
                        linkedin='https://linkedin.com/in/senadagli'
                    />
                    <Founder
                        name='Furkan Helim KARA'
                        image={Images.Founders.Furkan}
                        title='CTO & Co-Founder'
                        linkedin='https://linkedin.com/in/furkan-helim-kara'
                    />
                </div>
            </div>
        </div>
    )
}

export default Founders