import weather4 from "../assets/projects/weather4.png";
import diceimg from "../assets/projects/diceimg.png";
import toolkitImg from "../assets/projects/toolkitImg.png";
import shoppingimg from "../assets/projects/shoppingImg.png";
import cryptoImg from "../assets/projects/cryptoImg.png";
import contextImg from "../assets/projects/contextImg.png";

const Work = () => {
  return (
    <div name="work" className="w-full md:h-screen text-gray-300 bg-[#08192f]">
      <div className=" max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold text-gray-300 border-b-4 inline border-pink-600">
            Work
          </p>
          <p className="py-6">Check out my recent work</p>
        </div>
        {/* Container */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${weather4})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex flex-col justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Weather-App
              </span>
              <div className="pt-8 text-center">
                <a
                  target="_blank"
                  href="https://weather-app-sigma-sage.vercel.app/"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700">
                    Demo
                  </button>
                </a>
                <a
                  target="_blank"
                  href="https://github.com/faheemameen/Weather-App.git"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div
            style={{ backgroundImage: `url(${diceimg})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex flex-col justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Dice-Game
              </span>
              <div className="pt-4 text-center">
                <a
                  target="_blank"
                  href="https://dice-game-five-orpin.vercel.app/"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700">
                    Demo
                  </button>
                </a>
                <a
                  target="_blank"
                  href="https://github.com/faheemameen/Dice-Game.git"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${shoppingimg})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex flex-col justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Shopping-App
              </span>
              <div className="pt-4 text-center">
                <a
                  target="_blank"
                  href="https://shopping-app-tau-teal.vercel.app/"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700">
                    Demo
                  </button>
                </a>
                <a
                  target="_blank"
                  href="https://github.com/faheemameen/Shopping-App.git"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div
            style={{ backgroundImage: `url(${toolkitImg})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex flex-col justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Redux-Toolkit-App
              </span>
              <div className="pt-4 text-center">
                <a
                  target="_blank"
                  href="https://redux-toolkit-app-iota.vercel.app/"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700">
                    Demo
                  </button>
                </a>
                <a
                  target="_blank"
                  href="https://github.com/faheemameen/Redux-toolkit-App.git"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${cryptoImg})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex flex-col justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                React-Router-App
              </span>
              <div className="pt-4 text-center">
                <a target="_blank" href="https://crypto-api-two-nu.vercel.app/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700">
                    Demo
                  </button>
                </a>
                <a
                  target="_blank"
                  href="https://github.com/faheemameen/CryptoApi.git"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${contextImg})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex flex-col justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Context-API
              </span>
              <div className="pt-4 text-center">
                <a
                  target="_blank"
                  href="https://todo-app-eta-ten-14.vercel.app/"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700">
                    Demo
                  </button>
                </a>
                <a
                  target="_blank"
                  href="https://github.com/faheemameen/Todo-app.git"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
