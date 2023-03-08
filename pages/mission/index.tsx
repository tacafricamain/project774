/* eslint-disable @next/next/no-img-element */
import type { NextPage } from "next";

const Mission : NextPage = () => {
    return (
        <div className="w-full bg-gradient-to-br from-blue-300 to-slate-100">
          <div className="w-10/12 mx-auto space-y-6 pt-36">
            <div className="flex flex-col space-y-4 pb-12">
              <span className="text-4xl font-semibold text-black">
              MISSION AND VISION 
              </span>
              <span className="text-base  text-gray-500">
              Technology Against Crime | March 7, 2023
              </span>
            </div>
            <div className="w-full aspect-video bg-gray-400 object-contain rounded-xl overflow-hidden">
                <img src="https://res.cloudinary.com/tacafrica/image/upload/v1678189517/project%20774/IMG-20230228-WA0003_t7g0nq.jpg" alt="project 774" />
            </div>
            <div className="flex flex-col gap-4 w-10/12 max-md:w-full mx-auto py-12 justify-between">
              <div className=" space-y-4">
                <p className="text-base  text-gray-800 leading-6">
                The Vision of Project 774 is to create an integrated Digital inclusive Society that improves the quality of life of Nigerian citizens in remote communities in the 774 local government areas {`LGAs`} and to drive the growth of the Digital Economy in Nigeria through a community-based approach. 
                The long term aim of the project is not just to catch up with urban areas and bridge the digital divide, but also to build partnerships with cities and rural communities. A key focus of the project is to expand the vision of our community-centered Digital Hub where all community residents and businesses in every Local Government Area is directly involved in the digital transformation in Nigeria and to close the gap between the rural-urban digital divide.
                The overall mission is to harness digital technologies and innovation in order to transform remote communities to promote inclusive economic growth, stimulate job creation, erase the digital divide and eradicate poverty to secure the benefits of the digital revolution for socio-economic development.
                </p>
              </div>
            </div>
          </div>
        </div>
      );
}

export default Mission