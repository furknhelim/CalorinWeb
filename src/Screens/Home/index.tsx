import { AppLink, Banner, GoldenKeys } from './Components'
import AppDetails from './Components/AppDetails'
import './style.css'

function HomeScreen() {

    return (
        <>
            <Banner />
            <GoldenKeys />
            <AppDetails />
            <AppLink />
        </>
    )
}

export default HomeScreen
