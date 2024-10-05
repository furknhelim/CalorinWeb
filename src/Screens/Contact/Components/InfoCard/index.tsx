import { useTranslation } from "react-i18next"
import Social from "../../../Shared/Components/Footer/Social"
import Images from "../../Images"
import "./index.css"
import ContactInput from "./Input"
import { useCallback, useRef } from "react"

function InfoCard() {

    const { t } = useTranslation()

    const values = useRef<IValuesParams>({ email: '', firstName: '', lastName: '', message: '', phone: '' })

    const onSubmit = useCallback(async () => {
        if (Object.keys(values.current).findIndex((value) => !values.current[value as keyof IValuesParams]) === -1) {

            const formData = new FormData(event.target);

            formData.append("access_key", "6075e7d8-2f5c-4aed-b8a9-50fb11efb263");

            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });

            const data = await response.json();

            if (data.success) {
                setResult("Form Submitted Successfully");
                event.target.reset();
            } else {
                console.log("Error", data);
                setResult(data.message);
            }

        } else {
            alert("Eksik doldurdunuz.")
        }
    }, [])

    return (
        <div id="infoCard-container">
            <div id="infoCard-left-container">
                <h2 id="infoCard-left-title">{t("page.contact.form.title")}</h2>
                <div id="infoCard-left-contacts">
                    <div id="infoCard-left-item-title-container" style={{ marginBottom: 45 }}>
                        <img id="infoCard-left-item-image" src={Images.Email} />
                        <p id="infoCard-left-item-title-main">{t("page.contact.form.email")}</p>
                    </div>
                    <div id="infoCard-left-item-container">
                        <div id="infoCard-left-item-title-container">
                            <img id="infoCard-left-item-image" src={Images.Location} />
                            <p id="infoCard-left-item-title-main">{t("page.contact.form.address.title")}</p>
                        </div>
                        <p id="infoCard-left-item-title-desc">{t("page.contact.form.address.detail")}</p>
                    </div>
                </div>
                <div id="infoCard-left-social">
                    <Social style={{ margin: 0 }} />
                </div>
            </div>
            <div id="infoCard-right-container">
                <div id="infoCard-right-content">
                    <div id="infoCard-right-inputs-row">
                        <ContactInput
                            title={t("page.contact.form.inputs.firstName.title")}
                            placeholder={t("page.contact.form.inputs.firstName.holder")}
                            style={{ marginRight: 40 }}
                            onChange={(text) => { values.current.firstName = text }}
                        />
                        <ContactInput
                            title={t("page.contact.form.inputs.lastName.title")}
                            placeholder={t("page.contact.form.inputs.lastName.holder")}
                            onChange={(text) => { values.current.lastName = text }}
                        />
                    </div>
                    <div id="infoCard-right-inputs-row" style={{ marginTop: 45 }}>
                        <ContactInput
                            title={t("page.contact.form.inputs.email.title")}
                            placeholder={t("page.contact.form.inputs.email.holder")}
                            style={{ marginRight: 40 }}
                            onChange={(text) => { values.current.email = text }}
                        />
                        <ContactInput
                            title={t("page.contact.form.inputs.phone.title")}
                            placeholder={t("page.contact.form.inputs.phone.holder")}
                            onChange={(text) => { values.current.phone = text }}
                        />
                    </div>
                    <ContactInput
                        title={t("page.contact.form.inputs.message.title")}
                        placeholder={t("page.contact.form.inputs.message.holder")}
                        style={{ marginTop: 45 }}
                        onChange={(text) => { values.current.message = text }}
                    />
                    <button id="infoCard-right-button" style={{ alignSelf: "flex-end" }} onClick={onSubmit}>
                        {t("page.contact.form.submitButton")}
                    </button>
                </div>
            </div>
        </div>
    )
}

interface IValuesParams {
    firstName: string
    lastName: string
    email: string
    phone: string
    message: string
}

export default InfoCard