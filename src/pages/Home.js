import React from 'react'
import HeroBg from "../components/HeroSection"
import { FaLock, FaListAlt} from 'react-icons/fa';
import { GiFarmer, GiSprout } from 'react-icons/gi';
import CommunityMedia from '../components/CommunityMedia';

const Home = () => {
    return (
        <div>
        <HeroBg/>
   
        <div className="flex mt-20 mb-20 text-center items-center justify-center">
            <div className="grid grid-flow-col grid-col-2 grid-rows-2 md:grid-col-4 md:grid-rows-1 gap-3">
                <div className="flex flex-col justify-center w-full text-black items-center text-center shadow-2xl rounded-lg text-base md:text-lg lg:text-2xl font-bold px-2 lg:px-5 py-3 mr-4">
                    <div className="text-primary pb-5"><FaLock style={{width:"50px", height:"50px"}}/></div>
                    <div className="text-xl md:text-2xl lg:text-5xl">$53.3B+</div>
                    <div className="text-label">Total Value Locked</div>
                </div>
                <div className="flex flex-col justify-center w-full text-black items-center text-center shadow-2xl rounded-lg text-base md:text-lg lg:text-2xl font-bold px-2 lg:px-5 py-3 mr-4">
                    <div className="text-primary pb-5"><GiSprout style={{width:"50px", height:"50px"}}/></div>
                    <div className="text-xl md:text-2xl lg:text-5xl">1,076+</div>
                    <div className="text-label">Liquidity Providers</div>
                </div>
                <div className="flex flex-col justify-center w-full text-black items-center text-center shadow-2xl rounded-lg text-base md:text-lg lg:text-2xl font-bold px-2 lg:px-5 py-3 mr-4">
                    <div className="text-primary pb-5"><FaListAlt style={{width:"50px", height:"50px"}}/></div>
                    <div className="text-xl md:text-2xl lg:text-5xl">2,040+</div>
                    <div className="text-label">Pairs Listed</div>
                </div>
                <div className="flex flex-col justify-center w-full text-black items-center text-center shadow-2xl rounded-lg text-base md:text-lg lg:text-2xl font-bold px-2 lg:px-5 py-3 mr-4">
                    <div className="text-primary pb-5"><GiFarmer style={{width:"50px", height:"50px"}}/></div>
                    <div className="text-xl md:text-2xl lg:text-5xl">132+</div>
                    <div className="text-label">Yield Farms & Pools</div>
                </div>
            </div>
        </div>

        <div>
            <CommunityMedia/>
        </div>

        </div>
    )
}

export default Home
