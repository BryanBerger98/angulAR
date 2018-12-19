import { Component, OnInit } from '@angular/core';
// import * as Argon from '@argonjs/argon';
// import * as THREE from 'three';
// // import * as Cesium from 'cesium';

@Component({
  selector: 'app-ar',
  templateUrl: './ar.component.html',
  styleUrls: ['./ar.component.scss']
})
export class ArComponent implements OnInit {

  constructor() {
    // const app = Argon.init();
    // app.context.setDefaultReferenceFrame(app.context.localOriginEastUpSouth);

    // const scene = new THREE.Scene();
    // const camera = new THREE.PerspectiveCamera();
    // const userLocation = new THREE.Object3D;
    // scene.add(camera);
    // scene.add(userLocation);
    // const renderer = new THREE.WebGLRenderer({ 
    //     alpha: true, 
    //     logarithmicDepthBuffer: true
    // });

    // renderer.setPixelRatio(window.devicePixelRatio);
    // app.view.element.appendChild(renderer.domElement);

    // var boxGeoObject = new THREE.Object3D();
    // var box = new THREE.Object3D();
    // var loader = new THREE.TextureLoader();
    // loader.load( "box.png", function ( texture ) {
    //     var geometry = new THREE.BoxGeometry(2, 2, 2);
    //     var material = new THREE.MeshBasicMaterial( { map: texture } );
    //     var mesh = new THREE.Mesh( geometry, material );
    //     box.add( mesh );
    // });
    // boxGeoObject.add(box);

    // var boxGeoEntity = new Argon.Cesium.Entity({
    //   name: "I have a box",
    //   position: Cesium.Cartesian3.ZERO,
    //   orientation: Cesium.Quaternion.IDENTITY
    // });

  }

  ngOnInit() {

  }

  onWebcamActivation() {
    console.log("Webcam On");
    var videoEl = (<HTMLVideoElement>document.querySelector("#videoElement"));

    if (navigator.mediaDevices.getUserMedia) {       
      navigator.mediaDevices.getUserMedia({video: true})
      .then(function(stream) {
        videoEl.srcObject = stream;
      })
      .catch(function(err0r) {
        console.log("Something went wrong!");
      });
    }

  }

}
