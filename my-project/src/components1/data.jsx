import GrilledSteak from "./data1/GrilledSteak.avif";
import HealthySalad from "./data1/HealthySalad.avif";
import ItalianPasta from "./data1/ItalianPasta.avif";
import chefInfo from "./data1/chefInfo.avif";
import showCase from "./data1/ShowCaseImage.avif";

export const brandName = "FoodHouse";

export const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Menu", href: "#menu" },
  { name: "About", href: "#about" },
  { name: "Reservation", href: "#" },
  { name: "Contact", href: "#contact" },
];

export const heroData = {
  preheading: "Fresh and tasty",
  heading: "Enjoy delicious meals made with fresh ingredients",
  subtitle:
    "Experience warm service, beautiful dishes, and a comfortable place for family and friends.",
  primaryCta: { label: "Order Now", href: "#menu" },
  secondaryCta: { label: "View Menu", href: "#about" },
  image: showCase,
};

export const dishes = [
  {
    name: "Grilled Steak",
    description: "Juicy grilled beef served with vegetables.",
    price: "$18",
    image: GrilledSteak,
  },
  {
    name: "Italian Pasta",
    description: "Creamy pasta with fresh herbs and parmesan cheese.",
    price: "$14",
    image: ItalianPasta,
  },
  {
    name: "Healthy Salad",
    description: "Fresh vegetables with a light lemon dressing.",
    price: "$10",
    image: HealthySalad,
  },
];

export const cheffInfo = [
  {
    title: "Our Special Chef",
    description:
      "Our chef creates delicious dishes with fresh ingredients and a passion for quality food every day.",
    image: chefInfo,
  },
];

export const footerLinks = [
  { name: "Menu", href: "#menu" },
  { name: "Gallery", href: "#gallery" },
  { name: "Booking", href: "#" },
  { name: "Location", href: "#location" },
];
