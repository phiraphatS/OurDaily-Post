import type { Metadata } from "next";
import { Providers } from './providers'
import { fonts } from "./fonts";
import { Box } from "@chakra-ui/react";
import "../styles/globals.scss";
import '@fortawesome/fontawesome-svg-core/styles.css';

export const metadata: Metadata = {
  title: "Our Daily Post",
  description: "A blog about the daily life of our lovely life",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={fonts.philosopher.variable}>
      <body>
        <Providers>
          <Box className="fonts.body">
            {children}
          </Box>
        </Providers>
      </body>
    </html>
  );
}
