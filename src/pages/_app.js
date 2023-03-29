import MainLayout from "@/Layout/MainLayout";
import "@/styles/globals.css";
import { Inter } from 'next/font/google'

export default function App({ Component, pageProps }) {
   return (
      <MainLayout>
         <Component {...pageProps} />
      </MainLayout>
   );
}
