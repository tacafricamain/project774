/* eslint-disable @next/next/no-img-element */
import type { NextPage } from "next";

const TheIssue : NextPage = () => {
    return (
        <div className="w-full bg-gradient-to-br from-blue-300 to-slate-100">
          <div className="w-10/12 mx-auto space-y-6 pt-36">
            <div className="flex flex-col space-y-4 pb-12">
              <span className="text-4xl font-semibold text-black">
                The Issue
              </span>
              <span className="text-base  text-gray-500">
              Technology Against Crime | March 7, 2023
              </span>
            </div>
            <div className="w-full aspect-video bg-gray-400 object-contain rounded-xl overflow-hidden">
                <img src="https://res.cloudinary.com/tacafrica/image/upload/v1678189520/project%20774/YOd20230216015_bmfe0f.jpg" alt="project 774" />
            </div>
            <div className="flex flex-col gap-4 w-10/12 max-md:w-full mx-auto py-12 justify-between">
              {/* <span className="w-1/6 text-base font-light text-gray-500">
                Written by <br />
                Blessing
              </span> */}
              <div className=" space-y-4">
                <p className="text-base text-gray-800 leading-6">
                The Digital ecosystem in Nigeria is hindered by exclusion, illiteracy and skill gaps. And while online training initiatives are growing in popularity, low enrollment in basic education combined with a lack of digital literacy and skills in curricula, including a lack of digital infrastructures, internet services and connectivity {`low establishment of telecommunication network masts`}, access to digital devices, affordability or simply a choice to stay unconnected is keeping the most vulnerable communities not digitally connected and out of the digital economy. Poverty and inequality remain persistent global challenges and Africa is particularly affected by this problem, with 40% of its people living in poverty. Countries with a lot of uneducated youths, like Nigeria, face the risk of restiveness and instability which stalls development and economic development. The Project 774 initiative aims to take digital literacy to the seven hundred and seventy-four local government areas in Nigeria in a bid to tackle these issues, aid growth and development and provide employment opportunities to the Youths.
                </p>
              </div>
              
              </div>
          </div>
        </div>
      );
}

export default TheIssue