import "./globals.css";
import { AuthProvider } from "@/providers/AuthProvider";

export const metadata = {
  title: "Login Page",
  description: "Localized login page",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body>
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
