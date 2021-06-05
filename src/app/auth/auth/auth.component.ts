import { style } from '@angular/animations';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.sass']
})
export class AuthComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
  }


  ngAfterViewInit(): void {


    let stars = document.getElementById('stars');
    let backMountains = document.getElementById('m-back')
    let frontMountains = document.getElementById('m-front')
    let text = document.getElementById('text')
    let our_psb = document.getElementById('our_psb')
    text.style.zIndex = '9'

    window.addEventListener('scroll', () => {
      let value = window.scrollY;

      if (value >= 0 && value <= 10) {
        text.style.zIndex = '9';
      } else {
        text.style.zIndex = '0'
      }
      stars.style.left = value * 0.25 + 'px';
      backMountains.style.top = value * 0.5 + 'px';
      text.style.marginRight = value * 2 + 'px';

    })

  }


}
