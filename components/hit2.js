import React from "react"




export async function getServerSideProps() {
 
      const res = await fetch(`${api_url}/api/jobs`)
      const data = await res.json()
    
      return {
        props: { jobs: data}, // will be passed to the page component as props
      }
    }

   
export default function hit2({ jobs }) {

    console.log(jobs)
    return (

        <div id="container" className="border-2 -px-20 py-20 mr-96 ml-24">

           
        </div>
    )
}