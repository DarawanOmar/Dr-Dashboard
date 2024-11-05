import { Inter } from "next/font/google";
import localFont from "next/font/local";

export const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "700", "800", "900"], // Load multiple weights
});

export const sirwan_reguler = localFont({
  src: "./UniSIRWAN Expo Regular.ttf",
  variable: "--font-sirwan-reguler",
});
export const sirwan_meduim = localFont({
  src: "./UniSIRWAN Expo Medium.ttf",
  variable: "--font-sirwan-meduim",
});
export const sirwan_light = localFont({
  src: "./UniSIRWAN Expo Light.ttf",
  variable: "--font-sirwan-light",
});
export const sirwan_bold = localFont({
  src: "./UniSIRWAN Expo Bold.ttf",
  variable: "--font-sirwan-bold",
});
