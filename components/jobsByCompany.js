import React from "react"
import { api_url } from "../config";


export async function getServerSideProps() {
 
    
      const res = await fetch(`${api_url}/api/jobs`)
      const data = await res.json()
    
      return {
        props: { jobs: data}, // will be passed to the page component as props
      }
    }
    

export default function jobsByCompany({ jobs }) {

    console.log(jobs)

    return (
        <div>
            <h1 className="text-[40px] ml-20">
                Explore <span className="font-bold text-[#17614A]">Jobs</span> by Company
            </h1>
            <div id="card">
            <img loading="lazy" src={`../images/$`} className="card--image" />
            <div className="card--stats">
                <img loading="lazy" src="../images/star.png" className="card--star" />
                <span></span>
                <span className="gray"> • </span>
                <span className="gray"></span>
            </div>
            <p className="card--title"></p>
            <p className="card--price"><span className="bold">From $</span> / person</p>
            </div>
            </div>
            
    )
}