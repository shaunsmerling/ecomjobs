import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import {Helmet} from "react-helmet";
import Head from "next/head";
import { api_url } from "../../../config";


export async function getServerSideProps(context) {
console.log(context)
  const { params } = context
  const { jobId } = params

  const res = await fetch(`${api_url}/api/jobs?id=${jobId}`)
  const data = await res.json()

  return {
    props: { jobs: data}, // will be passed to the page component as props
  }
}

function Job({ jobs }) {

  console.log(jobs)
// const [jobs, setJobData] = useState({
//   company_name: "",
//   company_url: "",
//   company_description: "",
//   city: "",
//   postedat: "",
//   job_position: "",
//   job_category: "",
//   logo: "",
//   job_type: "",
//   mission: "",
//   location: "",
//   emp_count: "",
// });

// const router = useRouter();
// const { jobId } = router.query;

// useEffect( () => {
//     if (jobId) {
//      fetch("/api/jobs?id=" + jobId, {
//         method: "GET",
//       })
//         .then((res) => res.json())
//         .then((jsonResponse) => setJobData(jsonResponse));
// }}, [jobId]);


  let data =   
            {
            "@context": "https://schema.org/",
            "@type": "JobPosting",
            "title": `${jobs.job_position}`,
            "description": `${jobs.job_description}`,
            "hiringOrganization": {
                "@type": "Organization",
                "name": `${jobs.company_name}`,
                "sameAs": `${jobs.company_url}`,
            },
            "industry": `${jobs.job_category}`,
            "employmentType": "FULL_TIME",
            "datePosted": `${jobs.postedat}`,
            "validThrough": "",
            "jobLocation": {
                "@type": "Place",
                "address": {
                    "@type": "PostalAddress",
                    "streetAddress": "",
                    "addressLocality": "",
                    "postalCode": "",
                    "addressCountry": `${jobs.location}`
                }
            },
            "responsibilities": `${jobs.job_requirements}`,
            }

            

  function getDate() {
    let date_1 = new Date(jobs.postedat);
    let date_2 = new Date();

    let difference = date_1.getTime() - date_2.getTime();
    let TotalDays = Math.ceil((difference / (1000 * 3600 * 24)) * -1);

    if (TotalDays === 0) {
      return "Today";
    } else if (TotalDays === 1) {
      return `${TotalDays} day ago`;
    } else if (TotalDays > 1 && TotalDays < 30) {
      return `${TotalDays} days ago`;
    } else if (TotalDays >= 30 && TotalDays <= 60) {
      return "1 month ago";
    } else if (TotalDays >= 60 && TotalDays <= 90) {
      return "2 months ago";
    } else if (TotalDays >= 90 && TotalDays <= 120) {
      return "3 months ago";
    }
  }




  return (
    
    <div className="bg-gray-100 pb-10">
      {/* <NextSeo
      title={`${jobs.job_position} | ${jobs.company_name}`}
      description={`${jobs.job_position} available at ${jobs.company_name}`}
      canonical={`https://www.ecom-jobs.com/job/${jobs.jobUrl}`}
      openGraph={{
        type: "website",
        url: `https://www.ecom-jobs.com/job/${jobs.jobUrl}`,
        title: "hello",
        description: `this finally`,
        locale: 'en_EN',
        siteName: 'EcomJobs',
      }}
      twitter={{
        handle: '@ecomjobs_',
        site: 'ecom-jobs.com',
        cardType: 'summary_large_image',
      }}
  
    /> */}
      <Helmet>
      (<script className='structured-data-list' type="application/ld+json">{JSON.stringify(data)}</script>)
      </Helmet> 
      <Head>
        <meta charset="UTF-8"/>
        <meta http-equiv="X-UA-Compatible" content="IE=edge"/> 
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <title>{`${jobs.job_position} | ${jobs.company_name}`}</title>
       
        <meta name="twitter:card" vmid="twitter:card" key="twcard" content="summary_large_image" />
        <meta name="twitter:site" vmid="twitter:site" key="twsite"  content="@ecomjobs_" />
        <meta name="twitter:text:title" vmid="twitter:text:title" key="twtitle" content={`${jobs.company_name} is hiring for a ${jobs.job_position}!`} />
        <meta name="twitter:text:description" vmid="twitter:text:description" key="twdesc"  content={`${jobs.job_description}`} />
        <meta name="twitter:image:src" vmid="twitter:image:src"  key="twimg" content={`https://ecom-jobs.com/images/${jobs.logo}`} />
</Head>

      <link rel="stylesheet" href="https://demos.creative-tim.com/notus-js/assets/styles/tailwind.css"/>
<link rel="stylesheet" href="https://demos.creative-tim.com/notus-js/assets/vendor/@fortawesome/fontawesome-free/css/all.min.css"/>

<main class="profile-page">
  <section class="relative block  h-500-px">
    <div class="absolute top-0 w-full h-full bg-center bg-cover" >
      
    </div>
    
  </section>
  <section class="relative">
    <div class="container mx-auto  px-4">
      <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-96">
        
          <div>
            
        
          
         
          <div class="mt-4 ml-6">

          <img src={`/images/${jobs.logo}`} alt="..." class="my-10 border-4  max-w-120-px"/>
          
          <a
                          target="_blank"
                          href={jobs.application_url}
                            class="flex float-right w-auto text-xs px-10 mr-4 lg:text-lg  -mt-20 rounded-full lg:pr-20 lg:pl-20   py-4  text-base  font-semibold text-white transition-all duration-200 bg-[#17614A] border border-transparent rounded-lg hover:bg-[#114031] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600"
                        >
                           Apply Now
                        </a>
                   
       

          <a href={`/company/${jobs.company_id}`}><h2 class="text-3xl my-4 text-black font-bold">{jobs.company_name}</h2></a>
       

            <div class="text-sm leading-normal  text-blueGray-400 font-bold uppercase">
              <i class="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400"></i>
             {jobs.city} {jobs.location}
            </div>
            

 
            <div class=" text-blueGray-600 my-2">
              <i class="fas fa-briefcase mr-2 text-lg text-blueGray-400"></i><a href={jobs.company_url} className="text-sky-400">{jobs.company_url}</a>
            </div>

            {/* <div class="mr-4 p-3 text-center">
                        <span class="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                         {jobs.emp_count}
                        </span>
                        <span class="text-sm text-blueGray-400">Employees</span>
                      </div>
           */}
            </div>
          </div>
          <div className="text-center">
          <h2 className="sm:text-2xl lg:text-5xl my-4 mx-auto font-bold underline ">{jobs.job_position}</h2>
          <h3 className="my-1 text-md lg:text-xl text-[#6879a5]">  {jobs.job_category}  •   {jobs.job_type} • {getDate()}</h3>
          </div>
          <div class="mt-10 py-10 border-t border-blueGray-200 text-center">
         
            <div class="flex flex-wrap justify-center">
              <div class="w-full lg:w-9/12 px-4">
              

              <p>{jobs.company_description}</p>
            <br></br>
            <br></br>
           
            <p>{jobs.job_description}</p>
            <br></br>
            <br></br>
           
            <p>{jobs.job_requirements}</p>
            <br></br>
            <br></br>
            

<a
     target="_blank"
    href={jobs.application_url}
    class="inline-flex relative items-center justify-center w-full sm:w-auto px-8 py-3 sm:text-sm text-base sm:py-3.5 font-semibold text-white transition-all duration-200 bg-[#17614A] border border-transparent rounded-lg  hover:bg-[#114031] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600"
>
   Apply Now
</a>


            
               
              </div>
            </div>
          </div>
        </div>
      </div>

  </section>
</main>
    </div>
  );
}

export default Job;
