import React from "react";

import Navbar from "./Navbar";
import Footer from "./Footer";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
 
      <div className="min-h-screen bg-black relative overflow-hidden">
        {/* Spots lumineux globaux */}
        <div className="fixed inset-0 z-0">
          <div className="absolute w-[800px] h-[800px] -top-[400px] -left-[300px] bg-purple-600/20 rounded-full blur-[128px]" />
          <div className="absolute w-[600px] h-[600px] top-[20%] right-[5%] bg-purple-500/20 rounded-full blur-[128px]" />
          <div className="absolute w-[600px] h-[600px] bottom-[10%] left-[20%] bg-pink-600/20 rounded-full blur-[128px]" />
        </div>
        
        <div className="relative z-10 flex flex-col min-h-screen">
          <Navbar />
          <main className="relative flex-grow">{children}</main>
          <Footer />
        </div>
      </div>
   
  );
};

export default Layout;