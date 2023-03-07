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
                <img src="https://res.cloudinary.com/tacafrica/image/upload/v1678189517/project%20774/YOd20230216021_vshcsg.jpg" alt="project 774" />
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
              <div className=" space-y-4">
              <span className="text-2xl font-semibold text-black">
              MISSION AND VISION 
              </span>
                <p className="text-base  text-gray-800 leading-6">
                The Vision of Project 774 is to create an integrated Digital inclusive Society that improves the quality of life of Nigerian citizens in remote communities in the 774 local government areas {`LGAs`} and to drive the growth of the Digital Economy in Nigeria through a community-based approach. 
                The long term aim of the project is not just to catch up with urban areas and bridge the digital divide, but also to build partnerships with cities and rural communities. A key focus of the project is to expand the vision of our community-centered Digital Hub where all community residents and businesses in every Local Government Area is directly involved in the digital transformation in Nigeria and to close the gap between the rural-urban digital divide.
                The overall mission is to harness digital technologies and innovation in order to transform remote communities to promote inclusive economic growth, stimulate job creation, erase the digital divide and eradicate poverty to secure the benefits of the digital revolution for socio-economic development.
                </p>
              </div>
              
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-black">OUR TEAM</h2>
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

              
              <div className=" space-y-4">
              <span className="text-2xl font-semibold text-black">
                GET INVOLVED
              </span>
                <p className="text-base  text-gray-800 leading-6">
                    We are always looking for more volunteers with diverse experiences from different walks of life, people of color and of all races.  You can volunteer to be our representative in any of the 774 Local Government Areas, donate materials to aid learning in these rural communities, sponsor the project and so much more. (There should be three tabs, Sponsor, Donate and Volunteer)
                </p>
              </div>
              
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