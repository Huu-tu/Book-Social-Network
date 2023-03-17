import React from "react";
import AppHeader from "../../components/Home/Components/AppHeader";
import AppContent from "../../components/Home/Components/AppContent";
import AppFooter from "../../components/Home/Components/AppFooter";

export default function Home(){
  return(
    <>
      {/*{<SocketioClient />}*/}
      <AppHeader />
      <AppContent />
      <AppFooter />
    </>
  )
}