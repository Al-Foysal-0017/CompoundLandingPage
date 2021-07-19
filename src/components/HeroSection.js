import React from 'react'
import Video from '../Videos/Galaxy5mb.mp4'
const HeroSection = () => {
    return (
        <div className="HeroContainer rounded-b-3xl"  id="home">
            <div className="HeroBg">
                <video autoPlay loop muted>
                    <source src={Video} type='video/mp4'/>
                </video>
            </div>

            <div className="HeroContent">
            <div className="text-primary text-center text-3xl md:text-7xl lg:text-8xl font-bold">
                <div>Decentralized Exchange</div>
                <div>& Trading Protocol</div>
                {/* <div className="">with Yield Farms</div> */}
            </div>
            <div className="mt-3 md:mt-6 lg:mt-12 text-center text-white text-xs md:text-xl lg:text-2xl max-w-xs md:max-w-2xl lg:max-w-3xl">
            Providing liquidity and profit opportunities for thousands of users and hundreds of DeFi applications.
            </div>

            <div className="mt-7">
            <div className="grid grid-flow-col grid-col-2 grid-rows-2 md:grid-col-4 md:grid-rows-1 gap-2">
                <div className="animate-pulse border-2 lg:border-4 rounded-lg text-sm md:text-base lg:text-xl font-bold lg:font-extrabold px-2 lg:px-4 py-1 mr-4 text-secondary hover:bg-white cursor-pointer">
                    Use DField
                </div>
                <div className="animate-pulse border-2 lg:border-4 rounded-lg text-sm md:text-base lg:text-xl font-bold lg:font-extrabold px-2 lg:px-4 py-1 mr-4 text-secondary hover:bg-white cursor-pointer">
                    Yeild Firms
                </div>
                <div className="animate-pulse border-2 lg:border-4 rounded-lg text-sm md:text-base lg:text-xl font-bold lg:font-extrabold px-2 lg:px-4 py-1 mr-4 text-secondary hover:bg-white cursor-pointer">
                    Pools
                </div>
                <div className="animate-pulse border-2 lg:border-4 rounded-lg text-sm md:text-base lg:text-xl font-bold lg:font-extrabold px-2 lg:px-4 py-1 mr-4 text-secondary hover:bg-white cursor-pointer">
                    Docs
                </div>
            </div>
            </div>
            
            <div className="HeroBtnWrapper"></div>
            </div>
        </div>
    )
}

export default HeroSection
