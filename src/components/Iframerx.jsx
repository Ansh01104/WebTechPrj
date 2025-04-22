 
const Iframerx = () => (
  <section
    id="clients"
    className="sm:py-5 py-5 px-2 mb-32 flex justify-center items-center flex-col md:flex-col relative w-full bg-black shadow-lg rounded-lg"
  >
    <video
        autoPlay
        loop
        muted
        playsInline
        preload="none"
        className="absolute top-0 left-0 w-120% h-150% object-cover z-0"
      >
        <source src="https://servalabs.b-cdn.net/web/iframer.mp4"type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    {/* Background Gradient */}
     

    {/* Title and Paragraph */}
    <div className="w-full flex flex-col justify-center items-center text-center sm:mb-6 mb-6 relative z-[1]">
      <h2 className="font-poppins font-semibold xs:text-[56px] text-[40px] text-black xs:leading-[76.8px] leading-[66.8px] w-full mb-4">
        Unmatched Productivity
      </h2>
      <p className="font-poppins text-base text-gray-600 leading-relaxed max-w-[800px]">
        Empower your workflow with features that drive efficiency. Our platform ensures that you are equipped with the tools necessary to boost productivity like never before.
      </p>
    </div>

    {/* Adding iframe for embedding external content */}
    <div className="w-full flex justify-center items-center relative z-[1] ml-32 mt-12 mb-40 ">
      <iframe 
        className="w-full max-w-[810px] h-[400px] sm:h-[460px] rounded-[20px] border-4 border-white shadow-xl"
        src="https://demo.home-assistant.io/#/lovelace/home" // replace with the actual URL of the content
        title="Embedded Content"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  </section>
);

export default Iframerx;
