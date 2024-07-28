import Images from "../../Images"

const desc = 'Calorin, öğün ve kalori takibinizi en pratik şekilde yapmanızı sağlayarak sizleri sağlıklı bir yaşam için motive eder. <br /><br /> Misyonumuz, sağlıklı beslenmeyi herkes için basit ve erişilebilir hale getirmek, geliştirdiğimiz yeni teknoloji sayesinde sürdürülebilir sağlıklı yaşamı tüm kullanıcılarımıza aşılamaktır.'

function Vision() {
    return (
        <div id='banner-container' style={{ flexDirection: "row-reverse" }}>
            <div style={{ marginLeft: 35 }} >
                <h1 className='header-title-dif'><span className='header-title'>Vizyon ve Misyon</span></h1>
                <p id='header-desc-20' style={{ color: '#6C6C6C', textAlign: "justify" }} dangerouslySetInnerHTML={{ __html: desc }}></p>
            </div>
            <img src={Images.Vision} id='banner-image' style={{ marginLeft: 0 }} />
        </div>
    )
}

export default Vision