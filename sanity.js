import {
    createClient,
} from "next-sanity"
import createImageUrlBuilder from "@sanity/image-url";


export const config = {
    /**
     * FInd your project ID and dataset in `sanity.json` in your studio project.
     * These are considered “public”, but you can use environment variables
     * if you want differ between local dev and production.
     * 
     * https://nextjs.org/docs/basic-features/environment-variables
     **/
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    /**
     * /**
     * Set useCdn to 'false' if your application requires the freshest possible
     * data always (Potentially slightly slower and a bit more expensive).
     * Authenticated request (like preview) will always bypass the CDN 
     *  */
    useCdn: process.env.NODE_ENV === "production",

};
// Set up the client for fetching data in the getProps page functions
export const sanityClient = createClient(config);

/**
 * Helper function for easily switching between different image
 * URLs in your Sanity dataset
 * Read more: https://www.sanity.io/docs/image-url
 */
export const urlFor = (source) => createImageUrlBuilder(config).image(source);
