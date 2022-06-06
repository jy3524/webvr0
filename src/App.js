import React from "react";
import 'aframe';
import {Entity, Scene} from 'aframe-react';
import scope from "./scope.gltf";

function App() {
  return (
    <Scene renderer="colorManagement: true">
      <a-assets>
        <img id="groundTexture" src="https://cdn.aframe.io/a-painter/images/floor.jpg" alt=""/>
        <img id="skyTexture" src="https://cdn.aframe.io/a-painter/images/sky.jpg" alt=""/>
        <a-asset-item id="scope" src={scope}></a-asset-item>
      </a-assets>
      <Entity primitive="a-plane" src="#groundTexture" rotation="-90 0 0" height="100" width="100"/>
      <Entity primitive="a-light" type="ambient" color="#445451"/>
      <Entity primitive="a-light" type="point" intensity="2" position="2 4 4"/>
      <Entity primitive="a-sky" height="2048" radius="30" src="#skyTexture" theta-length="90" width="2048"/>
      <Entity particle-system={{preset: 'snow', particleCount: 2000}}/>
      <Entity text={{value: "Jeongin's WebVR Scope!", align: 'center'}} position={{x: 0, y: 2, z: -1}}/>
      <Entity 
        gltf-model={"#scope"}
        position="0 0 -5"
        scale="0.3 0.3 0.3" 
        rotation="0 0 0"
        animation="property: rotation; to: 0 360 0; loop: true; dur: 10000" 
      />
    </Scene>
  );
}

export default App;

