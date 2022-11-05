import React, { useState } from 'react';

const first = () => {        
    return (
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
                  <a href="#" title="" className="ml-2 text-base font-medium text-gray-900">
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
          <img className="object-cover w-full h-full" src="/googleshop.png" alt="">
          </img>
        </div>

        <div className="grid grid-cols-1 mt-8 sm:mt-12 lg:mt-16 lg:grid-cols-12 lg:gap-x-12 gap-y-8">
          <div className="lg:col-span-2 lg:self-start lg:sticky lg:top-6 lg:order-last">
            <ul className="flex space-x-3 lg:space-x-0 lg:space-y-4 lg:flex-col lg:items-center">
        

              <li>
                <a href="#" title=""
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
            className="prose lg:col-span-8 max-w-none prose-gray prose-blockquote:px-8 prose-blockquote:py-3 prose-blockquote:lg:text-xl prose-blockquote:font-medium prose-blockquote:text-gray-900 prose-blockquote:border-gray-900 prose-blockquote:border-l-2 prose-blockquote:lg:leading-9 prose-blockquote:not-italic prose-blockquote:bg-gray-100 prose-blockquote:text-lg prose-blockquote:leading-8">
            <p>
            When most hear the word “Google,” their immediate first thought is a verb. To "Google" is to search for information online. While looking up the best recipes and becoming an overnight DIY medical professional is a large part of the traditional Google experience, Google is far more than a simple search engine.

            In particular, Google Shopping is playing an increasingly important role in the overall Google ecosystem for businesses and entrepreneurs looking to sell more products and grow their brand.
            </p>
            <br></br>
            <p>
            While not all experiments at Google have panned out (Google+, anyone?), consumers are increasingly turning to the Google Shopping interface to make purchases online—and business owners are beginning to pay attention to the incredible value it can provide.

How does Google Shopping work? And why are so many ecommerce retailers and entrepreneurs using Google Shopping to sell products and grow their brands?

In this brief guide, we will cover what Google Shopping is, and why its important for many businesses across a variety of industries.
            </p>
            <br></br>
            <blockquote>
              <p>
                Tincidunt magnis eu, vitae dictumst commodo dolor in. Aen ean dictumst risus posuere a at id fermentum
                nibh. Luctus
                nunc bibendum duis egestas scelerisque.
              </p>
            </blockquote>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id pellentesque ut pellentesque varius amet
              mauris.
              Tempor,
              risus, congue gravida nulla tincidunt nec diam. Tincidunt magnis eu, vitae dictumst commodo dolor in.
              Aenean
              dictumst
              risus posuere a at id fermentum nibh. Luctus nunc bibendum duis egestas scelerisque.
            </p>

            <p>
              Maecenas in pharetra hendrerit neque, tellus eu. Arcu tempus, vel blandit adipiscing a sed cursus. Augue
              vestibulum
              tempus lectus gravida condimentum mauris iaculis. Sodales imperdiet id maecenas molestie id.
            </p>

            <ul className="marker:text-gray-900">
              <li>
                Id pellentesque ut pellentesque varius amet mauris.
              </li>

              <li>
                Tempor, risus, congue gravida nulla tincidunt.
              </li>

              <li>
                Tincidunt magnis eu, vitae dictumst.
              </li>

              <li>
                Aenean dictumst risus posuere a at id fermentum nibh.
              </li>
            </ul>

            <img className="object-cover w-full" src="https://landingfoliocom.imgix.net/store/collection/clarity-blog/images/blog-content/1/image.png" alt="">
            </img>
            <h2>
              How to start the process?
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id pellentesque ut pellentesque varius amet
              mauris.
              Tempor,
              risus, congue gravida nulla tincidunt nec diam. Tincidunt magnis eu, vitae dictumst commodo dolor in.
              Aenean
              dictumst
              risus posuere a at id fermentum nibh. Luctus nunc bibendum duis egestas scelerisque.
            </p>
            <p>
              Maecenas in pharetra hendrerit neque, tellus eu. Arcu tempus, vel blandit adipiscing a sed cursus. Augue
              vestibulum
              tempus lectus gravida condimentum mauris iaculis. Sodales imperdiet id maecenas molestie id.
            </p>
          </article>
        </div>
      </div>
    </section>
    )
}
export default first;