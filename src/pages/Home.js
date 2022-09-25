import MailList from '../component/MailList'
import Featured from '../component/Featured'
import FeaturedProperties from '../component/FeaturedProperties'
import Header from '../component/Header'
import Navbar from '../component/Navbar'
import PropertyList from '../component/PropertyList'
import Footer from '../component/Footer'

const Home = () => {
    return (
        <div>
            <Navbar />
            <Header />
            <div className="homeContainer">
                <Featured />
                <h1 className="homeTitle">Browse by property type</h1>
                <PropertyList />
                <h1 className="homeTitle">Homes guests love</h1>
                <FeaturedProperties />
                <MailList />
                <Footer />
            </div>
        </div>
    )
}

export default Home