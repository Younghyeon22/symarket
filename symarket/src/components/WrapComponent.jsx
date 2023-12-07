import React from "react";
import { HeaderComponent } from "./wrap/HeaderComponent";
import MainComponent from "./wrap/MainComponent";
import PostComponent from "./wrap/sub/PostComponent";
import FooterComponent from "./wrap/FooterComponent";

export default function WrapComponent() {
  return(
    <div id="wrap">
      <HeaderComponent/>
      <PostComponent/>
      <MainComponent/>
      <FooterComponent/>
    </div>
  ); 
}
