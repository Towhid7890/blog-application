import MainLayout from "@/Layout/MainLayout";
import "@/styles/globals.css";
import { Inter } from 'next/font/google'
import { Toaster } from 'react-hot-toast';

export default function App({ Component, pageProps }) {
   return (
      <MainLayout>
         <Component {...pageProps} />
         <Toaster></Toaster>
      </MainLayout>
   );
}
