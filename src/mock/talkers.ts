import { BsLinkedin, BsTwitter, BsTwitterX, BsYoutube } from "react-icons/bs";
import { IconType } from "react-icons/lib";

export interface Social {
  name: string;
  icon: IconType;
  url: string;
}

export interface Presentation {
  title: string;
  start: Date;
  end: Date;
  description: string;
  slides_url: string | null;
}

export interface Talker {
  name: string;
  image: string;
  socials: Social[];
  about: string;
  presentation: Presentation;
}

const talkers = [
  {
    name: "Josue Teodoro",
    image: "https://avatars.githubusercontent.com/u/41875891?v=4",
    socials: [
      {
        name: "Youtube",
        icon: BsYoutube,
        url: "https://www.youtube.com/channel/UCTB29qpCk3AirkWL_ChyNfw",
      },
      {
        name: "LinkedIn",
        icon: BsLinkedin,
        url: "https://www.linkedin.com/in/josue-teodoro-moreira",
      },
      {
        name: "Twitter/X",
        icon: BsTwitterX,
        url: "https://www.x.com/j0suetm",
      },
    ],
    about: `Atualmente trabalha na CompassUOL como Java backend. Gosta muito de software livre e Java. Participou e organizou diversos eventos ao longo dos anos.

    Foi coordenador da trilha de TV Digital no TDC São Paulo.
    Trabalhou nas empresas Accenture, DXC Technology , Antares Informations Systems, EverSystems Informática, Touch Tecnologia e PROCOMP Indústria Eletônica LTDA. Tradutor e Revisor do IDE NetBeans.
    
    Fundador do Java Noroeste - Grupo de Usuários Java do Noroeste Paulista.`,
    presentation: {
      title: "Introdução a Virtual Threads",
      start: new Date(),
      end: new Date(),
      description:
        "Java 21 está próximo do seu lançamento com este novo recurso poderoso. Entenda os fundamentos desta novidade.",
      slides_url: "https://google.com",
    },
  },
  {
    name: "Joao Augusto",
    image: "https://avatars.githubusercontent.com/u/91899995?v=4",
    socials: [
      {
        name: "Youtube",
        icon: BsYoutube,
        url: "https://www.youtube.com/channel/UCTB29qpCk3AirkWL_ChyNfw",
      },
      {
        name: "LinkedIn",
        icon: BsLinkedin,
        url: "https://www.linkedin.com/in/josue-teodoro-moreira",
      },
      {
        name: "Twitter/X",
        icon: BsTwitterX,
        url: "https://www.x.com/j0suetm",
      },
    ],
    about: `Atualmente trabalha na CompassUOL como Java backend. Gosta muito de software livre e Java. Participou e organizou diversos eventos ao longo dos anos.

    Foi coordenador da trilha de TV Digital no TDC São Paulo.
    Trabalhou nas empresas Accenture, DXC Technology , Antares Informations Systems, EverSystems Informática, Touch Tecnologia e PROCOMP Indústria Eletônica LTDA. Tradutor e Revisor do IDE NetBeans.
    
    Fundador do Java Noroeste - Grupo de Usuários Java do Noroeste Paulista.`,
    presentation: {
      title: "Introdução a Virtual Threads",
      start: new Date(),
      end: new Date(),
      description:
        "Java 21 está próximo do seu lançamento com este novo recurso poderoso. Entenda os fundamentos desta novidade.",
      slides_url: "https://google.com",
    },
  },
  {
    name: "Gustavo Bizo",
    image: "https://avatars.githubusercontent.com/u/69866294?v=4",
    socials: [
      {
        name: "Youtube",
        icon: BsYoutube,
        url: "https://www.youtube.com/channel/UCTB29qpCk3AirkWL_ChyNfw",
      },
      {
        name: "LinkedIn",
        icon: BsLinkedin,
        url: "https://www.linkedin.com/in/josue-teodoro-moreira",
      },
      {
        name: "Twitter/X",
        icon: BsTwitterX,
        url: "https://www.x.com/j0suetm",
      },
    ],
    about: `Atualmente trabalha na CompassUOL como Java backend. Gosta muito de software livre e Java. Participou e organizou diversos eventos ao longo dos anos.

    Foi coordenador da trilha de TV Digital no TDC São Paulo.
    Trabalhou nas empresas Accenture, DXC Technology , Antares Informations Systems, EverSystems Informática, Touch Tecnologia e PROCOMP Indústria Eletônica LTDA. Tradutor e Revisor do IDE NetBeans.
    
    Fundador do Java Noroeste - Grupo de Usuários Java do Noroeste Paulista.`,
    presentation: {
      title: "Introdução a Virtual Threads",
      start: new Date(),
      end: new Date(),
      description:
        "Java 21 está próximo do seu lançamento com este novo recurso poderoso. Entenda os fundamentos desta novidade.",
      slides_url: "https://google.com",
    },
  },
  {
    name: "Ravi Vendramini",
    image: "https://avatars.githubusercontent.com/u/79207982?v=4",
    socials: [
      {
        name: "Youtube",
        icon: BsYoutube,
        url: "https://www.youtube.com/channel/UCTB29qpCk3AirkWL_ChyNfw",
      },
      {
        name: "LinkedIn",
        icon: BsLinkedin,
        url: "https://www.linkedin.com/in/josue-teodoro-moreira",
      },
      {
        name: "Twitter/X",
        icon: BsTwitterX,
        url: "https://www.x.com/j0suetm",
      },
    ],
    about: `Atualmente trabalha na CompassUOL como Java backend. Gosta muito de software livre e Java. Participou e organizou diversos eventos ao longo dos anos.

    Foi coordenador da trilha de TV Digital no TDC São Paulo.
    Trabalhou nas empresas Accenture, DXC Technology , Antares Informations Systems, EverSystems Informática, Touch Tecnologia e PROCOMP Indústria Eletônica LTDA. Tradutor e Revisor do IDE NetBeans.
    
    Fundador do Java Noroeste - Grupo de Usuários Java do Noroeste Paulista.`,
    presentation: {
      title: "Introdução a Virtual Threads",
      start: new Date(),
      end: new Date(),
      description:
        "Java 21 está próximo do seu lançamento com este novo recurso poderoso. Entenda os fundamentos desta novidade.",
      slides_url: "https://google.com",
    },
  },
  {
    name: "Fabricio",
    image: "https://avatars.githubusercontent.com/u/88052209?v=4",
    socials: [
      {
        name: "Youtube",
        icon: BsYoutube,
        url: "https://www.youtube.com/channel/UCTB29qpCk3AirkWL_ChyNfw",
      },
      {
        name: "LinkedIn",
        icon: BsLinkedin,
        url: "https://www.linkedin.com/in/josue-teodoro-moreira",
      },
      {
        name: "Twitter/X",
        icon: BsTwitterX,
        url: "https://www.x.com/j0suetm",
      },
    ],
    about: `Atualmente trabalha na CompassUOL como Java backend. Gosta muito de software livre e Java. Participou e organizou diversos eventos ao longo dos anos.

    Foi coordenador da trilha de TV Digital no TDC São Paulo.
    Trabalhou nas empresas Accenture, DXC Technology , Antares Informations Systems, EverSystems Informática, Touch Tecnologia e PROCOMP Indústria Eletônica LTDA. Tradutor e Revisor do IDE NetBeans.
    
    Fundador do Java Noroeste - Grupo de Usuários Java do Noroeste Paulista.`,
    presentation: {
      title: "Introdução a Virtual Threads",
      start: new Date(),
      end: new Date(),
      description:
        "Java 21 está próximo do seu lançamento com este novo recurso poderoso. Entenda os fundamentos desta novidade.",
      slides_url: "https://google.com",
    },
  },
] as Talker[];

export default talkers;
