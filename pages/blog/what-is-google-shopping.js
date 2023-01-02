import React, { useState } from 'react';
import { NextSeo } from 'next-seo';


const first = () => {      
  
  var slugify = require('slugify')

  slugify("What is Google Shopping & How Does It Work")

    return (
      <div>
       <NextSeo
      title="What is Google Shopping & How Does It Work | Blogs | eCommerce Jobs"
      description="Google Shopping Explained" 
      openGraph={{
        url: 'https://www.url.ie/a',
        title: 'Open Graph Title',
        description: 'Open Graph Description',
        images: [
          {
            url: 'https://www.example.ie/og-image-01.jpg',
            width: 800,
            height: 600,
            alt: 'Og Image Alt',
            type: 'image/jpeg',
          },
        ],
        siteName: 'SiteName', 
      }}
      twitter={{
        site: '@ecomjobs_',
        cardType: 'summary',
        image: "/logo.png"
      }}
    />
      <section className="py-12 bg-white sm:py-16 lg:py-20">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-xl mx-auto text-center">
          <nav className="flex items-center justify-center">
            <ol className="flex items-center space-x-2">
              <li>
                <a href="#" title="" className="text-base font-medium text-gray-900">
                  Home
                </a>
              </li>

              <li>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-gray-900 shrink-0" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                    viewBox="0 0 20 20" aria-hidden="true">
                    <path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z" />
                  </svg>
                  <a href="/blog" title="" className="ml-2 text-base font-medium text-gray-900">
                    Blog
                  </a>
                </div>
              </li>

              <li>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-gray-900 shrink-0" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                    viewBox="0 0 20 20" aria-hidden="true">
                    <path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z" />
                  </svg>
                  <a href="#" title="" className="ml-2 text-base font-medium text-gray-500">
                    What Is Google Shopping?
                  </a>
                </div>
              </li>
            </ol>
          </nav>

          <h1 className="mt-6 text-4xl font-bold text-gray-900 sm:text-5xl">
           What Is Google Shopping & How Does It Work?
          </h1>

          <div className="flex items-center justify-center mt-8 space-x-2">
            <p className="text-base font-medium text-gray-900">
              <a href="#" title="" className="">
                Marketing
              </a>
            </p>
            <span className="text-base font-medium text-gray-500">
              •
            </span>
            <p className="text-base font-medium text-gray-500">
              November 2, 2022
            </p>
          </div>
        </div>

        <div className="mt-8 sm:mt-12 lg:mt-16 aspect-w-16 aspect-h-9 lg:aspect-h-6">
          <img loading="lazy" className="object-cover w-full h-full" src="/googleshop.png" alt="">
          </img>
        </div>

        <div className="grid grid-cols-1 mt-8 sm:mt-12 lg:mt-16 lg:grid-cols-12 lg:gap-x-12 gap-y-8">
          <div className="lg:col-span-2 lg:self-start lg:sticky lg:top-6 lg:order-last">
            <ul className="flex space-x-3 lg:space-x-0 lg:space-y-4 lg:flex-col lg:items-center">
        

              <li>
                <a href="http://www.twitter.com/ecomjobs_/" title=""
                target="_blank"
                  className="inline-flex items-center justify-center w-10 h-10 text-gray-900 transition-all duration-200 border border-gray-200 rounded-full hover:bg-gray-900 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900">
                  <span className="sr-only">
                    Twitter
                  </span>
                  <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                    <path
                      d="M19.633 7.997c.013.175.013.349.013.523 0 5.325-4.053 11.461-11.46 11.461-2.282 0-4.402-.661-6.186-1.809.324.037.636.05.973.05a8.07 8.07 0 0 0 5.001-1.721 4.036 4.036 0 0 1-3.767-2.793c.249.037.499.062.761.062.361 0 .724-.05 1.061-.137a4.027 4.027 0 0 1-3.23-3.953v-.05c.537.299 1.16.486 1.82.511a4.022 4.022 0 0 1-1.796-3.354c0-.748.199-1.434.548-2.032a11.457 11.457 0 0 0 8.306 4.215c-.062-.3-.1-.611-.1-.923a4.026 4.026 0 0 1 4.028-4.028c1.16 0 2.207.486 2.943 1.272a7.957 7.957 0 0 0 2.556-.973 4.02 4.02 0 0 1-1.771 2.22 8.073 8.073 0 0 0 2.319-.624 8.645 8.645 0 0 1-2.019 2.083z">
                    </path>
                  </svg>
                </a>
              </li>

            

              <li>
                <a href="#" title=""
                  className="inline-flex items-center justify-center w-10 h-10 text-gray-900 transition-all duration-200 border border-gray-200 rounded-full hover:bg-gray-900 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900">
                  <span className="sr-only">
                    LinkedIn
                  </span>
                  <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                    <path
                      d="M20 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zM8.339 18.337H5.667v-8.59h2.672v8.59zM7.003 8.574a1.548 1.548 0 1 1 0-3.096 1.548 1.548 0 0 1 0 3.096zm11.335 9.763h-2.669V14.16c0-.996-.018-2.277-1.388-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248h-2.667v-8.59h2.56v1.174h.037c.355-.675 1.227-1.387 2.524-1.387 2.704 0 3.203 1.778 3.203 4.092v4.71z">
                    </path>
                  </svg>
                </a>
              </li>
            </ul>
          </div>

          <div className="hidden lg:block lg:col-span-2"></div>

          <article
            className="prose lg:col-span-8 max-w-none prose-gray prose-blockquote:px-8 prose-blockquote:py-3 prose-blockquote:lg:text-xl prose-blockquote:font-medium prose-blockquote:text-gray-900 prose-blockquote:border-gray-900 prose-blockquote:border-l-2 prose-blockquote:lg:leading-9 prose-blockquote:not-italic prose-blockquote:bg-gray-100 prose-blockquote:text-2xl prose-blockquote:leading-8">
            <p className="text-xl">
            When most hear the word “Google,” their immediate first thought is a verb. To "Google" is to search for information online. While looking up the best recipes and becoming an overnight DIY medical professional is a large part of the traditional Google experience, Google is far more than a simple search engine.

            In particular, Google Shopping is playing an increasingly important role in the overall Google ecosystem for businesses and entrepreneurs looking to sell more products and grow their brand.
            </p>
            <br></br>
            <p className="text-xl">
            While not all experiments at Google have panned out (Google+, anyone?), consumers are increasingly turning to the Google Shopping interface to make purchases online—and business owners are beginning to pay attention to the incredible value it can provide.

How does Google Shopping work? And why are so many ecommerce retailers and entrepreneurs using Google Shopping to sell products and grow their brands?

In this brief guide, we will cover what Google Shopping is, and why its important for many businesses across a variety of industries.
            </p>
            <br></br>
            <blockquote>
            <h2 className="text-3xl font-bold"> What Is Google Shopping? </h2>
            <br></br>
              <p className="text-xl">
              From a consumer perspective, Google Shopping is a specialized part of Google, where users can discover and purchase products from local businesses and other online retailers. As Google itself notes, “When you use Google Shopping, youre browsing products from advertisers and sellers who have chosen to feature their products on Google Shopping.” Merchants accepted into Google Shopping generally are seen as higher quality than brands that might not make the cut.

On the business side, Google Shopping is powered by two platforms: Googles Ads and Google Merchant Center. Google Merchant Center is where your product feed lives. Here you can customize your offerings and optimize your product listings to drive more sales and grab a larger part of the market share pie in your industry. Having your products listed on the Google Shopping tab is often an immediate trust builder. Because you have to be accepted into the Google Shopping platform, not every brand or product will be listed.
              </p>
            </blockquote>
            
            <img loading="lazy" className="object-cover w-full py-10" src="/googleshoppage.jpeg" alt=""/>
            <br></br>
            <p className="text-xl">
            Whether you are a marketer or business owner, you can apply for a Google Shopping account, and its free to join. However, like with traditional Google Ads, you can also run paid advertising through Google Shopping. With Google Shopping you can run targeted local inventory ads, or run a promotion for your best selling product. Similar to Google Ads, youre only charged when a prospective customer clicks your products, and theres no fee to list products if accepted into the Google Shopping platform.
            </p>
            <br></br>
            <h2 className="text-3xl font-bold"> Four benefits of using Google Shopping as a business owner: </h2>
            <br></br>
            <h2 className="text-xl font-bold"> 1. Trust by association </h2>
            <br></br>
            <p className="text-xl">
            One of the biggest benefits to a brand of joining Google Shopping is that your products and services will be seen alongside other big name brands (think Walmart and Target, for example) on the Google Shopping feed, which naturally gives your brand some authority. Because Google Shopping is by application, the quality of products and brands in the shopping tab tend to be higher. This of course doesn’t mean you’re going to sell as much as a big brand retailer might, but it does naturally provide strong social proof for online stores.
            </p>
            <br></br>
            <h2 className="text-xl font-bold"> 2. Better Qualified Leads </h2>
            <br></br>
            <p className="text-xl">
            Unlike the traditional Google search, where users might not actually be looking to purchase anything as the result of their search, when a user goes to shopping.google.com that’s usually a sign they’re looking to make a purchase at that point or in the very near future. Getting exposure on Google Shopping can often lead to increased sales, simply due to the fact that those using Google Shopping are actively looking to purchase a product. Not everyone using Google Shopping will make a purchase, but in general users are more intent on making a purchase than a random individual browsing Google Search.
            </p>
            <br></br>
            <h2 className="text-xl font-bold"> 3. Designed with shoppers in mind </h2>
            <br></br>
            <p className="text-xl">
            Another benefit of Google Shopping is the shopping tab interface was designed specifically to highlight quality product photos and product descriptions and make it easier for consumers to compare and contrast products.

While the interface feels similar to the traditional Google Search, Google Shopping is optimized for images and quickly highlighting product features, especially when using the platform on a mobile device.

For example, if you are looking for a tablet, the Google Shopping results might look like this.
            </p>
            
            <img className="object-cover w-full py-10" src="/googleshopprod.jpeg" alt=""/>
            <p className="text-xl">Here you can see high-level features, reviews, and additional images to help you make the right choice. No unnecessary clutter or steps throughout the entire purchasing process for the user.</p>
            <br></br>
            <h2 className="text-xl font-bold"> 4. Excellent reporting and metrics with Google Shopping Ads</h2>
            <br></br>
            <p className="text-xl">
            Another benefit of Google Shopping is that Google has really invested in making reporting and metrics easy to track when running Google Shopping ads. Google ultimately wants the businesses accepted into their platform to succeed, as that means users are being exposed to quality businesses and products.

While Google Shopping is a newer product of Google’s, many businesses are seemingly getting a very high ROI from investing in the platform. Although different from Google Ads the overall process is quite similar to how experienced marketers are used to.
            </p>
            <br></br>
            <h2 className="text-3xl font-bold"> Getting started with Google Shopping ads</h2>
            <br></br>
            <p className="text-xl">
            Shopping ads on Google is where your actual shopping campaigns live and where you’ll set your budget, manage your bids, gain insights, and make optimizations based on performance.

The setup and management of Shopping ads on Google is quite a bit different from setting up traditional text ads. With text ads, you’re creating campaigns, ad groups and ads that are focused around keywords that you choose.

With Google Shopping, Google determines when your product listing ads show up. They consider your feed, your site, and your bids to determine what search queries trigger your ads. Because of this, setting up shopping ads has some strong similarities to SEO. Google is constantly tweaking its algorithm to ensure only the most relevant and quality products show up in search for its users, so it pays to invest in putting your best foot forward when getting started.

Success with Google Shopping boils down mainly to three main areas:
            </p>
            <br></br>
            <p className="text-xl"><span className="font-bold">1. Feed & Creative Optimization: </span>
           
            Or, as we like to call it, feed mastery. This covers a lot of ground, including your product data, product images, and price.
            </p>
            <br></br>
            <p className="text-xl"><span className="font-bold">2. Bidding: </span>
           
            There are several ways to bid successfully and the best techniques are constantly changing. We’ve seen shifts in bidding strategies double the return on ad spend for different campaigns.
            </p>
            <br></br>
            <p className="text-xl"><span className="font-bold">3. Monitoring and Optimization: </span>
           
            One of the great benefits of Google Shopping is the ability to see granular performance data and to make granular optimizations. Proper monitoring and optimization can take a good campaign and make it great.
            </p>
            <br></br>
            <p className="text-xl">There’s certainly more that goes into finding success with Google Shopping ads, but for those that are looking for another avenue to drive traffic and sales, it’s wise to consider giving Google Shopping a try</p>
            
      

            
          </article>
        </div>
      </div>
    </section>
    </div>
    )
}
export default first;