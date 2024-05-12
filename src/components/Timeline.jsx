import React from 'react'

const Timeline = () => {


    const timeline = [
        {
            keys:1,
            year:"2003",
            title: "Born",
            month:"Sep",
            date:23,
            description:"I came into this world on September 23, 2003, at the of 2 o'clock in the night, marking the beginning of life journey filled with endless possibilities and uncetenities."
        },
        {
            keys:2,
            year:"2007",
            title: "School (UKG)",
            month:"Apr",
            date:1,
            description:"My educational journey started as I entered UKG in April 2007, opening the door to the world of learning, friendships, and exciting discoveries."
        },
        {
            keys:3,
            year:"2009",
            title: "School (1st Class)",
            month:"Apr",
            date:1,
            insitition:"School Name - Kendriya Vidyalaya No. 1, Kankarbagh, Patna, Bihar",
            description:"Stepping into the first grade in April 2009 at Kendriya Vidyalaya No. 1, Kankarbagh, Patna, Bihar. It was a period of academic growth and building a strong educational foundation."
        },
        {
            keys:4,
            year:"2018",
            title: "School (10th Class)",
            month:"June",
            date:23,
            insitition:"School Name - Kendriya Vidyalaya No.2 Raipur, Chhattisgarh",
            description:"I entered Class 10 in 2018 and completed it in June 2019 at Kendriya Vidyalaya No.2 Raipur, Chhattisgarh. It was a period of focused studies and hard work, paving the way for the next phase of my academic journey."
        },
        {
            keys:5,
            year:"2021",
            title: "12th Class (Schooling Completed)",
            month:"Aug",
            date:31,
            insitition:"School Name - Kendriya Vidyalaya No.2 Raipur, Chhattisgarh",
            description:"On August 31, 2021, I successfully concluded my 12th-grade studies, majoring in Physics, Chemistry, and Mathematics (PCM) at Kendriya Vidyalaya No.2 Raipur, Chhattisgarh. This significant milestone encapsulated a chapter filled with accomplishments, fond memories, and invaluable lessons.",
        },
        {
            keys:6,
            year:"2021",
            title: "Collage",
            month:"Nov",
            date:'08',
            insitition:"Collage Name - Bhilai Institute Of Technology, Durg, Chhattisgarh",
            description:"Since November 2021, I've been pursuing Computer Science Engineering at Bhilai Institute Of Technology, Durg, Chhattisgarh. Navigating through the dynamic world of engineering education, each day brings new challenges and opportunities for growth. As I continue this academic journey, I'm learning, adapting, and discovering more about the this field.",
        },
        {
            keys:7,
            year:"",
            title: "",
            month:"",
            date:'',
            insitition:"",
            description:"",
            className:"border-dashed min-h-[100px]",
            blink: "animate-ping"
        },
    ]
  return (
    <div className="md:w-3/4 p-5 pt-0">
             <h1 className="font-bold italic text-xl">Life Time</h1>
             <div className="relative text-left lg:p-5">
                {timeline.map((data)=>
                    (
                        <div key={data.keys} id={data.keys} className="spotlight flex items-center relative ml-3 lg:pl-10">
                            <div className="hidden md:block w-20">
                                <div className="font-bold italic">{data.year}</div>
                                <div className="md:flex space-x-1 text-xs absolute z-20 -translate-x-3">
                                    <div>{data.month}</div>
                                    <div>-</div>
                                    <div>{data.date}</div>
                                </div>                        
                            </div>
                            
                            <div className={`${data.className} border-r-2 border-black absolute h-full left-1 md:left-20 top-2 z-10 `}>
                                <div className={`${data.blink} w-4 h-4 rounded-full bg-black absolute -left-[7px] -top-1`}></div>
                            </div>

                            <div className="pl-5">
                                <div className="font-bold">{data.title}</div>
                                <div className="mb-2 mt-1 md:hidden">
                                    <div className="font-bold">{data.year}</div>
                                    <div className="text-xs">{data.month}-{data.date}</div>
                                </div>
                                <div className="font-semibold italic">{data.insitition}</div>
                                <div className="mb-10 mt-2 w-96 text-justify">{data.description}</div>
                                <div>{data.name}</div>
                            </div>
                        </div>
                    )
                 )}
             </div>
         </div>
  )
}

export default Timeline