import Card from "../Components/Card";
import { useApiData } from "../Utils/Context";
import { FaEye } from "react-icons/fa";
import Herobanner from "./Herobanner";

const Homepage = () => {
  const { data } = useApiData();
  
  // console.log(data[0].score)
  // console.log(data[0].show.image.original)

  return (
    <>
    <div className="herobanner">
<Herobanner />
</div>
      <div className=" relative md:mt-32  mt-28 z-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 object-contain md:mx-32 sm:mx-16 mx-8">
        {data.map((item) => {
          // const { score, show } = item;
          return (
<>
<Card 

url = {item?.show?.image?.original}

/>
</>
          );
        })}
      </div>
    </>
  );
};

export default Homepage;
