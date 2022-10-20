import { FunctionComponent } from "react";

const FrameComponent: FunctionComponent = () => {
  return (
    <div className="relative bg-white w-full h-[650px] overflow-hidden text-left text-lg text-black font-poppins">
      <div className="absolute top-[272px] left-[80px] tracking-[-0.01em] inline-block">
        <p className="[margin-block-start:0] [margin-block-end:0px]">testing</p>
      </div>
      <div className="absolute top-[79px] left-[83px] w-[56px] h-[56px] overflow-hidden">
        <img
          className="absolute h-[7.96%] w-[60.96%] top-[85.79%] right-[19.52%] bottom-[6.25%] left-[19.52%] max-w-full overflow-hidden max-h-full opacity-[0.15]"
          alt=""
          src="../vector.svg"
        />
        <img
          className="absolute h-[58.69%] w-[80.48%] top-[11.11%] right-[9.85%] bottom-[30.21%] left-[9.67%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="../vector1.svg"
        />
        <img
          className="absolute h-[23.25%] w-[80.28%] top-[46.54%] right-[9.85%] bottom-[30.21%] left-[9.87%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="../vector2.svg"
        />
        <img
          className="absolute h-[59.58%] w-[81.37%] top-[10.66%] right-[9.41%] bottom-[29.76%] left-[9.22%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="../vector3.svg"
        />
        <img
          className="absolute h-[14.41%] w-[9.48%] top-[28.24%] right-[36.12%] bottom-[57.35%] left-[54.41%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="../vector4.svg"
        />
      </div>
    </div>
  );
};

export default FrameComponent;
