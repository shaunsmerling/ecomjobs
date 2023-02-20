import React from "react"

export default function logoBanner() {
    return (
        <div className="mt-10 lg:mt-20 lg:-mb-20">
             <span class="font-semibold text-gray-400 uppercase">FEATURED BRANDS</span>
            <img loading="lazy"  src="./logobanner.png" alt="logo banner" className="w-full h-12 lg:h-32 -mr-10 mt-4 object-cover" />
        </div>
    )
}