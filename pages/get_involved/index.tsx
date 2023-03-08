/* eslint-disable @next/next/no-img-element */
import type { NextPage } from "next";

const TheIssue : NextPage = () => {
    return (
        <div className="w-full bg-gradient-to-br from-blue-300 to-slate-100">
          <div className="w-10/12 mx-auto space-y-6 pt-36">
            <div className="flex flex-col space-y-4 pb-12">
              <span className="text-4xl font-semibold text-black">
              GET INVOLVED
              </span>
              <span className="text-base  text-gray-500">
              Technology Against Crime | March 7, 2023
              </span>
            </div>
            <div className="w-full aspect-video bg-gray-400 object-contain rounded-xl overflow-hidden">
                <img src="https://res.cloudinary.com/tacafrica/image/upload/v1678189517/project%20774/YOd20230216021_vshcsg.jpg" alt="project 774" />
            </div>
            <div className="flex flex-col gap-4 w-10/12 max-md:w-full mx-auto py-12 justify-between">

              
              <div className=" space-y-4">
              {/* <span className="text-2xl font-semibold text-black">
                
              </span> */}
                <p className="text-base  text-gray-800 leading-6">
                    We are always looking for more volunteers with diverse experiences from different walks of life, people of color and of all races.  You can volunteer to be our representative in any of the 774 Local Government Areas, donate materials to aid learning in these rural communities, sponsor the project and so much more. (There should be three tabs, Sponsor, Donate and Volunteer)
                </p>
              </div>
              
            </div>
          </div>
        </div>
      );
}

export default TheIssue