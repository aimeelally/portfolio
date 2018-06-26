import { ViewChild, Component, OnInit } from '@angular/core';

import { MatMenuTrigger } from '@angular/material';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {

  list: Array<String>; 
  test: Array<String>;

  constructor() { }

  ngOnInit() {

    let list = Array.from(document.querySelectorAll('a[href^="#"]'));

    list.forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            animateSusie();

            var panel = document.querySelector(this.getAttribute('href'));
            //debugger;
            if(panel.id === 'contact') {
              document.querySelector('.susie').classList.add('at-contact');
            }
            else {
              document.querySelector('.susie').classList.remove('at-contact');
            }

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    function animateSusie() {
      document.querySelector('.susie').classList.add('parachuting');
      setTimeout(function() {
        document.querySelector('.susie').classList.remove('parachuting');
      },500);
    }

  }

  

  @ViewChild(MatMenuTrigger) trigger: MatMenuTrigger;

  someMethod() {
    this.trigger.openMenu();
  }

  

}
