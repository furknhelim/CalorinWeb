import Images from '../../Images'
import './index.css'
import Key from './Key'

const GoldenKeys = () => {
    return (
        <div id='goldenKeys-container'>
            <h1 id='goldenKeys-title'>3 Altın Anahtar</h1>
            <div id='goldenKeys-list'>
                <Key
                    icon={Images.GoldenKeys.Time}
                    title={'VAKİT'}
                    desc={'Kamera ile saniyeler içinde öğününü tanıt.'}
                />
                <Key
                    icon={Images.GoldenKeys.Energy}
                    title={'ENERJİ'}
                    desc={'Tüm besin değerlerin tek tıkla hesaplansın.'}
                />
                <Key
                    icon={Images.GoldenKeys.Motivation}
                    title={'MOTİVASYON'}
                    desc={'Kişisel planına sadık kal ve ivme kazan.'}
                />
            </div>
        </div>
    )
}

export default GoldenKeys