import * as React from "react";
import Svg, { Path, G, Circle } from "react-native-svg";

const EmojiIconSVG = () => {
  return (
    <Svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <G opacity="0.37">
        <Path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M0 10C0 4.486 4.486 0 10 0C15.514 0 20 4.486 20 10C20 15.514 15.514 20 10 20C4.486 20 0 15.514 0 10ZM1.11111 10C1.11111 14.9013 5.09867 18.8889 10 18.8889C14.9013 18.8889 18.8889 14.9013 18.8889 10C18.8889 5.09867 14.9013 1.11111 10 1.11111C5.09867 1.11111 1.11111 5.09867 1.11111 10Z"
          fill="white"
        />
        <Circle cx="13.9465" cy="8.13398" r="1.26289" fill="white" />
        <Circle cx="6.05366" cy="8.13398" r="1.26289" fill="white" />
        <Path
          d="M13.5767 12.0023C11.5711 13.79 8.42891 13.79 6.42336 12.0023C6.19447 11.798 5.84314 11.818 5.63891 12.0474C5.43469 12.2765 5.45491 12.6276 5.68403 12.8318C6.89403 13.9103 8.44714 14.4498 10 14.4498C11.5529 14.4498 13.106 13.9105 14.316 12.8318C14.5451 12.6276 14.5654 12.2765 14.3611 12.0474C14.1569 11.818 13.8056 11.798 13.5767 12.0023Z"
          fill="white"
        />
      </G>
    </Svg>
  );
};

export default EmojiIconSVG;