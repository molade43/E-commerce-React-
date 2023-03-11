import { css } from "styled-components";

export function mobile(props) {
  return css`
    @media only screen and (max-width: 380px) {
      ${props}
    }
  `;
}

export function tabletScreen(props) {
  return css`
    @media only screen and (min-width: 380px){
        $(props)
    }
    `;
}

// export function desktopScreenOne(props) {
//   return css`
//     @media only screen and (min-width: 1024px){
//         $(props)
//     }
//     `;
// }

// export function desktopScreenTwo(props) {
//   return css`
//     @media only screen and (min-width: 2340px){
//         $(props)
//     }
//     `;
// }

// export default mobile;
export default { mobile, tabletScreen };
