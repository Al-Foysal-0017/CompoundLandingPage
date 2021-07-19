import React from 'react'
import {FaDiscord, FaTelegramPlane, FaTwitter } from 'react-icons/fa';

const CommunityMedia = () => {
    return (
        <>
            <div className="rounded-t-3xl flex flex-col pt-20 pb-20 text-center items-center bg-black justify-center">
            <div className="text-label text-4xl font-bold pb-3">Global Community</div>
            <div className="text-label pr-5 pl-5 pb-12">Learn more about DField, chat with the team, others in the community, and have your say in shaping the future.</div>
            <div className="grid grid-flow-col grid-col-1 grid-rows-3 md:grid-col-3 md:grid-rows-1 gap-3">
                <div className="flex flex-col justify-center w-full text-black items-center text-center shadow-2xl rounded-lg text-base md:text-lg lg:text-xl font-bold px-2 lg:px-5 py-3 mr-4">
                    <div className="text-white bg-primary p-6 rounded-full"><FaDiscord style={{width:"50px", height:"50px"}}/></div>
                    <div className="text-label mt-4">Discord</div>
                </div>
                <div className="flex flex-col justify-center w-full text-black items-center text-center shadow-2xl rounded-lg text-base md:text-lg lg:text-xl font-bold px-2 lg:px-5 py-3 mr-4">
                    <div className="text-white bg-primary p-6 rounded-full"><FaTelegramPlane style={{width:"50px", height:"50px"}}/></div>
                    <div className="text-label mt-4">Telegram</div>
                </div>
                <div className="flex flex-col justify-center w-full text-black items-center text-center shadow-2xl rounded-lg text-base md:text-lg lg:text-xl font-bold px-2 lg:px-5 py-3 mr-4">
                    <div className="text-white bg-primary p-6 rounded-full"><FaTwitter style={{width:"50px", height:"50px"}}/></div>
                    <div className="text-label mt-4">Twitter</div>
                </div>
            </div>
        </div>
        </>
    )
}

export default CommunityMedia
