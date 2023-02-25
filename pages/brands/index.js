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

  console.log(companies)


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
        <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
       
       <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Join a brand.</h1>
       <p class="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">Search our directory of eCommerce brands to find a job you'll love. </p>
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

<a class="companyCard  hover:opacity-90" href={`/company/${company.companyUrl}`}><div class="companyCard__logo"></div>
<div className="self-startlg:self-center">
                  <img
                    src={logoImage}
                    alt=""
                    className="w-14 h-14 min-w-[56px] min-h-[56px] border border-black rounded-lg"
                  />
                </div>
<div class="companyCard__details ml-2">
<div class="companyCard__details__name ">{company.company_name}</div>
<div class="companyCard__details__count">{company.empcount} jobs</div>
</div>
</a>
)
})}
 

</div>
</div></section>
</section>
    )
}

export default brands
