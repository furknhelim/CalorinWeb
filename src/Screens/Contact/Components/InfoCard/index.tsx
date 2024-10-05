import Social from "../../../Shared/Components/Footer/Social"
import Images from "../../Images"
import "./index.css"
import ContactInput from "./Input"

function InfoCard() {

    return (
        <div id="infoCard-container">
            <div id="infoCard-left-container">
                <h2 id="infoCard-left-title">İletişim Bilgilerimiz</h2>
                <div id="infoCard-left-contacts">
                    <div id="infoCard-left-item-title-container" style={{ marginBottom: 45 }}>
                        <img id="infoCard-left-item-image" src={Images.Email} />
                        <p id="infoCard-left-item-title-main">info@calorinapp.com</p>
                    </div>
                    <div id="infoCard-left-item-container">
                        <div id="infoCard-left-item-title-container">
                            <img id="infoCard-left-item-image" src={Images.Location} />
                            <p id="infoCard-left-item-title-main">Tech İstanbul</p>
                        </div>
                        <p id="infoCard-left-item-title-desc">Merkez, Abide-i Hürriyet Cd No: 211, 34381 Şişli/İstanbul</p>
                    </div>
                </div>
                <div id="infoCard-left-social">
                    <Social style={{ margin: 0 }} />
                </div>
            </div>
            <div id="infoCard-right-container">
                <div id="infoCard-right-content">
                    <div id="infoCard-right-inputs-row">
                        <ContactInput title={"Ad"} placeholder={"Bir isim giriniz."} style={{ marginRight: 40 }} />
                        <ContactInput title={"Soy Ad"} placeholder={"Bir soy isim giriniz."} />
                    </div>
                    <div id="infoCard-right-inputs-row" style={{ marginTop: 45 }}>
                        <ContactInput title={"Email"} placeholder={"user@gmail.com"} style={{ marginRight: 40 }} />
                        <ContactInput title={"İletişim Numarası"} placeholder={"+90 555 555 55 55"} />
                    </div>
                    <ContactInput title={"Mesaj"} placeholder={"İletmek istediğiniz metni giriniz."} style={{ marginTop: 45 }} />
                    <button id="infoCard-right-button" style={{alignSelf: "flex-end"}}>
                        Gönder
                    </button>
                </div>
            </div>
        </div>
    )
}

export default InfoCard