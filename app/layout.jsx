import "../styles/globals.css";

export const metadata = {
  title: "Afya Prime Supplies",
  description: "Welcome to our website!",
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