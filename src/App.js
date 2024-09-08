import * as React from "react";
import Navigation from "./Navigation";
// 1. import `NextUIProvider` component
import {NextUIProvider} from "@nextui-org/react";
import './App.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


export default function App() {
  // 2. Wrap NextUIProvider at the root of your app
  return (
    <NextUIProvider>
      <Navigation/>
    </NextUIProvider>
  );
}