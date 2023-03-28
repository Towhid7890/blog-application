import Footer from "@/components/Footer";
import Nav from "@/components/Nav";

const MainLayout = ({children}) => {
   return (
      <>
         <Nav></Nav>
         <div className="min-h-[85vh]">
               {
                  children
               }
         </div>
         <Footer></Footer>
      </>
   );
}

export default MainLayout;