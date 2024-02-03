import { Presentation, Social } from "@/mock/talkers";
import { rubikCTA, rubikHeadline, rubikParagraph } from "@/utils/font";
import IconInfo from "../icon_info";
import { BsClock, BsFileEarmarkEasel } from "react-icons/bs";

interface AboutProps {
  name: string
  socials: Social[]
  about: string
  presentation: Presentation
}

const formatPresentationDate = (presentation: Presentation) => {
  const pad = (v: number) => `0${v}`.slice(-2);
  const start = `${pad(presentation.start.getHours())}h:${pad(presentation.start.getMinutes())}m`;
  const end = `${pad(presentation.end.getHours())}h:${pad(presentation.end.getMinutes())}m`;

  return `${start} - ${end}`;
}

const About = (props: AboutProps) => {
  return (
    <div className="w-full max-w-6xl m-auto flex flex-col lg:border-dark lg:border-x-2 ">
      <div className="h-20 px-6 flex flex-row items-center border-b-2 justify-between border-dark">
        <p
          className={`text-5xl ${rubikCTA.className} text-dark`}
        >
          {props.name}
        </p>
        <ul className="flex flex-row space-x-4">
          {props.socials.map(social => {
            return (
              <li key={social.name}>
                <a
                  className="fill-dark"
                  href={social.url}
                >
                  <social.icon
                    className="w-8 h-8"
                  />
                </a>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="flex flex-col lg:flex-row">
        <p
          className={`w-full p-6 border-b border-dark text-left whitespace-pre-line
                      ${rubikParagraph.className}
                      lg:border-b-0 lg:border-r`}
        >
          {props.about}
        </p>
        <div className="w-full p-6 flex flex-col items-start text-left">
          <p className={`w-full mb-3 text-4xl text-lightblue ${rubikHeadline.className}`}>
            {props.presentation.title.toUpperCase()}
          </p>
          <IconInfo
            icon={BsClock}
            link={{
              content: formatPresentationDate(props.presentation),
              url: "https://google.com"
            }}
          />
          <p className={`my-4 text-left whitespace-pre-line ${rubikParagraph.className}`}>
            {props.presentation.description}
          </p>
          <IconInfo
            icon={BsFileEarmarkEasel}
            link={{
              content: "Acompanhe a apresentação aqui ->",
              url: props.presentation.slides_url ?? ""
            }}
            styleConfig="blue"
          />
        </div>
     </div>
    </div>
  );
}

export default About;