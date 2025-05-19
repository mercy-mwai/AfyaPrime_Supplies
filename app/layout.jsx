
import "../styles/globals.css";

export const metadata = {
  title: "E-commerce Website",
  description: "Welcome to my Website!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}