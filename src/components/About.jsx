// src/components/About.js
function About() {
   // Numero WhatsApp aziendale (senza simbolo + e senza spazi)
   const phoneNumber = '393921300388'; // Sostituisci con il tuo numero di WhatsApp
   const message = 'Ciao, sono interessato ai tuoi servizi!'; // Messaggio precompilato
 
   // Link per WhatsApp
   const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
 
   // Funzione per reindirizzare su WhatsApp
   const handleClick = () => {
     window.location.href = whatsappLink;
   };
    return( 
      <div>
        <div className="flex min-h-screen bg-[#161513]">
          <div className="mx-auto">
            <div className="mx-auto mb-[40px] mt-[98px] h-[213px] w-[213px] overflow-hidden rounded-full bg-gradient-to-tr from-[#FF8660] to-[#8000FF]">
              <img src="../public/logo.ico" alt="" />
            </div>
            <h1 className="max-w-screen-sm text-center text-[55px] font-extrabold text-red">
            Pensiamo noi <br />
            al tuo <span className="text-transparent bg-clip-text bg-gradient-to-tr from-[#2233c9] to-[#01cf0b]">sito web!</span>
            </h1>
            <p className="mx-auto mt-[40px] mb-[54px] text-[24px] font-light text-[#C5C5C5] text-center max-w-xl">Siti personalizzati, per ogni esigenza.</p>
            <div className="text-center">
              <button
                id="whatsapp" 
                className="text-gray-800 inline-block px-[30px] py-[16px] mr-[18px] bg-white rounded-full font-semibold text-[22px] bg-gradient-to-tr from-[#2233c9] to-[#01cf0b]"
                onClick={handleClick}
              >
              Contattaci
              </button>
              <button className="text-white inline-block px-[30px] py-[16px] bg-transparent border-2 rounded-full font-semibold text-[22px]">
              Vedi Portfolio
              </button>
            </div>
          </div>
        </div>
      </div>
  )
  }
  
  export default About;
  