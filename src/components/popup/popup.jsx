import React from "react";

export default function Popup(props) {
  const [showModal, setShowModal] = React.useState(false);
  return (
    <>
      <button
      className="ml-1 mr-1 bg-innerRingSecond expand outline-innerRingSecond text-white font-bold py-5 px-14  rounded-1xl shadow-2xl shadow-innerRingSecond mb-2"
        type="button"
        onClick={() => setShowModal(true)}
      >
       {props.buttonTitle}
      </button>
      {showModal ? (
        <>
          <div
            className="flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none "
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl ">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none ">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 ">
                  <h3 className="text-3xl font-semibold text-orangeEndColor">
                  {props.buttonTitle}
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                   
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto bg-mainThemeColor text-black font-light rounded-xl m-4 shadow-xl shadow-innerRingSecond ">
                  <p className="my-4 text-slate-500 text-lg leading-relaxed"> {props.dataOne} </p>
                  <p className="my-4 text-slate-500 text-lg leading-relaxed"> {props.dataTwo} </p>
                  <p className="my-4 text-slate-500 text-lg leading-relaxed"> {props.dataThree} </p>
                  <p className="my-4 text-slate-500 text-lg leading-relaxed"> {props.dataFour} </p>
                  <p className="my-4 text-slate-500 text-lg leading-relaxed"> {props.dataFive} </p>
                  <p className="my-4 text-slate-500 text-lg leading-relaxed"> {props.dataSix} </p>
                  <p className="my-4 text-slate-500 text-lg leading-relaxed"> {props.dataSeven} </p>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-sirNameColor background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
               
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}