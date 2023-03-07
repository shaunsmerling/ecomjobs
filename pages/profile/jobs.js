import { useSession, getSession } from "next-auth/react"
import { useState, useEffect } from "react"

export default function Posts() {



    
const [jobData, setJobData] = useState({
  company_name: "",
  company_url: "",
  jobUrl: "",
  company_description: "",
  city: "",
  postedat: "",
  job_position: "",
  job_category: "",
  logo: "",
  job_type: "",
  mission: "",
  location: "",
  emp_count: "",
  user_id: "",
});


useEffect( () => {
     fetch("/api/jobs", {
        method: "GET",
      })
        .then((res) => res.json())
        .then((jsonResponse) => setJobData(jsonResponse));
}, []);

const { data: session } = useSession()



  let newData = []
  for (let key in jobData) {
    let data = jobData[key]

    if (jobData[key].user_id === session.id) {
     newData.push(data)
    }
}








function returnData(){
        return (
        newData.map((innerObject) => 
    
            // WARNING: this needs to be updated if the same user posts multiple times
            <div>
<div className="my-4">
<table className="border-2 mx-auto">
<tbody className="border-2"><tr className="border-2">
<td className="border-2 px-10">
<div class="font-bold"><h2 >Posted At</h2></div>
{ innerObject.postedat}
</td>
<td className="border-2 px-10">
<div class="font-bold"><a >{ innerObject.job_position}</a></div>
<div>{ innerObject.company_name}</div>
</td>
{/* <td className="border-2 px-10">
💳 &nbsp;
<a href="/employers/posts/3927229/wizard/payment">Paid</a>
</td> */}
<td className="border-2 px-10">
<div>Hybrid</div>
</td>
<td className="border-2 px-10">
<div class="font-bold"><h2 >Location</h2></div>
<div>{ innerObject.location}</div>
</td>
<td className="border-2 px-10">
<a className="text-sky-600" href={`/job/${ innerObject.jobUrl}`}>Go to Job</a>
</td>
{/* <td className="border-2 px-10">
<a data-turbo-method="delete" data-turbo-confirm="Are you sure?" href="/employers/posts/senior-nextjs-dev-foobar-3927229">Delete job</a>
</td> */}
</tr>
</tbody></table>
</div>
</div> 
))}





    

    // Check session.user.id to see if any jobs are correlated with this user.id. Jobs posted under a logged in user should all have the user.id attached to that job
    // If there are jobs with user.id, display them
    // IF there are none, display none

    // Fetch all jobs
    // Parse through them to see which ones have session.user.id that matches current session.user.id
    // Save them in state
    // Map them & return 

    return (
      <div>
      <section class="py-12 mx-10 rounded-lg bg-white sm:py-16 h-96 lg:my-10">
      <div class="px-4 mx-auto sm:px-6 lg:px-8 h-96 max-w-7xl">
      <div class="max-w-3xl mx-auto text-center ">
            <h1 className=" font-bold tracking-tighter text-black text-4xl mt-10 mb-10 ">Saved Jobs 💼</h1>
            {returnData() ? returnData() : <div> Currently there are no jobs posted </div>}
           
        </div>
        </div>
     </section>
      </div>
    )
}

export async function getServerSideProps(context) {
    return {
        props: {
            session: await getSession(context)
        },
    }
  }