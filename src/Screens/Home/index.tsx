import { Footer, Header } from '../Shared/Components'
import { AppLink, Banner, GoldenKeys } from './Components'
import './style.css'

function HomeScreen() {
    return (
        <div className="container">
            <Header />
            <Banner />
            <GoldenKeys />
            <AppLink />
            <Footer />
        </div>
    )
}

export default HomeScreen
