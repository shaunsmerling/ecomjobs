import React, {useState, useEffect} from 'react'
import { api_url } from "../../config";
import { NextSeo } from 'next-seo';

export async function getServerSideProps() {
  const res = await fetch(`${api_url}/api/company`);
  const data = await res.json();

  return {
    props: { companies: data }, // will be passed to the page component as props
  }
}


function brands({ companies }) {


    return (
    
        <section>
          <NextSeo
      title="Brands | Ecomportal"
      description="Browse our list of eCommerce brands hiring on Ecomportal" 
      openGraph={{
        url: 'https://www.ecomportal.co/brands',
        title: 'Brand List | Ecomportal',
        description: "Browse our list of eCommerce brands hiring on Ecomportal" ,
        images: [
          {
            url: 'https://www.ecomportal.co/logo.png',
            width: 800,
            height: 600,
            alt: 'Og Image Alt',
            type: 'image/jpeg',
          },
        ],
        siteName: 'Ecomportal',
      }}
      twitter={{
        site: '@ecomprtal',
        cardType: 'summary',
        image: "/logo.png"
      }}
      />
        <section class="content-wrapper"><div class="content ">
        <div class="py-8 px-4 mx-auto font-Studio6 max-w-screen-xl text-center lg:py-16 lg:px-12">
       
       <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-black md:text-5xl lg:text-6xl ">Join a brand.</h1>
       {/* <p class="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">Search our directory of eCommerce brands to find a job you'll love. </p> */}
       </div>
</div></section>
        <section class="content-wrapper"><div class="content "><div class="companyCards ">
        {companies.map((company) => {

const logoString = company.logo;

function isImageFile(filename) {
  return /\.(png|jpe?g)$/i.test(filename);
}


  const logoImage = isImageFile(logoString) ? 
  `./images/${logoString}` : 
  `${logoString}`;

          return (

<a class="companyCard  hover:bg-btn" href={`/company/${company.companyUrl}`}><div class="companyCard__logo"></div>
<div className="self-startlg:self-center">
                  <img
                    src={logoImage}
                    alt=""
                    className="w-14 h-14 min-w-[56px] min-h-[56px] border border-black rounded-lg"
                  />
                </div>
<div class="companyCard__details ml-2">
<div class="companyCard__details__name ">{company.company_name}</div>
<div class="companyCard__details__count">{company.empcount} employees</div>
</div>
</a>
)
})}
 

</div>
</div>

<div className="flex justify-center mt-10 mb-10">
<a class="whitespace-nowrap inline-flex items-center justify-center pl-3 pr-1 py-1 border border-transparent rounded-full shadow-sm text-base font-Studio6 text-black  bg-btn " href="/list-your-company">
Don't See Your Brand? Sign Up Here
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="ml-1 w-6 h-6">
<path stroke-linecap="round" stroke-linejoin="round" d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
</svg>
</a>
</div>

</section>
</section>
    )
}

export default brands
