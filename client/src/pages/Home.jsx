import React from 'react'
import { Banner } from '../components/Home/Banner'
import { FeaturedProperties } from '../components/Home/FeaturedProperties'
import { ForSale } from '../components/Home/ForSale'


const Home = () => {
    return (
        <div className='max-w-screen bg-[#333]' >
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
        </div>
    

)
}

export default Home