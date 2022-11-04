import { useEffect, useState } from "react";
import { useRouter } from "next/router";

function Company() {
  const [companyData, setCompanyData] = useState({
    company_name: "",
    company_url: "",
    company_description: "",
    city: "",
    logo: "",
    location: "",
  });

  const [jobs, setJobs] = useState([]);

  const router = useRouter();
  const { companyId } = router.query;

  useEffect(() => {
    if (companyId) {
      fetch("/api/company?id=" + companyId, {
        method: "GET",
      })
        .then((res) => res.json())
        .then((jsonResponse) => setCompanyData(jsonResponse));
    }
  }, [companyId]);

  useEffect(() => {
    if (companyId) {
      fetch("/api/jobs?companyId=" + companyId, {
        method: "GET",
      })
        .then((res) => res.json())
        .then((jsonResponse) => setJobs(jsonResponse));
    }
  }, [companyId]);

  console.log(jobs, "JOBS");

  return (
    <div className="bg-gray-100 pb-10">
      <link
        rel="stylesheet"
        href="https://demos.creative-tim.com/notus-js/assets/styles/tailwind.css"
      />
      <link
        rel="stylesheet"
        href="https://demos.creative-tim.com/notus-js/assets/vendor/@fortawesome/fontawesome-free/css/all.min.css"
      />

      <main class="profile-page">
        <section class="relative block  h-500-px">
          <div class="absolute top-0 w-full h-full bg-center bg-cover"></div>
        </section>
        <section class="relative">
          <div class="container mx-auto  px-4">
            <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-96">
              <div class="mx-40 lg:mx-0">
                <div class="flex flex-wrap justify-center">
                  <div class="w-full lg:w-3/12  lg:order-2 flex justify-center">
                    <div class="relative">
                      <img class=" p-10 lg:p-10 border-2 border-gray-100 bg-white rounded-full  -mt-16 " />
                    </div>
                  </div>
                  <div class="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center">
                    <div class="py-6 px-3 mt-32 sm:mt-0"></div>
                  </div>
                  <div class="w-full lg:w-4/12 px-4 lg:order-1">
                    <div class="flex justify-center py-4 lg:pt-4 pt-8">
                      <div class="mr-4 p-3 text-center">
                        <span class="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                          2
                        </span>
                        <span class="text-sm text-blueGray-400">
                          New Open Roles
                        </span>
                      </div>
                      <div class="mr-4 p-3 text-center">
                        <span class="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                          1000+
                        </span>
                        <span class="text-sm text-blueGray-400">Employees</span>
                      </div>
                      <div class="lg:mr-4 p-3 text-center">
                        <span class="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                          5
                        </span>
                        <span class="text-sm text-blueGray-400">
                          Years Since Founded
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="text-center mt-4">
                  <h3 class="text-4xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2">
                    {companyData.company_name}
                  </h3>

                  <div class="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
                    <i class="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400"></i>
                    {companyData.city} {companyData.location}
                  </div>

                  <p className="text-xl lg:px-10 mx-auto mt-10 mb-8 ">
                    {" "}
                    {companyData.mission
                      ? companyData.mission
                      : companyData.company_description}
                  </p>
                  <div class="mb-2 text-blueGray-600 mt-10">
                    <i class="fas fa-briefcase mr-2 text-lg text-blueGray-400"></i>
                    <a href={companyData.company_url} className="text-sky-400">
                      {companyData.company_url}
                    </a>
                  </div>
                  <div class="mb-2 text-blueGray-600">
                    <i class="fas fa-university mr-2 text-lg text-blueGray-400"></i>
                  </div>
                </div>
                <div class="mt-10 py-10 border-t border-blueGray-200 text-center">
                  <div class="flex flex-wrap justify-center">
                    <div class="w-full lg:w-9/12 px-4">
                      <div>
                        <p className="hidden lg:block text-center text-3xl  ">
                          Available Jobs
                        </p>
                      </div>

                      <a target="_blank">
                        <div className={`flex flex-col my-10 lg:mx-20 pb-2 `}>
                          <ul
                            className={`   rounded-lg text-left mb-2  flex  flex-col `}
                          >
                            {jobs?.map((job, index) => (
                              <li className="w-full ml-2 mt-2 mb-4 box-border " key={index}>
                                <img
                                  className="z-1 mt-4 ml-4 w-20 h-20 rounded-full border border-[#17614A] border-2 "
                                  src={job.logo}
                                ></img>
                                <div>
                                  <p className=" ml-2 mt-2 z-1 text-xl text-[#17614A] pb-1 hover:no-underline">
                                    {job?.company_name}
                                  </p>

                                  <p className=" ml-2 -mb-2 z-1 text-2xl text-[#17614A] z-0 font-bold pb-2 pr-20 ">
                                    {job?.job_position}
                                  </p>
                              <p>hi </p> 
                                  <p className="float-right mr-4 text-[12px] -mt-10 bold  text-sky-200 lg:text-xl">
                                    {job?.job_type} | {job?.location}
                                  </p>
                                </div>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </a>
                    </div>
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

export default Company;
