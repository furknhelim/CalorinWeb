import { Footer, Header } from '../Shared/Components'
import './style.css'
import {useEffect} from "react"

function HomeScreen() {
    useEffect(() => {
        fetch("https://sozluk.gov.tr/gts?ara=kalem").then((res) => console.log(res))
    }, [])
    return (
        <div className="container">
            <Header />
            <Footer />
        </div>
    )
}

export default HomeScreen
