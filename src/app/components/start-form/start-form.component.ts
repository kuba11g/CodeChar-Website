import { Component, OnInit } from '@angular/core';
import * as THREE from 'three';

@Component({
  selector: 'app-start-form',
  templateUrl: './start-form.component.html',
  styleUrls: ['./start-form.component.scss'],
})
export class StartFormComponent implements OnInit {
  ngOnInit() {
    var scene = new THREE.Scene();

    //var geometry = new THREE.TorusGeometry(10, 3, 16, 100)
    var geometry = new THREE.SphereGeometry(200, 12, 6)
    var material = new THREE.MeshBasicMaterial({
      color: 0x001eff,
      wireframe: true,
    });
    var torus = new THREE.Mesh(geometry, material);

    var camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );

    var renderer: any;

    scene.add(torus);

    camera.position.z = 30;
    scene.add(camera);

    renderer = new THREE.WebGLRenderer({
      canvas: <HTMLCanvasElement>document.querySelector('canvas.draw'),
    });

    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.render(scene, camera);

    var animate = function () {
      requestAnimationFrame(animate);
      torus.rotation.x += 0.001;
      torus.rotation.y += 0.0005;
      torus.rotation.z += 0.001;
      renderer.render(scene, camera);
    };

    animate();
  }
}
