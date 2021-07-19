import React from 'react'
import {useLocation} from 'react-router-dom'
import { Link } from 'react-router-dom'

const Dropdown = ({toggle, isOpen}) => {
    const {pathname} = useLocation();
    return (
        <div className={isOpen?"flex flex-col justify-center absolute w-full z-50 border-b-4 rounded-b-3xl border-gray":"hidden"}>
            <div className="p-3 w-full text-center bg-black text-white cursor-pointer" onClick={toggle}>
                <div className={pathname === "/" ? "py-1 px-3 mr-2 rounded-lg bg-primary text-sm font-medium cursor-pointer":"py-1 mr-2 px-3  rounded-lg text-sm font-medium cursor-pointer"}>
                    <Link to="/">Home</Link>
                </div>
            </div>
            <div className="p-3 w-full text-center bg-black text-white cursor-pointer" onClick={toggle}>
                <div className={pathname === "/markets" ? "py-1 px-3 mr-2 rounded-lg bg-primary text-sm font-medium cursor-pointer":"py-1 mr-2  rounded-lg px-3 text-sm font-medium cursor-pointer"}>
                    <Link to="/markets">Markets</Link>
                </div>
            </div>
            <div className="p-3 w-full text-center bg-black text-white cursor-pointer" onClick={toggle}>
                <div className={pathname === "/govergance" ?  "py-1 mr-2 px-3 rounded-lg bg-primary text-sm font-medium cursor-pointer":"py-1  mr-2 rounded-lg px-3 text-sm font-medium cursor-pointer"}>
                    <Link to="/govergance">Govergance</Link>
                </div>
            </div>
            <div className="p-3 w-full text-center bg-black text-white cursor-pointer" onClick={toggle}>
                <div className={pathname === "/community" ?  "py-1 px-3 mr-2 rounded-lg bg-primary text-sm font-medium cursor-pointer":"py-1 px-3 mr-2  rounded-lg text-sm font-medium cursor-pointer"}>
                    <Link to="/community">Community</Link>
                </div>
            </div>
            <div className="p-3 w-full text-center bg-black text-white cursor-pointer pb-10" onClick={toggle}>
                {
                  pathname==="/app/swap" || pathname==="/app/pool" || pathname==="/app/bridge"? 
                  <div className="px-2 mx-32 text-base font-medium cursor-pointer bg-black border-2 border-primary hover:bg-primary rounded-md pt-1 pb-1 pr-3 pl-3 font-bold">
                  Connect Wallet
                  </div>
                  :
                  
                  <div className="px-2 mx-32 text-base font-medium cursor-pointer bg-black border-2 border-primary hover:bg-primary animate-bounce rounded-md pt-1 pb-1 pr-3 pl-3 font-bold">
                  <Link to="/app/swap">Launch App</Link>
                  </div>
                }
            </div>
        </div>
    )
}

export default Dropdown
