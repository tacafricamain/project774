/* eslint-disable @next/next/no-img-element */
import type { NextPage } from "next";

const TheIssue : NextPage = () => {
    return (
        <div className="w-full bg-gradient-to-br from-blue-300 to-slate-100">
          <div className="w-10/12 mx-auto space-y-6 pt-36">
            <div className="flex flex-col space-y-4 pb-12">
              <span className="text-4xl font-semibold text-black">
              ABOUT US
              </span>
              <span className="text-base  text-gray-500">
              Technology Against Crime | March 7, 2023
              </span>
            </div>
            <div className="w-full aspect-video bg-gray-400 object-contain rounded-xl overflow-hidden">
                <img src="https://res.cloudinary.com/tacafrica/image/upload/v1678189517/project%20774/yod2023076_j2o02i.jpg" alt="project 774" />
            </div>
            <div className="flex flex-col gap-4 w-10/12 max-md:w-full mx-auto py-12 justify-between">
              
              
              <div className=" space-y-4">
              <span className="text-2xl font-semibold text-black">
                ABOUT US
              </span>
                <p className="text-base  text-gray-800 leading-6">
                The Project 774 is an ongoing initiative of the Technology Against Crime (TAC) Africa NGO. It is a project initiated to help curb the security challenges and drive the growth of the Digital Economy in Africa through a community-based approach to promote digital engagement. Project 774 aims to promote the visibility of Africa as a hub and curate technology for social good. Specifically, we aim to develop an enabling environment for connectivity, creativity and productivity across the 774 LGAs in the six geo-political zones. We create awareness for digital financial inclusion and create employment opportunities on digital jobs across different sectors of the economy and organize capacity-building programs focused on measuring and bridging the digital gender gap. To increase access to information, we provide a venue to access information and productive inputs like training, mentorship and time saving solutions and technologies to improve their productivity.
                </p>
              </div>
              
            </div>
          </div>
        </div>
      );
}

export default TheIssue