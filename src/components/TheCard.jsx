const TheCard = ({ content, name, title, img }) => (
  <div className="flex justify-between flex-col px-2 py-2 rounded-[30px]  max-w-[1207px] md:mr-10 sm:mr-2 mr-0 my-2 feedback-card">
    <img src={img} alt={name} className="w-full max-h-[400px] rounded-[30px]" />
  </div>
);

export default TheCard;
