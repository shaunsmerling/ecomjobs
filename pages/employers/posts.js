import { useSession, getSession } from "next-auth/react"
import { useState, useEffect } from "react"

export default function posts() {

    
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

function returnData(){
for (let key in jobData) {
    if (jobData.hasOwnProperty(key)) {
      let innerObject = jobData[key]
      if (innerObject.hasOwnProperty('user_id') && innerObject.user_id === session.user.id) {
        return (

            // WARNING: this needs to be updated if the same user posts multiple times
            <div>
<div className="my-4">
<table className="border-2 mx-auto">
<tbody className="border-2"><tr className="border-2">
<td className="border-2 px-10">
{ innerObject.postedat}
</td>
<td className="border-2 px-10">
<div class="font-bold"><a href="/senior-nextjs-dev-foobar-3927229">{ innerObject.job_position}</a></div>
<div>{ innerObject.company_name}</div>
</td>
<td className="border-2 px-10">
💳 &nbsp;
<a href="/employers/posts/3927229/wizard/payment">Paid</a>
</td>
<td className="border-2 px-10">
<div>{ innerObject.job_type}</div>
</td>
<td className="border-2 px-10">
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
)}}}}





    

    // Check session.user.id to see if any jobs are correlated with this user.id. Jobs posted under a logged in user should all have the user.id attached to that job
    // If there are jobs with user.id, display them
    // IF there are none, display none

    // Fetch all jobs
    // Parse through them to see which ones have session.user.id that matches current session.user.id
    // Save them in state
    // Map them & return 

    return (


        <div className="text-center"> 
            <h1 className="leading-[3rem] font-bold tracking-tighter text-black text-2xl mt-10 mb-10 ">My Jobs 💼</h1>
            {returnData() ? returnData(): <div> Currently there are no jobs posted </div>}
           
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