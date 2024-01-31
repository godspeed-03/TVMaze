import React , {useState, useEffect} from 'react'
import { useApiData } from '../Utils/Context'

const Herobanner = () => {
    const {loading, data, query, searchpost} = useApiData()
    const [bg, setBg] = useState("");

    useEffect(() => {
        const background =
          data[Math.floor(Math.random() * 10)]?.show?.image?.original;
        setBg(background);
      }, [data]);
  return (
    <div className="w-full bg-[#024049] flex items-center object-contain  h-[100vh]   ">
    {!loading && (
      <div className="image w-full h-full absolute top-0 left-0 opacity-50 overflow-hidden  ">
        <img className="w-full h-full object-cover" src={bg} alt="" />
      </div>
    )}

      <div className="banner flex flex-col items-center text-white text-center relative my-0 mx-auto max-w-[800px]">
        <span className="title text-[30px] md:text-[60px] mb-2 md:mb-0 font-bold">
          Welcome.
        </span>
        <span className="subtitle font-medium text-[12px] mb-10 md:text-[20px] ">
          <span>Millions of TV shows and people to discover.</span>
          <p>Explore now.</p>
        </span>
        <div className="imput flex items-center w-full ">
          <input
            className="w-full h-[30px] bg-white outline-0 border-0 rounded-3xl px-4 py-0 text-sm text-black md:h-[45px] md:text-lg md:py-0 md:px-8 "
            type="text"
            value={query}
            onChange={(e) => searchpost(e.target.value)}
            placeholder="Search for a TV show..."
          />
        </div>
      </div>
  </div>  )
}

export default Herobanner