import React from "react"

export default function logoBanner() {
    return (
        <div className="mt-20 lg:mt-20 lg:-mb-20">
             <span class="font-semibold font-Studio6 text-black uppercase">FEATURED BRANDS</span>
            <img loading="lazy"  src="https://ecomportal-images.storage.googleapis.com/images/logobanner.png" alt="logo banner" className="w-full h-12 lg:h-32 -mr-30 mt-4 object-cover" />
        </div>
    )
}