import React from 'react'
import { Link } from 'react-router-dom'
import { FaTractor } from 'react-icons/fa';
import {useLocation} from 'react-router-dom'

const Navbar = ({toggle}) => {
  const {pathname} = useLocation();
    return (
        <>
         <div className="grid bg-black text-white grid-cols-12 gap-1 h-16 shadow-md">
          
          <div className="col-start-1 col-end-5 md:col-start-1 md:col-end-4  flex justify-center items-center">
            <div className="text-2xl font-bold flex cursor-pointer">
              <FaTractor className="text-primary" style={{height:"35px", width:"35px", marginRight:"7px", }}/>
              <Link to="/" >DField</Link>
            </div>
          </div>   
          
          <div className=" col-start-5 col-end-5 md:col-start-4 md:col-end-10  flex justify-center items-center">
              <div className="flex invisible md:visible ">
                  <div className={pathname === "/" ? "py-1 px-3 mr-2 rounded-lg bg-primary text-sm font-medium cursor-pointer":"py-1 mr-2 px-3 bg-gray rounded-lg text-sm font-medium cursor-pointer"}>
                    <Link to="/">Home</Link>
                  </div>
                  {/* <div className={pathname === "/app" ?"py-1 px-3 rounded-lg bg-primary text-sm font-medium cursor-pointer":"py-1 bg-gray rounded-lg px-3 text-sm font-medium cursor-pointer"}>
                    <Link to="/app">App</Link>
                  </div> */}
                  <div className={pathname === "/markets" ? "py-1 px-3 mr-2 rounded-lg bg-primary text-sm font-medium cursor-pointer":"py-1 mr-2 bg-gray rounded-lg px-3 text-sm font-medium cursor-pointer"}>
                    <Link to="/markets">Markets</Link>
                  </div>
                  <div className={pathname === "/govergance" ?  "py-1 mr-2 px-3 rounded-lg bg-primary text-sm font-medium cursor-pointer":"py-1 bg-gray mr-2 rounded-lg px-3 text-sm font-medium cursor-pointer"}>
                    <Link to="/govergance">Govergance</Link>
                  </div>
                  <div className={pathname === "/community" ?  "py-1 px-3 mr-2 rounded-lg bg-primary text-sm font-medium cursor-pointer":"py-1 px-3 mr-2 bg-gray rounded-lg text-sm font-medium cursor-pointer"}>
                    <Link to="/community">Community</Link>
                  </div>
              </div>
          </div>   
          
          <div className="col-start-6 col-end-13 md:col-start-10 md:col-end-13 flex justify-end md:justify-center items-center">
                <div className="hidden md:flex">
                {
                  pathname==="/app/swap" || pathname==="/app/pool" || pathname==="/app/bridge"? 
                  <div className="px-2 text-base font-medium cursor-pointer bg-black border-2 border-primary hover:bg-primary rounded-md pt-1 pb-1 pr-3 pl-3 font-bold">
                  Connect Wallet
                  </div>
                  :
                  <Link to="/app/swap">
                  <div className="px-2 text-base font-medium cursor-pointer bg-black border-2 border-primary hover:bg-primary animate-bounce rounded-md pt-1 pb-1 pr-3 pl-3 font-bold">
                  Launch App
                  </div>
                  </Link>
                }
                </div>
                <svg onClick={toggle} className="cursor-pointer w-6 h-6 flex items-end md:hidden mr-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
          </div>   
        
        </div> 
        </>
    )
}

export default Navbar
