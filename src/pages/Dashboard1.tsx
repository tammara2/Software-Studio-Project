import { FunctionComponent } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form } from "react-bootstrap";

const Dashboard1: FunctionComponent = () => {
  return (
    <div className="relative bg-beige w-full h-[1198px] overflow-hidden text-left text-sm text-black font-poppins">
      <div className="absolute top-[187px] left-[377px] w-[968px] h-[151px] text-2xl text-gray-900">
        <img
          className="absolute top-[-50px] left-[-60px] rounded-[30px] w-[1088px] h-[271px]"
          alt=""
          src="../rectangle-151.svg"
        />
        <div className="absolute top-[30px] left-[63px] w-[878px] h-[88px]">
          <div className="absolute top-[2px] left-[0px] w-[482px] h-[84px]">
            <div className="absolute top-[0px] left-[104px] text-sm tracking-[-0.01em] text-gray-400 inline-block">
              Monthly Concentration
            </div>
            <div className="absolute top-[25px] left-[104px] tracking-[-0.01em] leading-[100%] font-semibold inline-block">{`4,000 lbs `}</div>
            <div className="absolute top-[27px] left-[432px] tracking-[-0.01em] leading-[100%] font-semibold inline-block">
              23t
            </div>
            <img
              className="absolute top-[0px] left-[0px] w-[84px] h-[84px]"
              alt=""
              src="../group-103.svg"
            />
            <div className="absolute top-[63px] left-[104px] w-[124px] h-[20px] text-xs text-green">
              <div className="absolute top-[2px] left-[23px] tracking-[-0.01em] inline-block">
                <b>37.8%</b>
                <span className="text-gray-1000"> this month</span>
              </div>
              <img
                className="absolute top-[0px] left-[0px] w-[20px] h-[20px] overflow-hidden"
                alt=""
                src="../arrowup-1.svg"
              />
            </div>
          </div>
          <div className="absolute top-[0px] left-[319px] w-[559px] h-[86px] text-sm text-gray-400">
            <div className="absolute top-[2px] left-[104px] tracking-[-0.01em] inline-block">{`Yearly Concentration `}</div>
            <div className="absolute top-[0px] left-[423px] tracking-[-0.01em] inline-block">
              Concentration Goal
            </div>
            <img
              className="absolute top-[2px] left-[0px] w-[84px] h-[84px]"
              alt=""
              src="../group-104.svg"
            />
            <div className="absolute top-[65px] left-[104px] w-[121px] h-[20px] text-xs text-brown">
              <b className="absolute top-[2px] left-[23px] tracking-[-0.01em] inline-block">
                103% of our Goal
              </b>
              <img
                className="absolute top-[0px] left-[0px] w-[20px] h-[20px] overflow-hidden"
                alt=""
                src="../arrowup-11.svg"
              />
            </div>
          </div>
          <div className="absolute top-[2px] left-[638px] w-[204px] h-[84px]">
            <div className="absolute top-[25px] left-[104px] tracking-[-0.01em] leading-[100%] font-semibold inline-block">
              $89k
            </div>
            <img
              className="absolute top-[0px] left-[0px] w-[84px] h-[84px]"
              alt=""
              src="../group-105.svg"
            />
            <div className="absolute top-[63px] left-[104px] w-[100px] h-[20px] text-xs text-green">
              <div className="absolute top-[2px] left-[23px] tracking-[-0.01em] inline-block">
                <b>11%</b>
                <span className="text-gray-1000"> this week</span>
              </div>
              <img
                className="absolute top-[0px] left-[0px] w-[20px] h-[20px] overflow-hidden"
                alt=""
                src="../arrowup-12.svg"
              />
            </div>
          </div>
          <div className="absolute top-[0.5px] left-[273.5px] border-r-[1px_solid_#f0f0f0] box-border w-[1px] h-[88px]" />
          <div className="absolute top-[0.5px] left-[584.5px] border-r-[1px_solid_#f0f0f0] box-border w-[1px] h-[88px]" />
        </div>
      </div>
      <div className="absolute top-[399px] left-[359px] w-[986px] h-[693px] text-2xs text-gray-800">
        <img
          className="absolute top-[-50px] left-[-60px] rounded-[30px] w-[1106px] h-[813px]"
          alt=""
          src="../rectangle-16.svg"
        />
        <div className="absolute top-[49.5px] left-[742.64px] w-[185.27px] h-[69.67px] text-xs text-gray-600">
          <div className="absolute top-[0px] left-[0px] rounded-[10px] bg-gray-100 w-[185.27px] h-[69.67px]" />
          <img
            className="absolute top-[12.83px] left-[130.32px] w-[37.68px] h-[44px] overflow-hidden"
            alt=""
            src="../chevrondown-1.svg"
          />
          <div className="absolute top-[18.33px] left-[25.12px] tracking-[-0.01em] inline-block w-[86.35px] h-[33px]">
            Monthly
          </div>
        </div>
        <div className="absolute top-[44px] left-[59.66px] text-lg tracking-[-0.01em] font-semibold text-black inline-block w-[161.72px] h-[60.5px]">{`Waste Use `}</div>
        <div className="absolute top-[111.83px] left-[62.8px] text-sm tracking-[-0.01em] text-gray-400 inline-block w-[172.71px] h-[38.5px]">
          Monthly Use
        </div>
        <div className="absolute top-[595.83px] left-[75.36px] tracking-[-0.01em] font-medium inline-block w-[23.55px] h-[22px]">
          Jan
        </div>
        <div className="absolute top-[595.83px] left-[149.16px] tracking-[-0.01em] font-medium inline-block w-[23.55px] h-[22px]">
          Feb
        </div>
        <div className="absolute top-[595.83px] left-[222.95px] tracking-[-0.01em] font-medium inline-block w-[25.12px] h-[22px]">
          Mar
        </div>
        <div className="absolute top-[595.83px] left-[298.31px] tracking-[-0.01em] font-medium inline-block w-[21.98px] h-[22px]">
          Apr
        </div>
        <div className="absolute top-[595.83px] left-[368.96px] tracking-[-0.01em] font-medium inline-block w-[26.69px] h-[22px]">
          May
        </div>
        <div className="absolute top-[595.83px] left-[444.33px] tracking-[-0.01em] font-medium inline-block w-[23.55px] h-[22px]">
          Jun
        </div>
        <div className="absolute top-[595.83px] left-[521.26px] tracking-[-0.01em] font-medium inline-block w-[18.84px] h-[22px]">
          Jul
        </div>
        <b className="absolute top-[595.83px] left-[587.2px] text-[10px] tracking-[-0.01em] inline-block w-[32.97px] h-[27.5px]">
          Aug
        </b>
        <div className="absolute top-[595.83px] left-[665.71px] tracking-[-0.01em] font-medium inline-block w-[25.12px] h-[22px]">
          Sep
        </div>
        <div className="absolute top-[595.83px] left-[741.07px] tracking-[-0.01em] font-medium inline-block w-[21.98px] h-[22px]">
          Oct
        </div>
        <div className="absolute top-[595.83px] left-[813.29px] tracking-[-0.01em] font-medium inline-block w-[25.12px] h-[22px]">
          Nov
        </div>
        <div className="absolute top-[595.83px] left-[887.09px] tracking-[-0.01em] font-medium inline-block w-[25.12px] h-[22px]">
          Dec
        </div>
        <div className="absolute top-[370.33px] left-[62.8px] rounded-[8px] bg-gray-200 w-[48.67px] h-[203.5px]" />
        <div className="absolute top-[313.5px] left-[136.6px] rounded-[8px] bg-gray-200 w-[48.67px] h-[260.33px]" />
        <div className="absolute top-[251.17px] left-[210.39px] rounded-[8px] bg-gray-200 w-[48.67px] h-[322.67px]" />
        <div className="absolute top-[333.67px] left-[284.18px] rounded-[8px] bg-gray-200 w-[48.67px] h-[240.17px]" />
        <div className="absolute top-[401.5px] left-[357.97px] rounded-[8px] bg-gray-200 w-[48.67px] h-[172.33px]" />
        <div className="absolute top-[333.67px] left-[431.77px] rounded-[8px] bg-gray-200 w-[48.67px] h-[240.17px]" />
        <div className="absolute top-[313.5px] left-[505.56px] rounded-[8px] bg-gray-200 w-[48.67px] h-[260.33px]" />
        <div className="absolute top-[194.33px] left-[571.5px] rounded-[8px] bg-blue shadow-[0px_8px_12px_rgba(135,_145,_233,_0.3)] w-[62.8px] h-[379.5px]" />
        <div className="absolute top-[242px] left-[653.15px] rounded-[8px] bg-gray-200 w-[48.67px] h-[331.83px]" />
        <div className="absolute top-[295.17px] left-[726.94px] rounded-[8px] bg-gray-200 w-[48.67px] h-[278.67px]" />
        <div className="absolute top-[370.33px] left-[800.73px] rounded-[8px] bg-gray-200 w-[48.67px] h-[203.5px]" />
        <div className="absolute top-[265.83px] left-[874.53px] rounded-[8px] bg-gray-200 w-[48.67px] h-[308px]" />
      </div>
      <div className="absolute top-[100px] left-[1120px] w-[216px] h-[38px] text-gray-300">
        <Form.Group className="w-[216px] [border:none] bg-[transparent] absolute top-[0px] left-[0px]">
          <Form.Control type="text" placeholder="Search For Raw Data" />
        </Form.Group>
        <div className="absolute top-[10px] left-[40px] tracking-[-0.01em] inline-block">
          Raw Data Search
        </div>
        <img
          className="absolute top-[7px] left-[8px] w-[24px] h-[24px] overflow-hidden"
          alt=""
          src="../search-12.svg"
        />
      </div>
      <div className="absolute top-[-5px] left-[0px] w-[306px] h-[1198px]">
        <div className="absolute top-[0px] left-[0px] bg-beige shadow-[0px_10px_60px_rgba(226,_236,_249,_0.5)] w-[306px] h-[1198px]" />
        <div className="absolute top-[128px] left-[28px] rounded-[8px] bg-blue w-[250px] h-[46px]" />
        <div className="absolute top-[139px] left-[39px] w-[116px] h-[24px] text-white">
          <img
            className="absolute top-[0px] left-[0px] w-[24px] h-[24px] overflow-hidden"
            alt=""
            src="../icon--24--outline--keysquare.svg"
          />
          <div className="absolute top-[1px] left-[38px] tracking-[-0.01em] font-medium inline-block">
            Dashboard
          </div>
        </div>
        <div className="absolute top-[203px] left-[39px] w-[231px] h-[24px] text-gray-500">
          <img
            className="absolute top-[0px] left-[0px] w-[24px] h-[24px] overflow-hidden"
            alt=""
            src="../3dsquare-1.svg"
          />
          <div className="absolute top-[2px] left-[38px] tracking-[-0.01em] font-medium inline-block">
            RAW DATA
          </div>
          <img
            className="absolute top-[4px] left-[215px] w-[16px] h-[16px] overflow-hidden"
            alt=""
            src="../chevronright-2.svg"
          />
        </div>
        <div className="absolute top-[1047px] left-[60px] w-[150px] h-[100px]">
          <div className="absolute top-[35px] left-[22px] tracking-[0.01em] font-medium inline-block">
            The Nueva School
          </div>
          <div className="absolute top-[0px] left-[0px] w-[100px] h-[100px] overflow-hidden" />
          <div className="absolute top-[55px] left-[22px] text-xs tracking-[0.01em] text-gray-700 inline-block">
            Project Manager
          </div>
        </div>
        <div className="absolute top-[60px] left-[28px] w-[195px] h-[39px] text-[26px]">
          <div className="absolute top-[0px] left-[45px] tracking-[0.01em] font-semibold inline-block">
            Dashboard
          </div>
          <img
            className="absolute top-[1px] left-[0px] w-[37px] h-[37px] overflow-hidden"
            alt=""
            src="../setting-1.svg"
          />
        </div>
      </div>
      <div className="absolute top-[101px] left-[401px] text-xl font-medium inline-block">
        The Nueva School
      </div>
    </div>
  );
};

export default Dashboard1;
