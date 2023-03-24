import "@/styles/globals.css"
import type { AppProps } from "next/app"
import { Fira_Code, Inter, Lexend } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })
const lexend = Lexend({ subsets: ["latin"] })
const firaCode = Fira_Code({ subsets: ["latin"] })

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>
        {`
          :root {
            --inter-font: ${inter.style.fontFamily};
            --lexend-font: ${lexend.style.fontFamily};
            --firacode-font: ${firaCode.style.fontFamily};
          }
        `}
      </style>
      <Component {...pageProps} />
    </>
  )
}
