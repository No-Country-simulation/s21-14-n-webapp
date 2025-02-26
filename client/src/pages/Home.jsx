import React from 'react'
import { Banner } from '../components/home/Banner'
import { ForSale } from '../components/home/ForSale'
const FeaturedProperties = React.lazy(() => import('../components/home/FeaturedProperties'));


const Home = () => {
    return (
        <div className='max-w-screen bg-primary' >
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