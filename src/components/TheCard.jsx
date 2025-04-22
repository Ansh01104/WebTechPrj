const TheCard = ({ content, name, title, img }) => (
  <div className="flex justify-center flex-col px-2 py-2 max-w-[600px] w-full mb-4">
    <img
      src={img}
      alt={name}
      loading="lazy"
      className="w-full h-[250px] sm:h-[300px] md:h-[400px] rounded-[15px] object-cover"
    />
    <div className="mt-2 text-center">
      <h3 className="font-poppins font-semibold text-lg sm:text-xl">{title}</h3>
      <p className="font-poppins text-sm text-gray-600">{content}</p>
    </div>
  </div>
);

export default TheCard;
