import { rubikHeadline } from "@/utils/font";

interface SectionBrakeProps {
  content: string
}
const SectionBrake = (props: SectionBrakeProps) => {
  return (
    <div
      className="w-full py-8 bg-orange"
      id={props.content}
    >
      <p className={`text-center text-5xl ${rubikHeadline.className}`}>{props.content.toUpperCase()}</p>
    </div>
  );
}

export default SectionBrake;