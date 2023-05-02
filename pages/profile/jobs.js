import { getSession } from "next-auth/react"
import { useState, useEffect } from "react"
import Location from "../../components/icons/Location"
import SalaryIcon from "../../components/icons/SalaryIcon"
import UserIcon from "../../components/icons/UserIcon"
import Link from "next/link"
import { api_url } from "../../config";

export async function getServerSideProps(ctx) {
  const session = await getSession(ctx)
  if (!session) {
    return {
      props: {}
    }
  }
  const { user } = session;
  return {
    props: { user },
  }
}


export default function SavedJobs({ user }) {


  const [userData, setUserData] = useState([]);
  const [jobData, setJobData] = useState([]);
  const [newData, setNewData] = useState([]);

    useEffect(() => {
    // show the spinner
    showSpinner();

    // hide the spinner after 3 seconds
    const timer = setTimeout(() => {
      hideSpinner();
    }, 3000);

    // clean up the timer on unmount
    return () => clearTimeout(timer);
  }, []);

  function showSpinner() {
    document.querySelector(".spinner").classList.add("show");
  }

  function hideSpinner() {
    document.querySelector(".spinner").classList.remove("show");
  }


  useEffect(() => {

  fetch(`${api_url}/api/users?email=${user.email}`, {
  method: "GET",
  })
  .then((res) => res.json())
  .then((data) => setUserData(data));
  }, []);
  
  useEffect(() => {
    fetch(`${api_url}/api/jobs`, {
    method: "GET",
    })
    .then((res) => res.json())
    .then((data) => {
    setJobData(data);
    });
    }, []);
  
  useEffect(() => {
    if (userData[0] && jobData.length > 0) {
      const jobIDs = userData[0].jobIDs;
      const filteredJobs = jobData.filter((job) =>
        jobIDs.includes(job.id)
      );
      setNewData(filteredJobs);
    }
  }, [userData, jobData]);




function handleClick(event, id) {
  event.preventDefault();
  const jobIDs = userData[0].jobIDs.filter((jobID) => jobID !== id);
  setUserData([{ ...userData[0], jobIDs }]);
  setNewData(newData.filter((job) => job.id !== id));
  fetch("/api/users", {
    method: "PUT",
    body: JSON.stringify({
      id: userData[0].id,
      jobIDs,
    })
  })
}

 

  function getDate(data) {
    let date_1 = new Date(data.postedat);
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
  

  console.log(userData)
  console.log(jobData)

  console.log(newData)
  
  return (
    <div className="text-center">
      <h1 className="text-2xl mb-4">Saved Jobs</h1>
  {newData.map((data) => (
  <Link href={`/job/${data.jobUrl}`}>
  <div
  className={`mx-4 lg:mx-20 rounded-lg  mb-4 lg:mb-7 border border-[#2c4f43] bg-[#edebea] lg:rounded-lg py-4 pl-4 hover:bg-[#dbd7d4] ${data?.featured && "bg-lightYellow-100"
    }`}
>
  <div className="z-0" >
  <div className="flex flex-col gap-3">
    <div className="flex flex-row justify-between">
      <div className="flex flex-row items-center gap-3 md:gap-4">
        {data?.logo && (
          <div className="self-start lg:self-center">
            

            <img
              src={`https://ecomportal-images.storage.googleapis.com/images/${data.logo}`}
              alt=""
              className="w-14 h-14 min-w-[56px] min-h-[56px] border border-lightGray-200 rounded-lg"
            />
          </div>
        )}
        <div>
          <div className="flex flex-col font-montserrant md:flex-row items-center gap-1 lg:gap-3 xl:gap-6">
            <div>
              {data?.job_position && (
                <h2 className="text-black md:text-lg leading-5 md:leading-6 lg:!leading-30 font-montserrant tracking-common font-medium">
                  <a href={`/job/${data?.jobUrl}`}>{data.job_position}</a>
                </h2>
              )}
              <div className="flex flex-wrap flex-row  items-center justify-start gap-2 lg:gap-3">
                {data?.emp_count && (
                  <p className="flex flex-row items-center gap-2 ">
                    <UserIcon />
                    <span className="font-montserrant font-normal text-sm text-black tracking-common opacity-60 leading-6 lg:!leading-30">
                      {parseInt(data.emp_count) > 5
                        ? `5 - ${data.emp_count} Employees`
                        : `0 - ${data.emp_count} Employees`}
                    </span>
                  </p>
                )}
                {(data?.salaryMin && data?.salaryMax !== "null") || 0 ? (
                  <p className="flex flex-row items-center gap-2 ">
                    <SalaryIcon />
                    <span className="font-montserrant font-normal text-sm text-black tracking-common opacity-60 leading-6 lg:!leading-30">
                      {data?.salaryMin && data?.salaryMax && data.salaryMin !== "0"
? data.salaryMin === data.salaryMax
? data.salaryMax >= 10000
? `$${data.salaryMax}/yr`
: ""
: data.salaryMin >= 10000 && data.salaryMax >= 10000
? `$${data.salaryMin} - $${data.salaryMax}`
: data.salaryMin >= 10000
  ? `$${data.salaryMin} -`
  : data.salaryMax >= 10000
    ? ` - $${data.salaryMax}`
    : ""
: ""}
                    </span>
                  </p>
                ) : (
                  ""
                )}
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center gap-2  md:gap-6 self-start">
              {data?.postedat && (
                <div className="flex flex-row items-center gap-1 md:gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-lightGray-300" />
                  <p className="font-montserrant font-medium text-black text-sm leading-6 lg:!leading-30 tracking-common opacity-50">
                    {getDate(data)}
                  </p>
                </div>
              )}
              {data?.featured && (
                <p className="font-medium text-xs tracking-common text-black font-montserrant bg-lightGreen-100 rounded-lg px-4 py-2">
                  Featured
                </p>
              )}
            </div>
          </div>
        </div>
      </div>

   {/* <div onClick={handleClick} className="border border-lightGray-100 rounded-md w-11 h-11 flex justify-center items-center cursor-pointer">
        <Icon />
      </div> */}
    </div>
   
    <div className="w-full lg:mt-2  flex flex-row flex-wrap gap-2 justify-start items-center">
      {data?.job_category && (
        <div className="py-1.5 px-4 bg-[#709771] rounded-xl">
          <p className="font-montserrant font-medium text-xs text-white leading-4">
            {data.job_category}
          </p>
        </div>
      )}
      {data?.job_type && (
        <div className="py-1.5 px-4 bg-[#2d4f42] rounded-xl">
          <p className="font-montserrant font-medium text-xs text-white
           leading-4">
            {data.job_type}
          </p>
        </div>
      )}
         {/* {data?.company_url && (
          <a
            href={`${data.company_url}`}
            target="_blank"
            className="flex flex-row items-center gap-2 cursor-pointer"
          >
            <World />
            <span className="font-montserrant font-normal text-sm leading-6 lg:!leading-30 tracking-common text-black opacity-80 break-all">
              {data.company_url}
            </span>
          </a>
        )} */}
             {(data?.city || data?.location) && (
          <p className="flex flex-row items-center  gap-2 cursor-pointer">
            <Location />
            <span className="font-montserrant font-normal text-sm leading-6 lg:!leading-30 tracking-common text-black opacity-80 break-all">
              {data?.city} {data?.location}
            </span>
          </p>
        )}
        
    
    </div>
    <div className="w-full md:w-auto ">
              <button
                id="cancel-btn"
                onClick={(event) => handleClick(event, data.id)}
                className=" bg-[#2d4f42] absolute right-2 lg:right-16  font-monteserrant text-white font-semibold text-xs leading-6 md:!leading-30 py-1.5 px-2 md:px-4 md:py-2 rounded-3xl hover:bg-[#567369]"
              >
          X
              </button>
            </div>


  </div>
</div>
</div>
</Link>
          ))}
          <div class="spinner"></div>
          </div>
        )
        }


