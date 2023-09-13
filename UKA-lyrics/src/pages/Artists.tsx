function Artists () {
  return (
    <div className="w-15 h-100 bg-pink">
       <button
          onClick={() => {
            window.location.href = "/opprett-gruppe";
          }}
          className="bg-green hover:bg-darksalmon duration-200 mb-4 text-white text-md text-left rounded-2xl w-full p-1 py-5 inline-flex items-center drop-shadow-box"
        >
          </button>
    </div>
  )
}

export default Artists;
