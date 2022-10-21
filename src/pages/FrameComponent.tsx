import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";

const FrameComponent: FunctionComponent = () => {
  const navigate = useNavigate();

  const onBackTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className="relative bg-beige w-full h-[998px] overflow-hidden text-left text-3xl text-black font-poppins">
      <b className="absolute top-[53px] left-[calc(50%_-_424.5px)] text-4xl inline-block w-[849px] h-[87px]">
        Raw Data - Carbon Concentration
      </b>
      <div
        className="absolute top-[70px] left-[calc(50%_-_723.5px)] text-2xl inline-block w-[98px] h-[53px] cursor-pointer"
        onClick={onBackTextClick}
      >
        Back
      </div>
      <img
        className="absolute top-[calc(50%_-_251px)] left-[calc(50%_-_-272.5px)] rounded-[20px] w-[451px] h-[349px] object-cover"
        alt=""
        src="../rectangle-49wind@2x.png"
      />
      <img
        className="absolute top-[calc(50%_-_314px)] left-[calc(50%_-_225.5px)] rounded-[20px] w-[451px] h-[349px] object-cover"
        alt=""
        src="../rectangle-51mountain@2x.png"
      />
      <img
        className="absolute top-[calc(50%_-_251px)] left-[calc(50%_-_723.5px)] rounded-[20px] w-[451px] h-[349px] object-cover"
        alt=""
        src="../nueva pic@2x.png"
      />
      <img
        className="absolute top-[calc(50%_-_7px)] left-[calc(50%_-_-300.5px)] rounded-[20px] w-[394px] h-[326px]"
        alt=""
        src="../rectangle-50.svg"
      />
      <img
        className="absolute top-[calc(50%_-_33px)] left-[calc(50%_-_197.5px)] rounded-[20px] w-[394px] h-[318px]"
        alt=""
        src="../rectangle-52.svg"
      />
      <img
        className="absolute top-[calc(50%_-_-31px)] left-[calc(50%_-_694.5px)] rounded-[20px] w-[394px] h-[288px]"
        alt=""
        src="../rectangle-54.svg"
      />
      <b className="absolute top-[calc(50%_-_-48px)] left-[calc(50%_-_-328.5px)] inline-block w-[278px] h-[75px]">
        Daily Data
      </b>
      <b className="absolute top-[calc(50%_-_15px)] left-[calc(50%_-_169.5px)] inline-block w-[278px] h-[75px]">
        Our Plots
      </b>
      <b className="absolute top-[calc(50%_-_-48px)] left-[calc(50%_-_667.5px)] inline-block w-[278px] h-[75px]">
        Monthly Data
      </b>
      <a
        className="[text-decoration:none] absolute top-[calc(50%_-_-269px)] left-[calc(50%_-_-323.5px)] w-[186px] h-[33px] text-lg text-indigo"
        href="https://clamalo.github.io/downscaling-custom-domain/co2.csv"
        target="_blank"
      >
        <div className="absolute top-[calc(50%_-_16.5px)] left-[calc(50%_-_93px)] inline-block w-[186px] h-[33px]">
          SEE THE DATA
        </div>
      </a>
      <a
        className="[text-decoration:none] absolute top-[calc(50%_-_-233px)] left-[calc(50%_-_169.5px)] w-[206px] h-[33px] text-xl text-indigo hover:cursor-grab"
        href="https://github.com/NavSous/Software-Studio-Project/commits/master"
        target="_blank"
      >
        <div className="absolute top-[calc(50%_-_16.5px)] left-[calc(50%_-_103px)] inline-block w-[206px] h-[33px]">
          SEE THE CODE
        </div>
      </a>
      <div className="absolute top-[calc(50%_-_-113px)] left-[calc(50%_-_-328.5px)] text-base text-gray-400 inline-block w-[326px] h-[90px]">
        Daily data as updated by the NOAA from the Mauna Loa Observatory
      </div>
      <div className="absolute top-[calc(50%_-_-113px)] left-[calc(50%_-_667.5px)] text-base text-gray-400 inline-block w-[326px] h-[90px]">
        Monthly data as updated by the NOAA from the Mauna Loa Observatory
      </div>
      <div className="absolute top-[calc(50%_-_-53px)] left-[calc(50%_-_172.5px)] text-base text-gray-400 inline-block w-[335px] h-[90px]">
        Custom plots created by U Washington published atmospheric scientist
        Clay Malott, graphing NOAA ppm data
      </div>
      <img
        className="absolute top-[calc(50%_-_-252.97px)] left-[calc(50%_-_-300.62px)] w-[393.53px] h-[5.71px]"
        alt=""
        src="../line-6.svg"
      />
      <img
        className="absolute top-[calc(50%_-_-213.41px)] left-[calc(50%_-_197.38px)] w-[393.53px] h-[6px]"
        alt=""
        src="../line-7.svg"
      />
      <img
        className="absolute top-[calc(50%_-_-252.97px)] left-[calc(50%_-_695.38px)] w-[393.53px] h-[5.71px]"
        alt=""
        src="../line-6.svg"
      />
      <img
        className="absolute top-[calc(50%_-_-279.48px)] left-[calc(50%_-_-473.5px)] w-[19.75px] h-[11.05px]"
        alt=""
        src="../arrow-3.svg"
      />
      <img
        className="absolute top-[calc(50%_-_-244.48px)] left-[calc(50%_-_0.5px)] w-[19.75px] h-[11.05px]"
        alt=""
        src="../arrow-3.svg"
      />
      <a
        className="[text-decoration:none] absolute top-[calc(50%_-_-269px)] left-[calc(50%_-_672.5px)] w-[171px] h-[32px] text-lg text-indigo hover:cursor-grab"
        href="https://gml.noaa.gov/ccgg/trends/monthly.html"
        target="_blank"
      >
        <div className="absolute top-[calc(50%_-_16px)] left-[calc(50%_-_85.5px)] inline-block w-[157px] h-[32px]">
          SEE THE DATA
        </div>
        <img
          className="absolute top-[calc(50%_-_5.52px)] left-[calc(50%_-_-66.5px)] w-[19.75px] h-[11.05px]"
          alt=""
          src="../arrow-3.svg"
        />
      </a>
      <b className="absolute top-[814px] left-[736px] text-2xl inline-block w-[183px] h-[49px]">
        Contact Us
      </b>
      <a
        className="[text-decoration:none] absolute top-[870px] left-[699px] w-[69px] h-[69px] bg-[url(../../public/image-2@3x.png)] bg-cover bg-no-repeat bg-[top] hover:cursor-grab"
        href="https://github.com/NavSous/Software-Studio-Project"
      />
      <a
        className="[text-decoration:none] absolute top-[870px] left-[792px] w-[70px] h-[69px] bg-[url(../../public/image-3@3x.png)] bg-cover bg-no-repeat bg-[top] hover:cursor-grab"
        href="https://www.nuevaschool.org/about/notably-nueva/environmental-citizenship"
        target="_blank"
      />
      <a
        className="[text-decoration:none] absolute top-[870px] left-[886px] w-[69px] h-[69px] bg-[url(../../public/image-4@3x.png)] bg-cover bg-no-repeat bg-[top] hover:cursor-grab"
        href="https://twitter.com/claymalott"
        target="_blank"
      />
    </div>
  );
};

export default FrameComponent;
