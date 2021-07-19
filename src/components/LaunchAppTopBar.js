import React from 'react'
import { Link } from 'react-router-dom'
import {useLocation} from 'react-router-dom'

const LaunchAppTopBar = () => {
    const {pathname} = useLocation();
    return (
        <>
            <div className="text-white flex justify-center pt-6">
            <Link to="/app/swap">
                <div className={pathname==="/app/swap"? "bg-primary py-8 px-6 text-md rounded-full font-bold mr-3":"bg-gray py-8 px-6 text-md rounded-full font-bold mr-3" }>
                    Swap
                </div>
            </Link>
            <Link to="/app/pool">
                <div className={pathname==="/app/pool"? "bg-primary py-8 px-6 text-md rounded-full font-bold mr-3":"bg-gray py-8 px-6 text-md rounded-full font-bold mr-3" }>
                    Pool
                </div>
            </Link>
            <Link to="/app/bridge">
                <div className={pathname==="/app/bridge"? "bg-primary py-8 px-5 text-md rounded-full font-bold mr-3":"bg-gray py-8 px-5 text-md rounded-full font-bold mr-3" }>
                    Bridge
                </div>
            </Link>
            </div>
        </>
    )
}

export default LaunchAppTopBar
