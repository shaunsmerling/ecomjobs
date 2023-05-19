import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';
import NextSeo from "next-seo";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options1 = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top'
    },
    title: {
      display: true,
      text: 'Highest Paying Jobs At DTC Companies',
    },
  },
};

export const options2 = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top'
    },
    title: {
      display: true,
      text: 'Lowest Paying Jobs At DTC Companies',
    },
  },
};

const labels = ['Senior Software Engineer', 'Head of Product', 'Logistics Manager', 'Paid Ads Specialist', 'Staff Accountant', 'Senior Copywriter', 'Head of CRO', 'Senior Software Engineer', 'Head of Product', 'Logistics Manager', 'Paid Ads Specialist', 'Staff Accountant', 'Senior Copywriter', 'Head of CRO'];

export const data1 = {
  labels,
  
  datasets: [
    {
      label: 'Dataset 1',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 500000 })),
      backgroundColor: [
      'rgba(255, 99, 132, 0.5)',
      'RGBA(0, 128, 0, 0.5)',
      'RGBA(70, 130, 180, 0.5) ',
      'RGBA(255, 215, 0, 0.5) ',
      'RGBA(148, 0, 211, 0.5) ',
      ]
    },
  ],
};

export const data2 = {
  labels,
  
  datasets: [
    {
      label: 'Dataset 1',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 500000 })),
      backgroundColor: [
      'rgba(255, 99, 132, 0.5)',
      'RGBA(0, 128, 0, 0.5)',
      'RGBA(70, 130, 180, 0.5) ',
      'RGBA(255, 215, 0, 0.5) ',
      'RGBA(148, 0, 211, 0.5) ',
      ]
    },
  ],
};

export default function Salaries() {
  return   (  <div className="flex mx-20 mb-20">
     <NextSeo
   title="Salary Stats | eComPortal"
   description="Salary data for jobs on eComportal" 
   openGraph={{
     url: 'https://www.url.ie/a',
     title: 'Open Graph Title',
     description: 'Open Graph Description',
     images: [
       {
         url: 'https://www.example.ie/og-image-01.jpg',
         width: 800,
         height: 600,
         alt: 'Og Image Alt',
         type: 'image/jpeg',
       },
     ],
     siteName: 'SiteName',
   }}
   twitter={{
     site: '@ecomptral',
     cardType: 'summary',
     image: "/logo.png"
   }}
 />
  <div className="flex-1">
    <Bar height={400} width={400} options={options1} data={data1} />
  </div>
  <div className="flex-1">
    <Bar height={400} width={400} options={options2} data={data2} />
  </div>
  
</div>
);
}
