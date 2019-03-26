// This file contains the boilerplate to execute your React app.
// If you want to modify your application's content, start in "index.js"

import {ReactInstance} from 'react-360-web';
import { Surface } from 'react-360-web';

const myCylinderSurface = new Surface(
  4960,
  720,
  Surface.SurfaceShape.Cylinder,
);

function init(bundle, parent, options = {}) {
  const r360 = new ReactInstance(bundle, parent, {
    // Add custom options here
    fullScreen: true,
    ...options,
  });

  // Render your app content to the custom cylinder surface
  r360.renderToSurface(
    r360.createRoot('Main', { /* initial props */ }),
    myCylinderSurface
  )

  r360.renderToLocation(
    r360.createRoot('Hello360', { /* initial props */ }),
    r360.getDefaultLocation()
  );

  // Load the initial environment
  r360.compositor.setBackground(r360.getAssetURL('space.jpg'));
}

window.React360 = {init};
