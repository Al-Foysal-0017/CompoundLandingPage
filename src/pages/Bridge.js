import React from 'react'
import LaunchAppTopBar from '../components/LaunchAppTopBar'

const Bridge = () => {
    return (
        <div className="h-screen bg-black">
            <div>
                <LaunchAppTopBar/>
            </div>

            <div className="pt-32 font-bold lg:text-9xl md:text-8xl text-5xl flex justify-center text-label">BRIDGE</div>
        </div>
    )
}

export default Bridge
