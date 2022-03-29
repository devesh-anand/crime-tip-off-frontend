import React, { useEffect, useState } from 'react'

function ReportTables() {

    const data = [
        {
            DateTime: "jcg",
            Category: "Kidnapping",
            Description: "",
            ExpectedCrimeDate: "",
            Location: ""
        },
        {
            DateTime: "",
            Category: "Theft",
            Description: "",
            ExpectedCrimeDate: "",
            Location: ""
        },
        {
            DateTime: "",
            Category: "Theft",
            Description: "",
            ExpectedCrimeDate: "",
            Location: ""
        },
    ]

    const [reports, setReports] = useState([]);

    useEffect(()=> {
        async function getReports(){
            await fetch('', {

            }).then((res)=> res.json())
            .then((data)=> console.log(data))
        }

        getReports()
    }, [])

  return (
    <div className='p-10'>
        <h2 className='text-3xl font-semibold'>Reports</h2>
        <div className='mt-10 rounded-md bg-slate-300 py-2 flex justify-between items-center flex-wrap'>
            <div className='w-1/5 text-center'>Date/Time</div>
            <div className='w-1/5 text-center'>Category</div>
            <div className='w-1/5 text-center'>Description</div>
            <div className='w-1/5 text-center'>Expected Crime Date</div>
            <div className='w-1/5 text-center'>Location</div>
        </div>
        {
            data.map((elem, index)=> {
                return <div className='py-3 flex justify-between items-center flex-wrap'>
                <div className='w-1/5 text-center'>{elem.DateTime}</div>
                <div className='w-1/5 text-center'>{elem.Category}</div>
                <div className='w-1/5 text-center'>{elem.Description}</div>
                <div className='w-1/5 text-center'>{elem.ExpectedCrimeDate}</div>
                <div className='w-1/5 text-center'>{elem.Location}</div>
            </div>
            })
        }
        
    </div>
  )
}

export default ReportTables