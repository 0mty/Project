import GrilledSteak from "./data1/GrilledSteak.avif";
import HealthySalad from "./data1/HealthySalad.avif";
import ItalianPasta from "./data1/ItalianPasta.avif";
import chefInfo1 from "./data1/chefInfo.avif";
import ShowCaseImage from "./data1/ShowCaseImage.avif";

export const brandName = "Restaurant";

export const heroData = {
  preheading: "Welcome to our Restaurant",
  heading: "Savor Every Bite",
  subtitle:
    "Experience culinary excellence with our finest dishes prepared by our expert chefs.",
  image: ShowCaseImage,
  primaryCta: {
    label: "Order Now",
    href: "#order",
  },
  secondaryCta: {
    label: "Explore Menu",
    href: "#menu",
  },
};

export const navLinks = [
  { name: "Home", href: "#" },
  { name: "Menu", href: "#" },
  { name: "About", href: "#" },
  { name: "Reservation", href: "#" },
  { name: "Contact", href: "#" },
];

export const dishes = [
  {
    id: 1,
    name: "Grilled Steak",
    description: "Juicy grilled beef served with vegetables.",
    price: "$18",
    image: GrilledSteak,
  },
  {
    id: 2,
    name: "Italian Pasta",
    description: "Creamy pasta with fresh herbs and parmesan cheese.",
    price: "$14",
    image: ItalianPasta,
  },
  {
    id: 3,
    name: "Healthy Salad",
    description: "Fresh vegetables with a light lemon dressing.",
    price: "$10",
    image: HealthySalad,
  },
];

export const menuDetails = [
  {
    id: 1,
    name: "Grilled Steak",
    price: "$18",
    serving: "Serves 1",
    prepTime: "20 min",
    description:
      "Tender grilled beef served with roasted vegetables and a savory house sauce for a rich and satisfying main dish.",
    extras: [
      "Herb butter finish",
      "Seasonal vegetables",
      "Choice of side sauce",
    ],
  },
  {
    id: 2,
    name: "Italian Pasta",
    price: "$14",
    serving: "Serves 1",
    prepTime: "15 min",
    description:
      "Creamy pasta blended with parmesan, fresh herbs, and a smooth sauce that makes it a comforting customer favorite.",
    extras: [
      "Fresh parmesan topping",
      "Garlic bread option",
      "Balanced creamy texture",
    ],
  },
  {
    id: 3,
    name: "Healthy Salad",
    price: "$10",
    serving: "Serves 1",
    prepTime: "10 min",
    description:
      "A refreshing mix of crisp vegetables and lemon dressing, perfect for a light meal that still feels complete.",
    extras: [
      "Fresh lemon dressing",
      "Crunchy seasonal greens",
      "Light and clean flavor",
    ],
  },
];

export const chefInfo = {
  title: "Our Special Chef",
  description:
    "Our chef creates delicious dishes with fresh ingredients and a passion for quality food every day.",
  image: chefInfo1,
};

export const footerLinks = [
  { name: "Menu", href: "#menu" },
  { name: "Gallery", href: "#gallery" },
  { name: "Booking", href: "#booking" },
  { name: "Location", href: "#contact" },
];