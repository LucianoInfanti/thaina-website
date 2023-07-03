import "./globals.css";
import localFont from "next/font/local";

const fonts = localFont({
  src: [
    {
      path: "./Fonts/NyghtSerif-Light.otf",
      weight: "100",
      style: "normal",
    },
    {
      path: "./Fonts/NyghtSerif-LightItalic.otf",
      weight: "100",
      style: "italic",
    },
  ],
});

export const metadata = {
  title: "Thaina Lima",
  description: "Thaina Lima",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={fonts.className}>{children}</body>
    </html>
  );
}
