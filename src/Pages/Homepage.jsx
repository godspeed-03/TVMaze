import Card from "../Components/Card";
import Loader from "../Components/Loader";
import { useApiData } from "../Utils/Context";
import { useState, useEffect } from "react";

function Hover3D(pageX, pageY, config) {
  const { width, height, rotation, shine, tilt, rgb_from, rgb_to } = config,
    centerX = width / 2,
    centerY = height / 2,
    el = ReactDOM.findDOMNode(this),
    offsetX = (pageX - el.offsetLeft) / width,
    offsetY = (pageY - el.offsetTop) / height,
    deltaX = pageX - el.offsetLeft - centerX,
    deltaY = pageY - el.offsetTop - centerY,
    widthMultiplier = 360 / width,
    rotateX = (deltaY - offsetY) * ((rotation / 100) * widthMultiplier),
    rotateY = (offsetX - deltaX) * ((rotation / 100) * widthMultiplier),
    tiltX = (offsetY - centerY) * (tilt / 100),
    tiltY = (offsetX - centerX) * (tilt / 100),
    angleRad = Math.atan2(deltaY, deltaX),
    angleRaw = (angleRad * 180) / Math.PI - 90,
    angle = angleRaw < 0 ? angleRaw + 360 : angleRaw;

  this.setState(() => {
    return {
      rotate_3D: {
        transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg) perspective(${tiltX}deg) perspective(${tiltY}deg)`,
      },
      gradient_3D: {
        backgroundImage: `linear-gradient(${angle}deg, rgba(${rgb_from}, ${
          shine / 10
        }) 0%, rgba(${rgb_to}, .8) 50%)`,
      },
    };
  });
}

const config_3dCard = {
  width: 285,
  height: 356,
  rotation: 9,
  shine: 7,
  tilt: 20, // Adjust the tilt value to your preference
  rgb_from: "64,70,99",
  rgb_to: "64,78,99",
};

const Homepage = () => {
  const { loading, data } = useApiData();
  const [bg, setBg] = useState("");

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
            <div className="md:mt-8 mt-5 z-10 grid place-content-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 object-contain md:mx-32 sm:mx-16 mx-8">
              {data.map((item) => {
                return (
                  <div className="card" key={item?.show?.id}>
                    <Card
                      name={item?.show?.name}
                      id={item?.show?.id}
                      date={item?.show?.premiered}
                      url={item?.show?.image?.original}
                      onMouseMove={(e) =>
                        Hover3D.call(this, e.pageX, e.pageY, config_3dCard)
                      }
                      onMouseLeave={() =>
                        this.setState({ rotate_3D: {}, gradient_3D: {} })
                      }
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Homepage;
