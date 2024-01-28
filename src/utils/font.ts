import { Fira_Code, Rubik, Russo_One } from "next/font/google";

const russoOneHeadline = Russo_One({
  weight: "400",
  subsets: ["latin"]
});

const firaCodeListing = Fira_Code({
  weight: "500",
  subsets: ["latin"]
});

const firaCodeCTA = Fira_Code({
  weight: "600",
  subsets: ["latin"]
});

const rubikCTA = Rubik({
  weight: "700",
  subsets: ["latin"]
});

const rubikHeadline = Rubik({
  weight: "900",
  subsets: ["latin"]
});

const rubikParagraph = Rubik({
  weight: "400",
  subsets: ["latin"]
});

export {
  russoOneHeadline,
  firaCodeListing,
  firaCodeCTA,
  rubikCTA,
  rubikHeadline,
  rubikParagraph
};