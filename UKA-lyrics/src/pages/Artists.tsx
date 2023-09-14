import BurgerMenu from "../assets/BurgerMenu";
import './HomePage.css'
import '../App.css'
import '../index.css'
import './Artists.css'


function Artists() {
  return (
    <>
    <BurgerMenu />
      <div className="mainDiv">
        <div className="wrapper">
        <div className="tilbakeKnapp">
            <img
              src="../public/tilbakeKnapp.png"
              alt="Tilbake button"
              onClick={() => {
                window.location.href = "HomePage.tsx"; // Update the URL to your desired location
              }}
            />
        </div>
        </div>
        <div className="artists">
          <div className="pinkArtistbutton">
            <button
              onClick={(event) =>
                (window.location.href = "/artistsongs/3q7HBObVc0L8jNeTe5Gofh")
              }
            >
              50 cent
            </button>
          </div>
          <div className="greenArtistbutton">
            <button
              onClick={(event) =>
                (window.location.href = "/artistsongs/504cl42JQLRqlZddfZ3S4z")
              }
            >
              Cezinando
            </button>
          </div>
          <div className="pinkArtistbutton">
            <button
              onClick={(event) =>
                (window.location.href = "/artistsongs/46pSx5MtwhorubZuHbwM0Q")
              }
            >
              Arif
            </button>
          </div>
          <div className="greenArtistbutton">
            <button
              onClick={(event) =>
                (window.location.href = "/artistsongs/3AVfmawzu83sp94QW7CEGm")
              }
            >
              Astrid S
            </button>
          </div>
          <div className="pinkArtistbutton">
            <button
              onClick={(event) =>
                (window.location.href = "/artistsongs/0x3PXj1WnuW7YsBxQK57xM")
              }
            >
              Ruben
            </button>
          </div>
          <div className="greenArtistbutton">
            <button
              onClick={(event) =>
                (window.location.href = "/artistssongs/5r6ViSL3nacDRVBtnXlixL")
              }
            >
              Ramon
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
//   return (
//     <div className="pb-32 bg-background">

//       <div className="max-w-md mx-auto pt-12 px-10 pb-4 bg-background h-full w-full">
//       <button
//         onClick={() => {
//           window.location.href= "/HomePage.tsx";
//         }}
//         >
//         <img src="./tilbakeKnapp.png" className="h-12 pb-1"></img>
//       </button>
//         <button
//           onClick={() => {
//             window.location.href = "/50CentPage";
//           }}
//           className="bg-pink hover:bg-darksalmon duration-200 mb-8 mt-6 text-darkblue text-md text-left rounded-2xl w-full p-1 py-5 inline-flex items-center drop-shadow-box">
//           <span className="mx-auto text-xl">50 Cent</span>
//         </button>

//         <button
//           onClick={() => {
//             window.location.href = "/cezinandoPage";
//           }}
//           className="bg-green hover:bg-darksalmon duration-200 mb-8 text-darkblue text-md text-left rounded-2xl w-full p-1 py-5 inline-flex items-center drop-shadow-box">
//           <span className="mx-auto text-xl">Cezinando</span>
//         </button>

//         <button
//           onClick={() => {
//             window.location.href = "/arifPage";
//           }}
//           className="bg-pink hover:bg-darksalmon duration-200 mb-8 text-darkblue text-md text-left rounded-2xl w-full p-1 py-5 inline-flex items-center drop-shadow-box">
//           <span className="mx-auto text-xl">Arif</span>
//         </button>

//         <button
//           onClick={() => {
//             window.location.href = "/astridSPage";
//           }}
//           className="bg-green hover:bg-darksalmon duration-200 mb-8 text-darkblue text-md text-center rounded-2xl w-full p-1 py-5 inline-flex items-center drop-shadow-box">
//           <span className="mx-auto text-xl">Astrid S</span>
//         </button>

//         <button
//           onClick={() => {
//             window.location.href = "/rubenPage";
//           }}
//           className="bg-pink hover:bg-darksalmon duration-200 mb-8 text-darkblue text-md text-center rounded-2xl w-full p-1 py-5 inline-flex items-center drop-shadow-box">
//           <span className="mx-auto text-xl">Ruben</span>
//         </button>

//         <button
//           onClick={() => {
//             window.location.href = "/ramonPage";
//           }}
//           className="bg-green hover:bg-darksalmon duration-200 mb-4 text-darkblue text-md text-center rounded-2xl w-full p-1 py-5 inline-flex items-center drop-shadow-box">
//           <span className="text-xl mx-auto">Ramon</span>
//         </button>

//       </div>
//     </div>
//   );
// }

export default Artists;
