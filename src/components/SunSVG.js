import React from "react";
import Svg, { Circle, G, Rect, Ellipse, Line } from 'react-native-svg';

// const SunSVG = () => {
//     const SVG =
//     `<svg width="289" height="289" xmlns="http://www.w3.org/2000/svg">
//      <g>
//       <title>Layer 1</title>
//       <ellipse stroke="#FFF" ry="157" rx="157" id="svg_3" cy="157" cx="157" fill="#FA0"/>
//       <line fill="none" x1="156.19878" y1="81.94323" x2="156.19878" y2="16.94323" id="svg_2" stroke-linejoin="undefined" stroke-linecap="undefined" stroke="#FFF" stroke-width="10"/>
//       <ellipse fill="none" stroke-width="10" cx="156.08633" cy="21.25805" id="svg_4" rx="0.30727" ry="3.70369" stroke="#FFF"/>
//       <line transform="rotate(90 263.315 155.432)" fill="none" x1="263.31652" y1="187.93814" x2="263.31652" y2="122.92598" id="svg_5" stroke-linejoin="undefined" stroke-linecap="undefined" stroke="#FFF" stroke-width="10"/>
//       <ellipse transform="rotate(90 291.629 155.474)" fill="none" stroke-width="10" cx="291.62882" cy="155.47422" id="svg_6" rx="0.20578" ry="3.70369" stroke="#FFF"/>
//       <line fill="none" x1="156.59879" y1="294.40193" x2="156.6855" y2="229.69369" id="svg_7" stroke-linejoin="undefined" stroke-linecap="undefined" stroke-width="10" stroke="#FFF"/>
//       <ellipse fill="none" stroke-width="10" cx="156.59878" cy="291.74078" id="svg_8" rx="0.20578" ry="3.70369" stroke="#FFF"/>
//       <line transform="rotate(45 232.69 81.0753)" fill="none" x1="232.69095" y1="113.5756" x2="232.69095" y2="48.5756" id="svg_9" stroke-linejoin="undefined" stroke-linecap="undefined" stroke="#FFF" stroke-width="10"/>
//       <ellipse transform="rotate(45 254.739 59.0643)" fill="none" stroke-width="10" cx="254.73934" cy="59.06453" id="svg_10" rx="0.20578" ry="3.70369" stroke="#FFF"/>
//       <line transform="rotate(45 81.4946 231.672)" fill="none" x1="81.49439" y1="264.17215" x2="81.49439" y2="199.17215" id="svg_11" stroke-linejoin="undefined" stroke-linecap="undefined" stroke="#FFF" stroke-width="10"/>
//       <ellipse transform="rotate(45 59.5806 253.332)" fill="none" stroke-width="10" cx="59.58004" cy="253.33205" id="svg_12" rx="0.20578" ry="3.70369" stroke="#FFF"/>
//       <line transform="rotate(135 81.5086 80.4504)" fill="none" x1="81.5085" y1="112.95005" x2="81.5085" y2="47.95005" id="svg_13" stroke-linejoin="undefined" stroke-linecap="undefined" stroke="#FFF" stroke-width="10"/>
//       <ellipse transform="rotate(135 59.2845 58.4563)" fill="none" stroke-width="10" cx="59.28456" cy="58.45681" id="svg_14" rx="0.20578" ry="3.70369" stroke="#FFF"/>
//       <line transform="rotate(90 50.2546 155.543)" fill="none" x1="50.25462" y1="188.0432" x2="50.25462" y2="123.0432" id="svg_15" stroke-linejoin="undefined" stroke-linecap="undefined" stroke="#FFF" stroke-width="10"/>
//       <ellipse transform="rotate(90 21.8385 155.531)" fill="none" stroke-width="10" cx="21.83874" cy="155.53133" id="svg_16" rx="0.20578" ry="3.70369" stroke="#FFF"/>
//       <line transform="rotate(135 232.746 230.996)" fill="none" x1="232.74657" y1="263.4969" x2="232.74657" y2="198.4969" id="svg_17" stroke-linejoin="undefined" stroke-linecap="undefined" stroke="#FFF" stroke-width="10"/>
//       <ellipse transform="rotate(135 254.175 252.656)" fill="none" stroke-width="10" cx="254.17577" cy="252.65679" id="svg_18" rx="0.20578" ry="3.70369" stroke="#FFF"/>
//       <ellipse fill="none" stroke="#FFF" cx="156.89054" cy="156.10532" id="svg_22" rx="64" ry="64" stroke-width="10"/>
//      </g>
//     </svg>`

//     const SunComp = () => <SvgXml xml={SVG}/>

//     return <SunComp />;
// }

const SunSVG = (props) => {
    return (
        <Svg width="160" height="314" xmlns="http://www.w3.org/2000/svg">
            <G>
                <Ellipse stroke="none" ry="157" rx="157" id="svg_3" cy="157" cx="157" fill="#FB4"/>
                <Line fill="none" x1="156.19878" y1="81.94323" x2="156.19878" y2="16.94323" id="svg_2" stroke-linejoin="undefined" stroke-linecap="undefined" stroke="#FFF" strokeWidth="10"/>
                <Ellipse fill="none" strokeWidth="10" cx="156.08633" cy="21.25805" id="svg_4" rx="0.30727" ry="3.70369" stroke="#FFF"/>
                <Line transform="rotate(90 263.315 155.432)" fill="none" x1="263.31652" y1="187.93814" x2="263.31652" y2="122.92598" id="svg_5" stroke-linejoin="undefined" stroke-linecap="undefined" stroke="#FFF" strokeWidth="10"/>
                <Ellipse transform="rotate(90 291.629 155.474)" fill="none" strokeWidth="10" cx="291.62882" cy="155.47422" id="svg_6" rx="0.20578" ry="3.70369" stroke="#FFF"/>
                <Line fill="none" x1="156.59879" y1="294.40193" x2="156.6855" y2="229.69369" id="svg_7" stroke-linejoin="undefined" stroke-linecap="undefined" strokeWidth="10" stroke="#FFF"/>
                <Ellipse fill="none" strokeWidth="10" cx="156.59878" cy="291.74078" id="svg_8" rx="0.20578" ry="3.70369" stroke="#FFF"/>
                <Line transform="rotate(45 232.69 81.0753)" fill="none" x1="232.69095" y1="113.5756" x2="232.69095" y2="48.5756" id="svg_9" stroke-linejoin="undefined" stroke-linecap="undefined" stroke="#FFF" strokeWidth="10"/>
                <Ellipse transform="rotate(45 254.739 59.0643)" fill="none" strokeWidth="10" cx="254.73934" cy="59.06453" id="svg_10" rx="0.20578" ry="3.70369" stroke="#FFF"/>
                <Line transform="rotate(45 81.4946 231.672)" fill="none" x1="81.49439" y1="264.17215" x2="81.49439" y2="199.17215" id="svg_11" stroke-linejoin="undefined" stroke-linecap="undefined" stroke="#FFF" strokeWidth="10"/>
                <Ellipse transform="rotate(45 59.5806 253.332)" fill="none" strokeWidth="10" cx="59.58004" cy="253.33205" id="svg_12" rx="0.20578" ry="3.70369" stroke="#FFF"/>
                <Line transform="rotate(135 81.5086 80.4504)" fill="none" x1="81.5085" y1="112.95005" x2="81.5085" y2="47.95005" id="svg_13" stroke-linejoin="undefined" stroke-linecap="undefined" stroke="#FFF" strokeWidth="10"/>
                <Ellipse transform="rotate(135 59.2845 58.4563)" fill="none" strokeWidth="10" cx="59.28456" cy="58.45681" id="svg_14" rx="0.20578" ry="3.70369" stroke="#FFF"/>
                <Line transform="rotate(90 50.2546 155.543)" fill="none" x1="50.25462" y1="188.0432" x2="50.25462" y2="123.0432" id="svg_15" stroke-linejoin="undefined" stroke-linecap="undefined" stroke="#FFF" strokeWidth="10"/>
                <Ellipse transform="rotate(90 21.8385 155.531)" fill="none" strokeWidth="10" cx="21.83874" cy="155.53133" id="svg_16" rx="0.20578" ry="3.70369" stroke="#FFF"/>
                <Line transform="rotate(135 232.746 230.996)" fill="none" x1="232.74657" y1="263.4969" x2="232.74657" y2="198.4969" id="svg_17" stroke-linejoin="undefined" stroke-linecap="undefined" stroke="#FFF" strokeWidth="10"/>
                <Ellipse transform="rotate(135 254.175 252.656)" fill="none" strokeWidth="10" cx="254.17577" cy="252.65679" id="svg_18" rx="0.20578" ry="3.70369" stroke="#FFF"/>
                <Ellipse fill="none" stroke="#FFF" cx="156.89054" cy="156.10532" id="svg_22" rx="64" ry="64" strokeWidth="10"/>
            </G>
        </Svg>
    )
}

export default SunSVG