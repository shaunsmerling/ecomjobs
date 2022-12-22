import DataTable from 'react-data-table-component';
import React from "react"

const columns = [
    {
        name: '#',
        selector: row => row.num,
    },
    {
        name: 'Job',
        selector: row => row.job,
    },
    {
        name: 'Min',
        selector: row => row.min,
    },
    {
        name: 'Median',
        selector: row => row.median,
    },
    {
        name: 'Hourly',
        selector: row => row.hourly,
    },
    {
        name: 'Max',
        selector: row => row.max,
    },
];

const data = [
    {
        id: 1,
        num: '1',
        job: 'Product Manager',
        min: '$65,000/yr',
        median: '$99,000/yr',
        hourly: '$90/hr',
        max: '$136,000/yr',
    },
    {
        id: 2,
        num: '2',
        job: 'UI/UX Designer',
        min: '$50,000/yr',
        median: '$95,000/yr',
        hourly: '$50/hr',
        max: '$100,000/yr',
    },
    {
        id: 3,
        num: '3',
        job: 'UI/UX Designer',
        min: '$50,000/yr',
        median: '$95,000/yr',
        hourly: '$50/hr',
        max: '$100,000/yr',
    },
 
]

function highestSalaries() {
    return (
        <div>
            <h1 className="text-center font-bold mb-10"> Highest Paying DTC Jobs in 2022</h1>
        <DataTable
            columns={columns}
            data={data}
        />
        </div>
    );
};

export default highestSalaries