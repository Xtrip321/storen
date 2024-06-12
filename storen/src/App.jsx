import React from 'react'
import { Footer } from './components/Footer'
import Header from './components/Header'
import './styles/main.css'

const App = () => {
    return (
        <>
            <Header />
            <main>
                <div className="banner-container">
                    <div className="banner-adjuster">
                        <img src="/src/assets/imgs/StorenBanner.png" alt="storenBanner" />
                        <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
                            width="647.000000pt" height="183.000000pt" viewBox="0 0 647.000000 183.000000"
                            preserveAspectRatio="xMidYMid meet">

                            <g transform="translate(0.000000,183.000000) scale(0.100000,-0.100000)"
                                fill="#000000" stroke="none">
                            </g>
                        </svg>
                    </div>
                </div>
            </main>
            <Router>
                <div>
                    <Header />
                    <Navigation />
                    <Route exact path="/" component={Home} />
                    <Route path="/contact" component={Contact} />
                    <Route path="/catalog" component={Catalog} />
                    <Footer />
                </div>
            </Router>
            <Footer />
        </>
    )
}

export default App;
