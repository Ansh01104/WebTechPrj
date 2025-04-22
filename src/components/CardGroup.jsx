import { GlareCard } from "./ui/glare-card";
import Card_glare from "./Card_glare";

const CardGroup = () => {
  return (
    <div className="flex justify-center space-x-4">
      {/* First Card */}
      <Card_glare />

      {/* Second Card */}
      <Card_glare />

      {/* Third Card */}
      <Card_glare />
    </div>
  );
};

export default CardGroup;
