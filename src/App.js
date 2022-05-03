import { ReactComponent as Logo } from "./assets/r&m.svg";
import Countdown from "./temp";

function App() {
  const supportLinks = [
    {
      name: "CEREMONIA",
      href: "https://www.google.com/maps/place/Templo+de+San+Mat%C3%ADas+Jalatlaco/@17.06759,-96.7162745,15z/data=!4m2!3m1!1s0x0:0x588840c369052dd5?sa=X&ved=2ahUKEwi2kZrBgML3AhUHD0QIHfkPDHEQ_BJ6BAhkEAU",
      description: "Templo de San Matías Jalatlaco. Miguel Hidalgo 211, Barrio de Jalatlaco, 68080 Oaxaca de Juárez, Oax.",
      icon: "https://invitemespecial.com/AndreayAshley/wp-content/uploads/2021/11/proposal.png",
    },
    {
      name: "RECEPCIÓN",
      href: "https://www.google.com/maps/place/Quinta+Luz/@17.0567258,-96.67532,15z/data=!4m5!3m4!1s0x0:0x1c2ee4372d079a2b!8m2!3d17.0567258!4d-96.67532",
      description: "Quinta Luz. Av. Ferrocarril 58, Cabecera Municipal San Sebastian Tutla, 71320 San Sebastián Tutla, Oax.",
      icon: "https://invitemespecial.com/AndreayAshley/wp-content/uploads/2021/11/marriage.png",
    },
  ];

  const handleClick = (link) => {
    window.open(link);
  };

  return (
    <>
      <div className="bg-white">
        <div className="relative overflow-hidden">
          <main>
            <div className="relative bg-gray-300 flex" id="hero-banner">
              <div className="absolute inset-0">
                <img className="w-full h-full object-cover" src="https://invitemespecial.com/AndreayAshley/wp-content/uploads/2021/07/Solei-SS-164.jpg" alt="" />
                <div className="absolute inset-0 bg-gray-300 mix-blend-multiply" aria-hidden="true" />
              </div>
              <div className="relative max-w-7xl m-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
                <h1 className="text-7xl font-extrabold tracking-tight text-white md:text-8xl font-creattion lg:text-9xl">Renato y Mariana</h1>
              </div>
            </div>

            <div className="w-auto mx-auto text-center py-12 px-4 sm:px-6 lg:py-16 lg:px-8 bg-body">
              <h2 className="text-3xl mb-10  font-cormorant c-title font-normal sm:text-5xl">
                <span className="block ">¡ESTÁS INVITADO!</span>
              </h2>
              <h2 className="text-3xl italic  font-cormorant c-title font-normal bg-body sm:text-5xl" id="date">
                <span className=" ">05 Noviembre 2022</span>
              </h2>
              <h2 className="text-3xl font-normal sm:text-5xl">
                <Countdown />
              </h2>
              <Logo className=" w-14 mx-auto my-16" />
              <h2 className="text-1xl max-w-4xl mx-auto  font-cormorant c-title font-normal bg-body sm:text-2xl">
                <p>
                  <cite>"Sólo la más feliz de las suertes reúne al hombre y la mujer que están, por decirlo así, mutuamente «destinados», y son capaces de un amor grande y profundo."</cite>
                  <br /> Las Cartas de J.R.R Tolkien, Carta n°43
                </p>
              </h2>
            </div>

            <div className="bg-white">
              <div className="relative pb-32 bg-gray-300">
                <div className="absolute inset-0">
                  <img className="w-full h-full object-cover" src="https://invitemespecial.com/Nuestraboda/wp-content/uploads/2021/07/Solei_Rosstudio-21.jpg" alt="" />
                  <div className="absolute inset-0 bg-gray-300 mix-blend-multiply" aria-hidden="true" />
                </div>
                <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
                  <h1 className="mb-10  font-cormorant text-center text-white font-normal text-3xl  sm:text-5xl">ITINERARIO</h1>
                </div>
              </div>

              {/* Overlapping cards */}
              <section className="-mt-32 max-w-screen-2xl mx-auto relative z-10 pb-32 px-4 sm:px-6 lg:px-8" aria-labelledby="contact-heading">
                <div className="grid grid-cols-1 gap-y-20 lg:grid-cols-3 lg:gap-y-0 lg:gap-x-8">
                  {supportLinks.map((link) => (
                    <div key={link.name} className="flex flex-col bg-white rounded-1xl ">
                      <img width="90" height="90" src={link.icon} class="mx-auto mt-16" alt="" loading="lazy" />
                      <div className="flex-1 relative pt-16 pb-8 px-12  md:px-20">
                        <h3 className=" text-3xl tracking-widest  sm:text-4xl font-medium font-cormorant text-center text-gray-900">{link.name}</h3>
                        <p className="mt-4 text-2xl  sm:text-2xl italic font-cormorant text-center text-gray-500">{link.description}</p>
                      </div>
                      <button
                        onClick={(e) => handleClick(link.href)}
                        type="button"
                        className="items-center mb-8 m-auto px-4 w-48 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-acent focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                      >
                        Ubicación
                      </button>
                    </div>
                  ))}

                  <div className="flex flex-col bg-white rounded-1xl " id="dresscode">
                    <img width="90" height="90" src="https://invitemespecial.com/AndreayAshley/wp-content/uploads/2021/11/we-met.png" class="mx-auto mt-16" alt="" loading="lazy" />
                    <div className="flex-1 relative py-16 pb-16 pl-12 pr-8  ">
                      <h3 className=" text-3xl tracking-widest  sm:text-4xl font-medium font-cormorant text-center lg:text-right text-gray-900">DRESSCODE</h3>
                      <h3 className=" mt-4 text-2xl  sm:text-2xl italic font-cormorant text-center lg:text-right text-gray-500">Formal</h3>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}

export default App;
