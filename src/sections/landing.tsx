import Image from "next/image";
import IconInfo from "../components/icon_info";
import { russoOneHeadline } from "../utils/font";
import { BsCalendar, BsGeoAlt } from "react-icons/bs";
import CTAList from "../components/cta_list";
import CTAButton from "../components/cta_button";

const Landing = () => {
  return (
    <header
      className="w-full bg-gradient-to-r from-blue from-70%"
      style={{
        height: "600px"
      }}
    >
      <img
        className="absolute right-0 -z-10 object-cover"
        style={{
          width: "550px",
          height: "600px"
        }}
        src="https://javanoroeste.com.br/javanoroeste/javaday_riopreto/src/assets/img/palestrantes/carlos-fernando-goncalves.jpeg"
        alt="Carlos Fernando Goncalves"
      />
      <div className="w-max h-max m-auto pt-28 flex flex-row space-x-8">
        <div className="flex flex-col">
          <div
            className="flex flex-col text-orange"
            style={{
              fontSize: "128px",
              lineHeight: "107%"
            }}
          >
            <p className={russoOneHeadline.className}>JAVA</p>
            <div className="flex flex-row">
              <img
                src="https://javanoroeste.com.br/javanoroeste/javaday_riopreto/src/assets/favico.svg"
                alt="Logo - Java Noroeste"
                width={100}
                height={100}
              />
              <p className={`ml-4 ${russoOneHeadline.className}`}>DAY</p>
            </div>
          </div>
          <div className="flex flex-row space-x-4">
            <IconInfo
              icon={BsGeoAlt}
              content="IFSP Votuporanga"
            />
            <IconInfo
              icon={BsCalendar}
              content="09 Mar. 2024"
            />
          </div>
        </div>
        <div className="flex flex-col pt-8 space-y-6">
          <CTAList
            items={[
              {
                content: "palestrantes",
                url: "#palestrantes"
              },
              {
                content: "workshops",
                url: "#workshops"
              },
              {
                content: "programação",
                url: "#programacao"
              },
              {
                content: "patrocínios & apoios",
                url: "#patrocinios-e-apoios"
              },
            ]}
            fgColor="white"
          />
          <CTAButton
            className="text-white"
            link={{
              content:"MARCAR PRESENÇA",
              url: "#bgl-do-sympla"
            }}
            styleConfig="white"
          />
        </div>
      </div>
    </header>
  );
}

export default Landing;