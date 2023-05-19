import { sanityClient, urlFor } from "../../../sanity";
import { NextSeo } from "next-seo"
import PortableText from "react-portable-text";
import React, {useState, useEffect} from 'react';
import { useScroll } from "framer-motion";





function Post({post}) {



    return (
  <div>
     <NextSeo
      title={post.title}
      description={post.description}
      openGraph={{
        url: `https://www.ecomportal.co/interviews/post/${post.slug.current}`,
        title: `${post.title}`,
        description: `${post.description}`,
        images: [
          {
            url:`https://www.ecomportal.co/interviews/post/${post.slug.current}`,
            width: 800,
            height: 600,
            alt: 'Og Image Alt',
            type: 'image/jpeg',
          },
        ],
        siteName: 'SiteName',
      }}
      twitter={{
        site: '@ecomprtal',
        cardType: 'summary',
        image: "/logo.png"
      }}
    />
      <section className="pb-12 bg-white font-Studio6 lg:mx-10 rounded-lg sm:py-16 lg:pb-20">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-xl mx-auto text-center">

          <h1 className="mt-6 text-4xl font-bold text-gray-900 sm:text-5xl">
         {post.title}
          </h1>

          <div className="flex items-center justify-center mt-8 space-x-2">
            <p className="text-base font-medium text-gray-900">
              <a href="#" title="" className="">
                Interviews              </a>
            </p>
            <span className="text-base font-medium text-gray-500">
              •
            </span>
            <p className="text-base font-medium ">
             {new Date(post._createdAt).toLocaleString().replace(","," •")}
            </p>
           
           
          
          </div>
          <a href="https://twitter.com/smerlinger">
          <div className="items-center mt-8 flex justify-center">
          <img className="h-10 w-10 rounded-full mx-2 " src={urlFor(post.author.image).url()} /> 
          <p className="text-base font-medium text-gray-500">
          by {post.author.name}
            </p>
            </div>
            </a>
        </div>

        <div className="mt-8 sm:mt-12 lg:mt-10 mb-4 mx-auto aspect-w-16 aspect-h-9 lg:aspect-h-6">
          <img loading="lazy" className="object-cover mx-auto w-1/2 h-1/2" src={urlFor(post.mainImage).url()} alt="">
          </img>
          

        </div>
        <div className="grid grid-cols-1 mt-8 sm:mt-12 lg:mt-16 lg:grid-cols-12 lg:gap-x-12 gap-y-8">
        <aside class="lg:col-span-4 lg:order-last lg:self-start lg:sticky lg:top-32"><div class="overflow-hidden bg-white border border-gray-200"><div itemscope="itemscope" itemtype="https://schema.org/TableOfContents" class="px-4 py-5 sm:p-6"><h4 class="text-xs font-bold tracking-widest text-gray-400 uppercase">
      Table of Contents:
                </h4> <ul class="mt-8 space-y-5"><li><a href="#introduction"  class="flex text-base font-bold text-gray-500 hover:underline" itemprop="associatedMedia" title="">
                      Introduction
                    </a></li><li><a href="#applying" class="flex text-base font-bold text-gray-500" itemprop="associatedMedia" title="">
                      Applying
                    </a></li><li><a class="flex text-base font-bold text-gray-500 hover:underline" itemprop="associatedMedia" title="">
                      Interview Process
                    </a></li><li><a  class="flex text-base font-bold text-gray-500 hover:underline" itemprop="associatedMedia" title="">
                     Getting Hired
                    </a></li>
                    </ul></div></div></aside>
          

   

          <article
            className="prose lg:col-span-8 max-w-none prose-gray prose-blockquote:px-8 prose-blockquote:py-3 prose-blockquote:lg:text-xl prose-blockquote:font-medium prose-blockquote:text-gray-900 prose-blockquote:border-gray-900 prose-blockquote:border-l-2 prose-blockquote:lg:leading-9 prose-blockquote:not-italic prose-blockquote:bg-gray-100 prose-blockquote:text-2xl prose-blockquote:leading-8">
            
    <div>
      
        <PortableText 
        dataset={process.env.NEXT_PUBLIC_SANITY_DATASET}
        projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}
        content={post.body}
        className=""
        serializers={{
            h1: (props) => (
                <h1 className="text-3xl align-left font-bold " {...props}>{props.children}</h1>
            ),
            h2: (props) => {
              
               const id = props.children
               console.log(id)
              return (
                <h2 id={id} className="text-3xl font-bold " {...props}>{props.children} </h2>
            )
              },
            h3: (props) => (
                <h2 className="text-xl " {...props}>{props.children} </h2>
            ),
            p: (props) => (
                <p className="text-md" {...props}>{props.children}</p>
            ),
        }}
        />
    </div>

            
          </article>
        </div>
      </div>
      
    </section>
    </div>
     
    )
}
 
export default Post;

export const getStaticPaths  = async () => {
    const query = `*[_type == "post"]{
        _id,
        slug {
            current 
        }
    }`;

    const posts = await sanityClient.fetch(query);

    const paths = posts.map((post) => ({
        params: {
            slug: post.slug.current,
        }
        }))


        return {
            paths,
            fallback: "blocking"
        }
}

export const getStaticProps = async ({ params }) => {
const query = `*[_type == "post" && slug.current == $slug][0]{
    _id,
    _createdAt,
    title,
    author-> {
        name,
        image
    },
    description,
    mainImage,
    slug,
    body
}`;

const post = await sanityClient.fetch(query, { 
    slug: params?.slug
 });

if (!post) {
    return {
        notFound: true,
    }
}

    return {
        props: {
            post,
        },
        revalidate: 60, // after 60 seconds, it will update your old cache
    }

}