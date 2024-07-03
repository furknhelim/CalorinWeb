import { Footer, Header } from '../Shared/Components'
import { Banner } from './Components'
import './style.css'

function HomeScreen() {
    return (
        <div className="container">
            <Header />
            <Banner />
            <Footer />
        </div>
    )
}

export default HomeScreen
