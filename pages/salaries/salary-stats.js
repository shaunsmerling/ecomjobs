import React, {useState, useEffect} from 'react';
import DataTable from 'react-data-table-component';
import { faker } from '@faker-js/faker';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { api_url } from "../../config";
import Link from "next/link";
import NextSeo from 'next-seo';



ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);




const columnsTop = [
  {
    name: 'Job Name',
    selector: 'jobName',
    sortable: true
  },
  {
    name: 'Max Salary (yr)',
    selector: 'maxSalary',
    sortable: true
  },
  {
    name: 'Median Salary (yr)',
    selector: 'medianSalary',
    sortable: true
  },
  {
    name: 'Hourly Salary',
    selector: 'hourlySalary',
    sortable: true
  },
  {
    name: 'Min Salary (yr)',
    selector: 'minSalary',
    sortable: true
  }
];

const columnsLow = [
  {
    name: 'Job Name',
    selector: 'jobName',
    sortable: true
  },
  {
    name: 'Min Salary (yr)',
    selector: 'minSalary',
    sortable: true
  },
  {
    name: 'Median Salary (yr)',
    selector: 'medianSalary',
    sortable: true
  },
  {
    name: 'Hourly Salary',
    selector: 'hourlySalary',
    sortable: true
  },
  {
    name: 'Max Salary (yr)',
    selector: 'maxSalary',
    sortable: true
  }
];


const columnsCategory = [
  {
    name: 'Category Name',
    selector: 'catName',
    sortable: true
  },
  {
    name: 'Open Roles',
    selector: 'openRoles',
    sortable: true
  },
  // {
  //   name: 'Median Salary (yr)',
  //   selector: 'medianSalary',
  //   sortable: true
  // },
  // {
  //   name: 'Hourly Salary',
  //   selector: 'hourlySalary',
  //   sortable: true
  // },
  // {
  //   name: 'Max Salary (yr)',
  //   selector: 'maxSalary',
  //   sortable: true
  // }
];

const jobPositionCol = [
  {
    name: 'Job Role',
    selector: 'jobRole',
    sortable: true
  },
  {
    name: 'Open Roles',
    selector: 'openRoles',
    sortable: true
  },
 
];



export default function DataTableExample({ jobs }) {

  function sortJobsBySalaryMax(jobs) {
    return jobs.sort((a, b) => b.salaryMax - a.salaryMax);
  }
  
  
  const sortedMaxJobs = sortJobsBySalaryMax(jobs);



  const topJobs = sortedMaxJobs.slice(0, 100);


  const generateTopData = () => {
    return topJobs
      .filter(job => job.salaryMax !== '1000000') // Filter out jobs with salaryMax of 1000000
      .map(job => {
        const hourly = Math.round(job.salaryMax / 2080);
        const median = (parseInt(job.salaryMax) + parseInt(job.salaryMin)) / 2;
  
        return {
          jobName: job.job_position,
          minSalary: `$${job.salaryMin}/yr`,
          medianSalary: `$${median}/yr`,
          hourlySalary: `$${hourly}/hr`,
          maxSalary: `$${job.salaryMax}/yr`
        };
      });
  };
  
  const topData = generateTopData();

  function sortJobsBySalaryMin(jobs) {
    return jobs.sort((a, b) => a.salaryMin - b.salaryMin);
  }
  
  const sortedMinJobs = sortJobsBySalaryMin(jobs);
  


  const lowJobs = sortedMinJobs.slice(0, 100);


  const generateLowData = () => {
    return lowJobs.map(job => 
      
      {
        const hourly = Math.round(job.salaryMin / 2080)
        const median = (parseInt(job.salaryMax) + parseInt(job.salaryMin)) / 2;


        return {
        jobName: job.job_position,
        minSalary: `$${job.salaryMin}/yr`,
        medianSalary: `$${median}/yr`,
        hourlySalary: `$${hourly}/hr`,
        maxSalary: `$${job.salaryMax}/yr`
      };
    });
  };

  const lowData = generateLowData();


  function countJobCategories(jobs) {
    const categoryCount = {};
    
    jobs.forEach(job => {
      const category = job.job_category;
      
      if (categoryCount[category]) {
        categoryCount[category]++;
      } else {
        categoryCount[category] = 1;
      }
    });
    
    const sortedCategories = Object.entries(categoryCount)
      .sort((a, b) => b[1] - a[1])
      .map(entry => ({ category: entry[0], count: entry[1] }));
    
    return sortedCategories;
  }

  const jobCategories = countJobCategories(jobs);


  function cateogoryCount() {
    return jobCategories.map(category => {
      return {
        catName: category.category,
        openRoles: category.count
      }
      
    })
      
  }

  const categoryData = cateogoryCount();

  function countJobPositions(jobs) {
    const positionCount = {};
    
    jobs.forEach(job => {
      const position = job.job_position;
      
      if (positionCount[position]) {
        positionCount[position]++;
      } else {
        positionCount[position] = 1;
      }
    });
    
    const sortedPositions = Object.entries(positionCount)
      .sort((a, b) => b[1] - a[1])
      .map(entry => ({ position: entry[0], count: entry[1] }));
    
    return sortedPositions;
  }

  
  const jobPositions = countJobPositions(jobs);



  function jobPositionCount() {
    return jobPositions.map(job => {
      return {
        jobRole: job.position,
        openRoles: job.count
      }
      
    })
      
  }

  const jobPositionData = jobPositionCount();



  return (
    <div className="flex-1 mx-20 font-montserrant mb-20">
      <NextSeo
   title="Salary Stats | eComPortal"
   description="Salary Stats for all Ecomportal Jobs" 
   openGraph={{
     url: 'https://www.ecomportal.co/salaries/salary-stats',
     title: 'Salary Stats | eComPortal',
     description: "Salary Stats for all Ecomportal Jobs" ,
     images: [
       {
         url: 'https://www.ecomportal.co/ll.png',
         width: 800,
         height: 600,
         alt: 'Og Image Alt',
         type: 'image/jpeg',
       },
     ],
     siteName: 'Ecomportal',
   }}
   twitter={{
     site: '@ecomptral',
     cardType: 'summary',
     image: "/ll.png"
   }}
 />
  <div className="text-right mb-10">
    <Link href={"/salaries"} className="cursor-pointer">
      <span className="cursor-pointer hover:text-sky-300">Read our salary blog &#62;</span>
    </Link>
  </div>

  <h1 className="text-center mb-10 font-bold">Highest Salaries at eCommerce Companies</h1>
  <DataTable
    title="Highest Paying Jobs At DTC Companies "
    columns={columnsTop}
    data={topData}
    pagination
    responsive
    striped
    highlightOnHover
    dense
    noHeader
  />
      <h1 className="text-center mb-10 font-bold ">Lowest Salaries at eCommerce Companies</h1>
      
      <DataTable
        title="Highest Paying Jobs At DTC Companies "
        columns={columnsLow}
        data={lowData}
        pagination
        responsive
        striped
        highlightOnHover
        dense
        noHeader
      />

<h1 className="text-center mb-10 font-bold ">Highest Demand Job Categories (Monthly)</h1>
      
      <DataTable
        title="Highest Demand Job Categories "
        columns={columnsCategory}
        data={categoryData}
        pagination
        responsive
        striped
        highlightOnHover
        dense
        noHeader
      />

<h1 className="text-center mb-10 font-bold ">Highest Demand Job Roles (Monthly)</h1>
      
      <DataTable
        title="Highest Demand Job Roles "
        columns={jobPositionCol}
        data={jobPositionData}
        pagination
        responsive
        striped
        highlightOnHover
        dense
        noHeader
      />
    
    
    
    </div>
  );
}


export async function getServerSideProps() {
  try {
    const response = await fetch(`${api_url}/api/jobs`);
    const data = await response.json();
    const filteredJobs = data.filter(job => job.salaryMin > 10000 && job.salaryMax > 10000);
    return {
      props: {
        jobs: filteredJobs,
      },
    };
  } catch (error) {
    console.error('Error:', error);
    return {
      props: {
        jobs: [], // Return an empty array or handle the error case
      },
    };
  }
}
