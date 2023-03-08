/* eslint-disable @next/next/no-img-element */
import type { NextPage } from "next";

const Mission : NextPage = () => {
    return (
        <div className="w-full bg-gradient-to-br from-blue-300 to-slate-100">
          <div className="w-10/12 mx-auto space-y-6 pt-36">
            <div className="flex flex-col space-y-4 pb-12">
              <span className="text-4xl font-semibold text-black">
              OUR TEAM 
              </span>
              <span className="text-base  text-gray-500">
              Technology Against Crime | March 7, 2023
              </span>
            </div>
            <div className="w-full aspect-video bg-gray-400 object-contain rounded-xl overflow-hidden">
                <img src="https://res.cloudinary.com/tacafrica/image/upload/v1678189517/project%20774/IMG-20230228-WA0003_t7g0nq.jpg" alt="project 774" />
            </div>
            <div className="flex flex-col gap-4 w-10/12 max-md:w-full mx-auto py-12 justify-between">
              
              <div className="space-y-4">
                <ul className="list-disc ml-4">
                    <li>Jerry Akubo {`Organization CEO`}</li>
                    <li>Olisa Ogbechie {`Project Coordinator`}</li>
                    <li>Mark Saiki {`Project Manager`}</li>
                    <li>Oiza Emmanuel {`Lead Researcher/Social Media Manager`}</li>
                    <li>Legal Adviser</li>
                    <li>Pirihaborfa J. Sammy (Business Developer)</li>
                    <li>Accountant</li>
                    <li>Jahswill Emmanuel (Graphic Designer/Content Creator)</li>
                    <li>Sam (Architect)</li>
                    <li>Ecaji Onah (IT Personnel/Web Developer)</li>
                    <li>Ibrahim Ali (PR &amp; Media Rep/Research Associate)</li>
                    <li>Umar Salau (Associate Content Creator/Research Associate)</li>
                    <li>Abdul-Azeez Ocheja (Training Manager)</li>
                </ul>
                </div>
            </div>
          </div>
        </div>
      );
}

export default Mission