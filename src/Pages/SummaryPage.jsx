import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import FetchDatabyQuery from "../Utils/API";
import img from "../assets/no-poster.png";
import Loader from "../Components/Loader";

const SummaryPage = () => {
  const { id } = useParams();
  const [deatils, setDetails] = useState();
  const [loading, setloading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await FetchDatabyQuery(id);
        setDetails(data);
        setloading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [id]);

  console.log(deatils);

  const bg = deatils?.image?.original;
  const name = deatils?.name;
  const publisher = deatils?.network?.name;
  const status = deatils?.status;
  const runtime = deatils?.averageRuntime;
  const lang = deatils?.language;
  const summary = deatils?.summary;
  const rundays = deatils?.schedule?.days;
  const timing = deatils?.schedule?.time;
  const unkown = "unknown";

  console.log(status === "Running");

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div
          className=" w-full md:h-[78vh] h-full  bg-cover shadow-2xl bg-no-repeat bg-center  flex flex-col justify-center items-center"
          style={{ backgroundImage: `url('${bg ?? img}')` }}
        >
          <div className="w-full md:h-[78vh] h-full max-md:py-5 bg-white/[0.8] flex items-center justify-center">
            <div className=" max-w-[80rem] flex max-md:flex-col gap-10 mx-auto">
              <div className="left flex-[0.5] flex items-center justify-center">
                <img
                  className=" h-96 rounded-lg shadow-2xl"
                  src={bg ?? img}
                  alt=""
                />
              </div>
              <div className="right flex-[0.7] text-black max-md: pl-3">
                <div className="name text-3xl font-myfont mb-2">{name}</div>
                <div className="publisher text-2xl font-extralight">
                  <i>- {publisher ?? unkown}</i>
                </div>
                <div className="flex flex-col mt-5 gap-3">
                  <div className="runtime text-xl">
                    Runtime : {runtime ?? unkown}
                  </div>
                  <div className="language">Language : {lang ?? unkown}</div>
                </div>
                <div className="extra flex max-md:flex-col mt-5 gap-8">
                  <div className="status flex items-center ">
                    <span>Status : </span>
                    <span
                      className={` ${
                        status === "Running"
                          ? "text-green-700"
                          : status === "Ended"
                          ? "text-red-700"
                          : ""
                      } text-xl pl-2`}
                    >
                      {status}
                    </span>
                  </div>
                  <div className="status flex items-center">
                    <span>Scheduled {rundays ?? unkown} at</span>
                    <span className="text-xl pl-2">{timing ?? unknown}</span>
                  </div>
                </div>
                <div className="summary mt-10 ">
                  <p className="text-3xl font-bold mb-3">Summary :</p>
                  <p className="px-2">
                    {summary && (
                      <div dangerouslySetInnerHTML={{ __html: summary }} />
                    )}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SummaryPage;
