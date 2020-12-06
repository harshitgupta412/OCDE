import { Component, OnInit } from '@angular/core';
// import {ParticlesComponent} from 'angular-particle'
declare var particlesJS: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  myStyle: object = {};
  myParams: object = {};
  width: number = 100;
  height: number = 100;
  constructor() { }

  ngOnInit(): void {
    particlesJS.load('particles-js', 'assets/particles.json', function() {
      console.log('callback - particles.js config loaded');
      let el = document.querySelector(".particles-js-canvas-el"); 
      // el.setAttribute("height", "100%");
    });
    this.myStyle = {
      'position': 'fixed',
      'width': '100%',
      'height': '100%',
      'z-index': -1,
      'top': 0,
      'left': 0,
      'right': 0,
      'bottom': 0,
  };

this.myParams = {
      particles: {
          number: {
              value: 200,
          },
          color: {
              value: '#ff0000'
          },
          shape: {
              type: 'triangle',
          },
  }
};
  }

}
