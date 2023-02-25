import type { NextPage } from "next";

const Contact: NextPage = () => {
  return (
    <div className="w-full bg-gradient-to-br from-blue-300 to-slate-100">
      <div className="w-10/12 mx-auto py-28">
        <div className="w-3/6 max-md:w-full flex flex-col space-y-6 mb-12">
          <span className="text-4xl font-semibold text-black">
            Opps! {`We're`} not Done!
          </span>
          <span className="text-xl font-light leading-6 text-gray-500">
            Hi there, The database is being curated. Rest assured {`we're`} working on giving you access to a wide range of information.
          </span>
          <span className="pt-8 font-light leading-6 text-xl text-gray-500">
            Provide your email. {`We'll`} send you a copy when done.
          </span>
          <button className="bg-green-500 px-4 py-1 text-white font-medium shadow-lg w-44">
            Submit Email
          </button>
        </div>
      </div>
    </div>
    );
};

export default Contact;
