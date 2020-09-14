import React from 'react';
import { Canvas } from '@react-pdf/renderer';
import ReactDOMServer, { renderToStaticMarkup } from 'react-dom/server';
import SVGToPDFKit from 'svg-to-pdfkit';

function svgishToString(svg) {
  if (React.isValidElement(svg)) {
    console.log('react element');
    return ReactDOMServer.renderToStaticMarkup(svg);
  } else if (typeof svg === 'string') {
    console.log('string....');
    return svg;
  } else {
    console.log('innerElement');
    return svg.innerHTML;
  }
}
// This function is used to parse SVG to Canvas via pdfkit
export function CustomSvg({
  svg,
  children,
  width,
  height,
  assumePt = true,
  aspectRatio = ['xMidYMid', 'meet'],
  ...props
}) {
  const source = React.useMemo(() => svgishToString(children || svg), [
    children,
    svg,
  ]);

  return (
    <Canvas
      style={{ height, width }}
      {...props}
      paint={(_, width, height, root) => {
        console.log('start to call SVGToPDFKit');
        console.log('root', root);
        SVGToPDFKit(root, source, 0, 0, {
          width,
          height,
          assumePt,
          preserveAspectRatio: aspectRatio.join(' '),
        });
      }}
    />
  );
}
