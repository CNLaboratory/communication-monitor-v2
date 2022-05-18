import { createGlobalStyle } from "styled-components";
import InterRegular from "./assets/fonts/Inter-Regular.ttf";
import InterMedium from "./assets/fonts/Inter-Medium.ttf";
import InterSemiBold from "./assets/fonts/Inter-SemiBold.ttf";
import NunitoSemiBold from "./assets/fonts/Nunito-SemiBold.ttf";
import NunitoRegular from "./assets/fonts/Nunito-Regular.ttf";


const Styles = createGlobalStyle`
 @font-face {
   font-family: 'Inter';
   font-weight: 400;
   src: url(${InterRegular});
}
 @font-face {
   font-family: 'Inter';
   font-weight: 500;
   src: url(${InterMedium});
}
@font-face {
   font-family: 'Inter';
   font-weight: 600;
   src: url(${InterSemiBold});
}

@font-face {
   font-family: 'Nunito';
   font-weight: 400;
   src: url(${NunitoRegular});
}
@font-face {
   font-family: 'Nunito';
   font-weight: 600;
   src: url(${NunitoSemiBold});
}
   *{
      margin:0;
      padding:0;
      box-sizing: border-box;
     :focus {
      outline: none;
   }
   body {
      font-family: 'Nunito', sans-serif;;
      border: 0;
      outline: 0;
      overflow-x: hidden;
      color: #505D84;
      background-color: #f1f5f7;
      font-size: 16px;
      line-height: 24px;
      
   }
   ul{
      list-style: none;
   }
   a {
      text-decoration: none;
      outline: none;
      color: #696D8C;
      transition: color 0.2s ease-in;
      :hover,a.active {
         color: #6837EF;
      }
   }
   h2{
      font-size: 24px;
      line-height: 38.4px;
       font-family: 'Inter', sans-serif;
       font-weight: 500;
   }
   h4{
      font-size: 20px;
      line-height: 32px;
       font-family: 'Inter', sans-serif;
       font-weight: 600;
   }
   h6{
      font-size: 18px;
      line-height: 26px;
       font-family: 'Inter', sans-serif;
       font-weight: 500;
   }
   h1,h2,h3,h4,h5,h6,.h1,.h2,.h3,.h4,.h5,.h6 {
      color: #343a40;
   }
   .text-base {
      font-size: 14px;
      line-height: 22px;
   } 
   .text-sm {
      font-size: 12px;
      line-height: 20px;
   } 
   input, button {
      font-family: inherit;
      font-size: inherit;
      outline: none;
      background: transparent; 
   }
   button {
      cursor:pointer;
      transition: 0.2s ease-in;
      border: none;
   }
   .simplebar-scrollbar:before {
      background: #a2adb7;
   }
   .react-slidedown {
      transition-duration: 0.5s;
   }
   :fullscreen {
      background-color: #f1f5f7;
   }
   
`;

export default Styles;
