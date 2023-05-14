import { sanityClient, urlFor } from "../../../sanity";
import { NextSeo } from "next-seo"
import PortableText from "react-portable-text";
import EmailBar from "../../../components/EmailBar"



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
      <section className="py-12 bg-white font-Studio6 lg:mx-10 rounded-lg sm:py-16 lg:py-20">
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
          <div className="lg:col-span-2 lg:self-start lg:sticky lg:top-6 lg:order-last">
            <ul className="flex space-x-3 lg:space-x-0 lg:space-y-4 lg:flex-col lg:items-center">
        

              <li>
                <a href="http://www.twitter.com/ecomprtal/" target="_blank" title=""
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
                <a href="https://www.linkedin.com/company/ecomportal/" title=""
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
            
    <div>
        <PortableText 
        dataset={process.env.NEXT_PUBLIC_SANITY_DATASET}
        projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}
        content={post.body}
        className=""
        serializers={{
            h1: (props) => (
                <h1 className="text-3xl font-bold " {...props}>{props.children}</h1>
            ),
            h2: (props) => (
                <h2 className="text-3xl font-bold " {...props}>{props.children} </h2>
            ),
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