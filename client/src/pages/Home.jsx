import React from 'react'
import { Banner } from '../components/Banner'
import { FeaturedProperties } from '../components/FeaturedProperties'
import { ForSale } from '../components/ForSale'

const Home = () => {
    return (
        < >
            <header>
                <Banner/>
            </header>
            <main>
                <div>
                    <FeaturedProperties/>
                </div>
                <div>
                    <ForSale/>
                </div>
            </main>
        </>
    

)
}

export default Home