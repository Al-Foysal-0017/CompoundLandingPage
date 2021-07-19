import React from 'react'
import LaunchAppTopBar from '../components/LaunchAppTopBar'
import { IoSettingsSharp } from 'react-icons/io5';
import { FaChevronDown } from 'react-icons/fa';
import { GiAnticlockwiseRotation } from 'react-icons/gi';

const App = () => {
    return (
        <div className="h-screen bg-black">
            <div>
                <LaunchAppTopBar/>
            </div>

            <div className="mt-16 text-white flex justify-center">
                <div className="bg-gray h-96 w-96 rounded-3xl">
                    <div className="grid grid-flow-col grid-col-1 grid-rows-4 gap-3 rounded-3xl">
                        <div className="px-2 border-b-2 border-black">
                            <div className="flex justify-between px-5 py-5">
                                <div className="">
                                    <div className="font-bold text-xl">Swap</div>
                                    <div>Trade tokens in an instant</div>
                                </div>
                                <div className="flex items-center">
                                    <IoSettingsSharp style={{height:"25px", width:"25px", marginRight:"10px", cursor:"pointer"}}/>
                                    <GiAnticlockwiseRotation style={{height:"25px", width:"25px", cursor:"pointer"}}/>
                                </div>
                            </div>
                        </div>
                        <div className="bg-black mx-3 rounded-2xl border-black">
                            <div className="flex justify-between px-5 py-5">
                                <div className="">
                                    <div className="text-md">From</div>
                                    <div>
                                        <input className="bg-black border-none focus:outline-none" placeholder="0.00"/>
                                    </div>
                                </div>
                                <div className="flex items-center">
                                    {/* <IoSettingsSharp style={{height:"25px", width:"25px", marginRight:"10px"}}/> */}
                                    <div className="mr-3 cursor-pointer">BNB</div>
                                    <FaChevronDown style={{cursor:"pointer"}}/>
                                </div>
                            </div>
                        </div>
                        <div className="bg-black mx-3 rounded-2xl border-black">
                            <div className="flex justify-between px-5 py-5">
                                <div className="">
                                    <div className="text-md">To</div>
                                    <div>
                                        <input className="bg-black border-none focus:outline-none" placeholder="0.00"/>
                                    </div>
                                </div>
                                <div className="flex items-center">
                                    {/* <IoSettingsSharp style={{height:"25px", width:"25px", marginRight:"10px"}}/> */}
                                    <div className="mr-3 cursor-pointer">Select a currency</div>
                                    <FaChevronDown style={{cursor:"pointer"}}/>
                                </div>
                            </div>
                        </div>
                        <div className="bg-black rounded-2xl mx-3 h-12 border-black bg-primary">
                            <div className="flex justify-center items-center h-full font-bold rounded-2xl hover:bg-white hover:text-black cursor-pointer">
                                Unlock Wallet
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default App
