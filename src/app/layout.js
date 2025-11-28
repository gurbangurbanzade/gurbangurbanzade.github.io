import localFont from "next/font/local";
import "../index.css";

const drukWideWeb = localFont({
  src: "../assets/fonts/Druk Wide Web Bold Regular.ttf",
  variable: "--font-druk-wide",
  display: "swap",
});

export const metadata = {
  title: "Portfolio",
  description: "Explore collection of my work in web development, design, and more. View my portfolio to discover creative solutions, innovative projects, and my skills in building unique digital experiences.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={drukWideWeb.variable}>
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Orbitron:wght@900&family=Source+Sans+3:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,500;1,600&display=swap"
        />
      </head>
      <body>
        <div id="root">{children}</div>
      </body>
    </html>
  );
}
