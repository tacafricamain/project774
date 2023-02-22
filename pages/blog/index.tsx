import type { NextPage } from "next";

const Blog: NextPage = () => {
  return (
    <div className="w-full bg-gradient-to-br from-blue-300 to-slate-100">
      <div className="w-10/12 mx-auto space-y-6 pt-36">
        <div className="flex flex-col space-y-4 pb-12">
          <span className="text-4xl font-semibold text-black">
            Speeding up Digital Inclusion
          </span>
          <span className="text-base font-light text-gray-500">
            Blessing | September 21, 2022
          </span>
        </div>
        <div className="w-full h-56 bg-gray-400 object-contain rounded-xl"></div>
        <div className="flex gap-4 w-10/12 mx-auto py-12 justify-between">
          <span className="w-1/6 text-base font-light text-gray-500">
            Written by <br />
            Blessing
          </span>
          <div className="w-5/6 space-y-4">
            <p className="text-base font-light text-gray-500 leading-6">
              Early this year, Nigerian health tech startup Remedial Health
              announced plans to scale within the West African country,
              digitizing pharmacies and bringing efficiency in the
              pharmaceutical supply chain after raising pre-seed funding.
            </p>
            <p className="text-base font-light text-gray-500 leading-6">
              Since February, the YC-backed startup has grown its reach from six
              to 16 states within the populous nation, and plans to cover the
              remaining 20 as it embarks on a path to deepen its operations
              across the country. Buoyed by a new $4.4 million equity seed
              round, Remedial Health is also looking for growth opportunities in
              East and West Africa.
            </p>
            <p className="text-base font-light text-gray-500 leading-6">
              The latest round was led by Global Ventures, the VC firm that
              co-led its pre-seed round, with participation from Tencent, Y
              Combinator, Cathexis Ventures, Lightspeed Venture Partners Scout
              Fund, Ventures Platform, Alumni Ventures and True Capital
              Management, and a number of angel investors, including Guillaume
              Luccisano and Christopher Golda.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
