function Artists () {
  return (
    <div className="pb-32 mt-10 bg-background">
      {/* <img src="./uka_bakgrunn.png" className="h-80"></img> */}
      <div className="max-w-md mx-auto pt-5 px-4 pb-4 bg-background h-full w-full">
        
        <button
          onClick={() => {
            window.location.href = "/opprett-gruppe";
          }}
          className="bg-pink hover:bg-darksalmon duration-200 mb-4 text-white text-md text-left rounded-2xl w-full p-1 py-5 inline-flex items-center drop-shadow-box">
          <span className=" pl-5 text-xl">50 Cent</span>
        </button>

        <button
          onClick={() => {
            window.location.href = "/opprett-gruppe";
          }}
          className="bg-green hover:bg-darksalmon duration-200 mb-4 text-white text-md text-left rounded-2xl w-full p-1 py-5 inline-flex items-center drop-shadow-box">
          <span className=" pl-5 text-xl">Cezinando</span>
        </button>

        <button
          onClick={() => {
            window.location.href = "/opprett-gruppe";
          }}
          className="bg-pink hover:bg-darksalmon duration-200 mb-4 text-white text-md text-left rounded-2xl w-full p-1 py-5 inline-flex items-center drop-shadow-box">
          <span className=" pl-5 text-xl">Arif</span>
        </button>

        <button
          onClick={() => {
            window.location.href = "/opprett-gruppe";
          }}
          className="bg-green hover:bg-darksalmon duration-200 mb-4 text-white text-md text-center rounded-2xl w-full p-1 py-5 inline-flex items-center drop-shadow-box">
          <span className=" pl-5 text-xl">Astrid S</span>
        </button>

        <button
          onClick={() => {
            window.location.href = "/opprett-gruppe";
          }}
          className="bg-pink hover:bg-darksalmon duration-200 mb-4 text-white text-md text-center rounded-2xl w-full p-1 py-5 inline-flex items-center drop-shadow-box">
          <span className=" pl-5 text-xl">Ruben</span>
        </button>

        <button
          onClick={() => {
            window.location.href = "/opprett-gruppe";
          }}
          className="bg-green hover:bg-darksalmon duration-200 mb-4 text-white text-md text-center rounded-2xl w-full p-1 py-5 inline-flex items-center drop-shadow-box">
          <span className="text-xl">Ramon</span>
        </button>
 

       
      </div>
    </div>
  );
}

export default Artists;
