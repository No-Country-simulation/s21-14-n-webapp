import React from 'react'
import { Banner } from '../components/Home/Banner'
import { ForSale } from '../components/Home/ForSale'
const FeaturedProperties = React.lazy(() => import('../components/Home/FeaturedProperties'));


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