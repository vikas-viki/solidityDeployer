import { useState } from "react";
import ETH from "../assets/ETH.png";
import downArrow from "../assets/downArrow.png";
import POLYGON from "../assets/polygon.png";
import OPTIMISM from "../assets/optimism.png";
import ARBITRUM from "../assets/arbitrum.png";
import BINANCE from "../assets/binance.png";

const Compiler = () => {
  const [coin, setCoin] = useState({ image: ETH, text: "Ethereum" });
  const [open, setOpen] = useState(false);

  const allCoins = [
    { image: ETH, text: "Ethereum" },
    { image: POLYGON, text: "Polygon" },
    { image: OPTIMISM, text: "Optimism" },
    { image: ARBITRUM, text: "Arbitrum" },
    { image: BINANCE, text: "Binance" },
  ];

  const toggleDropdown = () => {
    setOpen(!open);
  };

  return (
    <div className="w-full h-full flex flex-col justify-center items-center select-none">
      <div className="border-2 w-full h-full flex gap-[20px] justify-center bg-sky-500 rounded-[10px] items-center p-[15px]">
        <button className="border-2 border-blue-500 rounded-[10px] hover:bg-slate-400 transition duration-500 bg-slate-200 font-semibold w-[91px] p-[8px]">
          Compile
        </button>
        <button className="border-2 border-blue-500 rounded-[10px] hover:bg-slate-400 transition duration-500 bg-slate-200 font-semibold w-[91px] p-[8px]">
          Deploy
        </button>
        <button className="border-2 border-blue-500 rounded-[10px] hover:bg-slate-400 transition duration-500 bg-slate-200 font-semibold w-[91px] p-[8px]">
          Verify
        </button>
        <div className="coin-select dropdown bg-slate-200  rounded-[10px]">
          <div className="coin-img border-2 border-blue-500  rounded-[10px]" onClick={toggleDropdown}>
            <div className="coin_text rounded-[10px]">
              <img src={coin.image} width="30" alt="e" />
              <span>{coin.text}</span>
            </div>
            <span className="second-span">
              <img src={downArrow} alt="⌄" width="20" />
            </span>
          </div>
          {open === true && (
            <ul className="dropdown-ul bg-slate-200">
              {allCoins.map(
                (el, i) =>
                  el.text !== coin.text && (
                    <li
                      key={i}
                      onClick={() => {
                        setCoin({ image: el.image, text: el.text });
                        setOpen(false);
                      }}
                    >
                      <div className="coin_text coin-in">
                        <img src={el.image} width="30" alt="e" />
                        <span>{el.text}</span>
                      </div>
                    </li>
                  )
              )}
            </ul>
          )}
        </div>
      </div>
      <div className="w-full h-full flex flex-row border-2 border-indigo-500 ">
        <div className="border-2 border-indigo-500 w-full h-full">Code</div>
        <div className="border-2 border-indigo-500 w-full h-full">
          Compile result
        </div>
      </div>
    </div>
  );
};

export default Compiler;
