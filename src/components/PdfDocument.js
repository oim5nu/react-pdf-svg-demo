import React from 'react';
import { CustomSvg } from './CustomSvg';
//import { Svg, G, Line, Circle, Polyline, Path } from '@react-pdf/primitives';
import ReactDOMServer, { renderToStaticMarkup } from 'react-dom/server';
import {
  Image,
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Canvas,
} from '@react-pdf/renderer';
import WorldMap from './WorldMap';
import CanvasChart from './CanvasChart';

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#E4E4E4',
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
  image: {
    marginBottom: 10,
  },
});

// Create Document Component
const PdfDocument = () => {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Text>Section #1</Text>
        </View>
        <View style={styles.section}>
          <Text>Section #2</Text>
        </View>
        <View style={styles.section}>
          {/* <Svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 247.06813 247.06813"
            src={dataUri}
          /> */}
          {/* <Svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 247.06813 247.06813"
          >
            <G fill="none" stroke="#000" strokeMiterlimit={10} strokeWidth={6}>
              <Circle cx="123" cy="123" r="120" />
              <Line x1="180.65817" y1="123.5932" x2="66.52024" y2="123.5932" />
              <Polyline points="117.248 168.634 66.52 123.593 117.307 78.428" />
            </G>
          </Svg> */}
          {/* <Canvas
            paint={(painter) =>
              painter
                .moveTo(100, 150)
                .lineTo(100, 250)
                .lineTo(200, 250)
                .fill('#FF3300')
            }
          /> */}
          <CustomSvg
            width={300}
            height={300}
            svg={
              // <svg width="100" height="100">
              //   <circle
              //     cx="50"
              //     cy="50"
              //     r="40"
              //     stroke="green"
              //     strokeWidth="4"
              //     fill="yellow"
              //   />
              // </svg>
              <WorldMap />
            }
          />
        </View>
      </Page>
    </Document>
  );
};

export { PdfDocument };
