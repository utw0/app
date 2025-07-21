import { Navbar } from 'components/Nav/Navbar'
import 'lib/fontawesome'
import { ThemeProvider } from 'next-themes'
import { AppProps } from 'next/app'
import { Toaster } from 'react-hot-toast'
import 'styles/globals.css'
import { SWRConfig } from 'swr'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <SWRConfig
      value={{
        fetcher: (url: string) => fetch(`/api/${url}`).then((res) => res.json()),
      }}
    >
      <ThemeProvider attribute="class" defaultTheme="dark"></ThemeProvider>
        <div className="color-layout layout-blue"></div>
        <div className="color-layout layout-purple"></div>
        <Toaster position="bottom-left" />
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <div className="h-full lg:px-0 px-10">
            <Component {...pageProps} />
          </div>
        </div>
    </SWRConfig>
  )
}

export default App
