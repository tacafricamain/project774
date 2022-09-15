import type { NextPage } from 'next'
import Preloader from "../components/preloader/Preloader";
import Timer from "../components/countdown/Timer";
import Optin from "../components/optin/Optin";


const Home: NextPage = ( ) => {
  return (
    <div className="App bg-slate-600 h-screen">
      <div className="container">
        <h1>
          project 774
        </h1>
        Is an initiative by Technology Against Crime in Africa NGO. it is a project initiated to help curb <br />
        the security challenges and drive the growth of digital Economy in africa through a community based approach. <br />
        TAc Community Hub is designed to create  an enabling environment for capacity building in<br /> 
        Digital Specialized Skills and also promote the Central Bank Digital Currency inclusion amongst <br /> 
        youths in remote locations
        <h1>
          <br />
          Coming Soon
        </h1>
        <Timer />
        {/* <Optin /> */}
        <Preloader />
      </div>
    </div>
  );
}

export default Home