import React, { useState, useEffect } from 'react';
import { api_url } from "../../config";
import { NextSeo } from 'next-seo';

const locations = [
  {
    continent: 'North America',
    countries: [
      { name: 'United States', cities: ['New York', 'Los Angeles', 'Chicago', 'Houston', "Austin", "Portland", "San Fransisco"] },
      { name: 'Canada', cities: ['Toronto', 'Vancouver', 'Montreal', 'Calgary', 'Ottawa', 'Ontario'] },
    ],
  },
  {
    continent: 'Oceanic',
    countries: [
      { name: 'Australia', cities: ['Sydney', 'Melbourne', 'Brisbane', 'Perth']}, 
      { name: 'New Zealand', cities: ['Christchurch', 'Auckland', 'Wellington'] },
    ],
  },
  {
    continent: 'Europe',
    countries: [
      { name: 'United Kingdom', cities: ['London', 'Manchester', 'Birmingham', 'Edinburgh'] },
      { name: 'Germany', cities: ['Berlin', 'Munich', 'Hamburg', 'Frankfurt'] },
      { name: 'Spain', cities: ['Barcelona', 'Madrid'] },
      { name: 'France', cities: ['Paris'] },
    ],
  },
  {
    continent: 'Asia',
    countries: [
      { name: 'China', cities: ['Shanghai', 'Beijing', 'Guangzhou', 'Shenzhen'] },
      { name: 'Japan', cities: ['Tokyo', 'Osaka', 'Kyoto', 'Yokohama'] },
      { name: 'South Korea', cities: ['Seoul'] },
      { name: 'Malaysia', cities: ['Kuala Lumpur'] },
      { name: 'Singapore', cities: ['Singapore'] },
    ],
  },
];

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
          description: "Browse our list of eCommerce brands hiring on Ecomportal",
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
      <section className="content-wrapper">
        <div className="content ">
          <div className="py-8 px-4 mx-auto font-Studio6 max-w-screen-xl text-center lg:py-8 lg:px-12">
            <h1 className="mb-4 text-2xl font-extrabold tracking-tight leading-none text-black md:text-5xl lg:text-3xl ">Brand By Location</h1>
          </div>
        </div>
      </section>
      <section className="content-wrapper">
        <div className="content ">
          <div className="companyCards">
            {locations.map((location) => (
              <div key={location.continent}>
                <h2 className="text-2xl underline m-4 font-bold">{location.continent}</h2>
                {location.countries.map((country) => (
                  <div key={country.name}>
                    <h3 className="text-lg m-4 font-medium">{country.name}</h3>
                    <div className="flex flex-wrap">
                    {country.cities.map((city) => (
                        <a
                          key={city}
                          className="companyCard m-2 hover:text-white hover:bg-[#2d4f42] "
                          href={`/location/${location.continent}/${country.name}/${city}`}
                        >
                          {/* Your company card content goes here */}
                          <div className="companyCard__details__name">{city}</div>
                        </a>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center mt-20 mb-10">
          <a
            className="whitespace-nowrap inline-flex items-center justify-center pl-3 pr-1 py-1 border border-transparent rounded-full shadow-sm text-base font-Studio6 text-white bg-[#2d4f42]  "
            href="/list-your-company"
          >
            Don't See Your Brand? Sign Up Here
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="ml-1 w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </a>
        </div>
      </section>
    </section>
  );
}

export default brands;

                     
