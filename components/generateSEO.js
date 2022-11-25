import Head from "next/head";

export default function SEO({ jobDescription, jobPosition, companyName, logo, url }) {

  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
      <title>{`${jobPosition} | ${companyName}`}</title>
      <meta
        property="og:title"
        content={`${jobPosition}`}
        key="ogtitle"
      />
      <meta
        property="og:description"
        content={`${jobDescription}`}
        key="ogdesc"
      />
      <meta
        property="twitter:card"
        content="summary_large_image"
        key="twcard"
      />
      <meta name="twitter:creator" content="@ecomjobs_" key="twhandle" />
      <meta
        name="twitter:title"
        content={`${jobPosition}`}
        key="twtitle"
      />
      <meta
        name="twitter:description"
        content={`${jobDescription}`}
        key="twdescription"
      />
      <meta
        name="twitter:image"
        content={`https://ecom-jobs.com/images/${logo}`}
        key="twimage"
      />
      <meta property="og:url" content={`https://ecom-jobs.com/job/${url}`} key="ogurl" />
      <meta
        property="og:image"
        content={`https://ecom-jobs.com/images/${logo}`}
        key="ogimage"
      />
      <meta property="og:site_name" content="https://ecom-jobs.com" key="ogsitename" />
    </Head>
  );
}