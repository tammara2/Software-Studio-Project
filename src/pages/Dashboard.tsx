import { FunctionComponent } from "react";
import MonthlyCon from "../components/MonthlyCon";
import AmericaCon from "../components/AmericaCon";
import ConGoal from "../components/ConGoal";
import ImagePlot from "../components/ImagePlot";

const Dashboard: FunctionComponent = () => {
  return (
    <div className="relative bg-beige w-full h-[1060px] overflow-hidden text-left text-2xl text-gray-900 font-poppins">
      <div className="absolute top-[148px] left-[calc(50%_-_578.5px)] w-[1168px] h-[143px]">
        <img
          className="absolute top-[-50px] left-[calc(50%_-_644px)] rounded-[30px] w-[1288px] h-[263px]"
          alt=""
          src="../rectangle-15.svg"
        />
        <div className="absolute top-[28.41px] left-[calc(50%_-_492px)] w-[1033.19px] h-[83.34px]">
          <div className="absolute top-[1.59px] left-[calc(50%_-_408.91px)] w-[733.31px] h-[80px]">
            <div className="absolute top-[0.3px] left-[calc(50%_-_366.66px)] text-sm tracking-[-0.01em] text-gray-400 inline-block w-[188.93px] h-[19.89px]">
              Daily Concentration
            </div>
            <MonthlyCon monthlyVal="413 ppm" />
            <AmericaCon americaVal="460 ppm" />
            <img
              className="absolute h-full top-[0%] bottom-[0%] left-[calc(50%_-_-286.66px)] max-h-full w-[80px]"
              alt=""
              src="../group-10.svg"
            />
          </div>
          <div className="absolute top-[0px] left-[calc(50%_-_134.6px)] w-[651.19px] h-[81.59px] text-sm text-gray-400">
            <div className="absolute top-[1.89px] left-[calc(50%_-_218.47px)] tracking-[-0.01em] inline-block w-[173.38px] h-[19.89px]">{`2021 Concentration `}</div>
            <div className="absolute top-[0px] left-[calc(50%_-_-162.98px)] tracking-[-0.01em] inline-block w-[162.62px] h-[19.89px]">
              Concentration Goal
            </div>
            <img
              className="absolute top-[1.59px] left-[calc(50%_-_325.6px)] w-[80px] h-[80px]"
              alt=""
              src="../group-101.svg"
            />
          </div>
          <div className="absolute top-[1.59px] left-[calc(50%_-_516.6px)] w-[1033px] h-[80px] text-gray-1100">
            <ConGoal goalVal="350 ppm" />
            <img
              className="absolute top-[0px] left-[calc(50%_-_516.5px)] w-[80px] h-[80px]"
              alt=""
              src="../group-102.svg"
            />
          </div>
          <div className="absolute top-[0.45px] left-[calc(50%_-_206.13px)] border-r-[1px_solid_#f0f0f0] box-border w-[1px] h-[83.39px]" />
          <div className="absolute top-[0.45px] left-[calc(50%_-_-165.74px)] border-r-[1px_solid_#f0f0f0] box-border w-[1px] h-[83.39px]" />
        </div>
      </div>
      <button className="cursor-pointer [border:none] p-[0] bg-[transparent] absolute top-[926px] left-[calc(50%_-_335.5px)] w-[318px] h-[73px] hover:cursor-pointer hover:animate-[1s_ease_0s_1_normal_none_pulsate] hover:opacity-[1] active:animate-[1s_ease_0s_1_normal_none_scale-down-center] active:opacity-[1]">
        <div className="absolute top-[0px] left-[calc(50%_-_159px)] rounded-[12px] bg-indigo shadow-[0px_10px_60px_rgba(226,_236,_249,_0.5)] w-[318px] h-[73px]" />
        <div className="absolute top-[11px] left-[calc(50%_-_71px)] text-2xl tracking-[-0.01em] font-poppins text-gray-400 text-left inline-block w-[173.72px] h-[40.34px]">
          Raw Data
        </div>
        <img
          className="absolute top-[17px] left-[calc(50%_-_147px)] w-[28px] h-[37px] overflow-hidden"
          alt=""
          src="../search-1.svg"
        />
      </button>
      <a
        className="[text-decoration:none] absolute top-[926px] left-[calc(50%_-_-41.5px)] w-[318px] h-[73px] text-xl text-gray-400 hover:animate-[1s_ease_0s_1_normal_none_pulsate] hover:opacity-[1] active:animate-[1s_ease_0s_1_normal_none_scale-down-center] active:opacity-[1]"
        href={`https://mn350.org/understanding350/#:~:text=The%20origins%20of%20350%20and%20the%20history%20of%20atmospheric%20CO&text=Countless%20scientists%2C%20climate%20experts%2C%20and,275%20ppm%20of%20carbon%20dioxide.`}
        target="_blank"
      >
        <div className="absolute top-[0px] left-[calc(50%_-_159px)] rounded-[12px] bg-indigo shadow-[0px_10px_60px_rgba(226,_236,_249,_0.5)] w-[318px] h-[73px]" />
        <div className="absolute top-[17px] left-[calc(50%_-_93px)] tracking-[-0.01em] inline-block w-[230px] h-[40px]">
          What Can We Do?
        </div>
        <img
          className="absolute top-[17px] left-[calc(50%_-_147px)] w-[28px] h-[37px] overflow-hidden"
          alt=""
          src="../search-1.svg"
        />
      </a>
      <b className="absolute top-[44px] left-[calc(50%_-_504.5px)] text-4xl inline-block text-black">
        The Nueva School - Carbon Concentration
      </b>
      <ImagePlot />
      <img
        className="absolute top-[190px] left-[calc(50%_-_92.5px)] w-[56px] h-[56px] object-cover"
        alt=""
        src="../cloud-1-by-streamlinehq-1@2x.png"
      />
      <img
        className="absolute top-[191px] left-[calc(50%_-_-287.5px)] w-[55px] h-[63px] object-cover"
        alt=""
        src="../leaf-fluttering-in-wind-by-streamlinehq-1@2x.png"
      />
      <img
        className="absolute top-[186px] left-[calc(50%_-_472.5px)] w-[52px] h-[58px] object-cover"
        alt=""
        src="../u1f342-by-streamlinehq-1@2x.png"
      />
    </div>
  );
};

export default Dashboard;
