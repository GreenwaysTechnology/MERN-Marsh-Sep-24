import localFont from "next/font/local";
import "./globals.css";
import Link from "next/link";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Nav bar */}
        <div>
          <header>
            <h1>Company Name goes here</h1>
          </header>
          <nav>
            <ul>
              <li>
                <Link href={{ pathname: '/' }}>
                  Home
                </Link>
              </li>
              <li>
                <Link href={{ pathname: '/about' }}>
                  About
                </Link>
              </li>
         
            </ul>
          </nav>
          <hr />
        </div>
        {children}
        {/* Footer */}
      </body>
    </html>
  );
}
