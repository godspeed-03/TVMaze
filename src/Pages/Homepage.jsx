import Card from "../Components/Card";
import Loader from "../Components/Loader";
import { useApiData } from "../Utils/Context";
import { useState, useEffect } from "react";

const Homepage = () => {
  const { loading, data } = useApiData();
  const [bg, setBg] = useState("");
  console.log(data);

  useEffect(() => {
    const background =
      data[Math.floor(Math.random() * 10)]?.show?.image?.original;
    setBg(background);
  }, [data]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div
          className="w-full bg-cover bg-scroll shadow-2xl bg-no-repeat bg-top "
          style={{ backgroundImage: `url('${bg}')` }}
        >
          <div className="w-full h-full bg-white/[0.7]  flex flex-col justify-center items-center ">
            <div className="banner flex flex-col items-center text-black text-center mx-auto max-w-[800px]">
              <span className="title text-[30px] md:text-[60px] mb-2 md:mb-0 font-bold">
                Welcome.
              </span>
              <span className="subtitle font-medium text-[12px] mb-10 md:text-[20px] ">
                <span>Millions of TV shows and people to discover.</span>
                <p>Explore now.</p>
              </span>
            </div>
            <div className="md:mt-8 mt-5 z-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 object-contain md:mx-32 sm:mx-16 mx-8">
              {data.map((item) => {
                return (
                  <div className="card" key={item.score}>
                    <Card
                      name={item?.show?.name}
                      id={item?.show?.id}
                      date={item?.show?.premiered}
                      url={item?.show?.image?.original}
                    />
                  </div>
                );
              })}
            </div>
            )
          </div>
        </div>
      )}
    </>
  );
};

export default Homepage;
