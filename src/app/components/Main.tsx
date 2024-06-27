export function Main() {
  return (
    <div id="main" className="main w-full h-[100vh]  mb-20">
      {/* <div className="overlay absolute top-0 left-0 w-full h-full bg-[#000000cc]"></div> */}
      <div className="m-0 p-0 absolute h-full w-full top-0 z-0 ">
        <video
          className="w-full h-full object-cover"
          src="/assets/MarketisaVideo.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white z-50">
          {/* <h1 className="h1">Marketisa</h1>
          <p className="h3">Marketing</p> */}
        </div>
      </div>
    </div>
  );
}
