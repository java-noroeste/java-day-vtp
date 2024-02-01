import Image from "next/image";
import IconInfo from "../components/icon_info";
import { russoOneHeadline } from "../utils/font";
import { BsCalendar, BsGeoAlt } from "react-icons/bs";
import CTAList from "../components/cta_list";
import CTAButton from "../components/cta_button";

const Landing = () => {
  return (
    <header className="h-screen w-full bg-gradient-to-r from-blue from-70% flex">
      <img
        className="h-screen absolute right-0 -z-10 object-cover"
        src="https://javanoroeste.com.br/javanoroeste/javaday_riopreto/src/assets/img/palestrantes/carlos-fernando-goncalves.jpeg"
        alt="Carlos Fernando Goncalves"
      />
      <div className="w-max h-max m-auto pb-20 flex flex-row space-x-8">
        <div className="flex flex-col">
          <div
            className="flex flex-col text-orange"
            style={{
              fontSize: "128px",
              lineHeight: "107%",
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
              link={{
                content: "Ver no mapa",
                url: "https://maps.app.goo.gl/mXULFkFahikCWpFo9",
              }}
            />
            <IconInfo
              icon={BsCalendar}
              content="09 Mar. 2024"
              link={{
                content: "Adicionar ao calendário",
                url: "https://calendar.google.com/calendar/u/0/r/eventedit?text=Java%20Day&dates=20240309T120000Z/20240309T210000Z&details=Java%20Day%20-%20Votuporanga%20-%20SP&location=IFSP%20-%20Votuporanga%20-%20SP&sf=true&output=xml",
              }}
            />
          </div>
        </div>
        <div className="flex flex-col pt-8 space-y-6">
          <CTAList
            items={[
              {
                content: "palestrantes",
                url: "#palestrantes",
              },
              {
                content: "workshops",
                url: "#workshops",
              },
              {
                content: "programação",
                url: "#programação",
              },
              {
                content: "patrocínios & apoios",
                url: "#apoiadores",
              },
            ]}
            fgColor="white"
          />
          <CTAButton
            className="text-white"
            link={{
              content: "MARCAR PRESENÇA",
              url: "#bgl-do-sympla",
            }}
            styleConfig="white"
          />
        </div>
      </div>
    </header>
  );
};

export default Landing;
