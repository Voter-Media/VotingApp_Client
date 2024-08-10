"use client";

import Footer from "@/components/shared/footer";
import Navbar from "@/components/shared/header";
import { Provider } from "react-redux";
import { store } from "@/redux/store";
import HomePage from "@/components/shared/home";
export default function page() {
return(   <div>

  <Provider store={store}> 
     <HomePage/>
     </Provider>


  </div>
  )
 
  
}


