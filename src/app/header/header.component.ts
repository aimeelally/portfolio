import { ViewChild, Component, OnInit, HostListener } from '@angular/core';

import { MatMenuTrigger } from '@angular/material';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {

  list: Array<String>; 
  //moving: Boolean;
  // declare global {
  //     interface Window { MyNamespace: any; }
  // }

  // window.MyNamespace = window.MyNamespace || {};


  constructor() {  }

  ngOnInit() {

    //var moving = false;

    let list = Array.from(document.querySelectorAll('a[href^="#"]'));

    list.forEach(anchor => {
        anchor.addEventListener('click', function (e) {
          //moving = true;
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
        //moving = false;
    });

    function animateSusie() {
      document.querySelector('.susie').classList.add('parachuting');
      setTimeout(function() {
        document.querySelector('.susie').classList.remove('parachuting');
      },500);
    }

    


    function isElementInViewport(elem) {
      //debugger;
      var $elem = $(elem);

      // Get the scroll position of the page.
      //var scrollElem = ((navigator.userAgent.toLowerCase().indexOf('webkit') != -1) ? 'body' : 'html');
      var scrollElem = 'html';
      var viewportTop = $(scrollElem).scrollTop();
      var viewportBottom = viewportTop + $(window).height();

      // Get the position of the element on the page.
      var elemTop = Math.round( $elem.offset().top );
      var elemBottom = elemTop + $elem.height();
      //debugger;

      return ((elemTop < viewportBottom) && (elemBottom > viewportTop));
    }

    // Check if it's time to start the animation.
    function checkAnimation() {
      var $elem = $('.data-vis-graph');

      // If the animation has already been started
      if ($elem.hasClass('start')) {
        return;
      }

      if (isElementInViewport($elem)) {
          // Start the animation
          $elem.addClass('start');
      }
    }

    // Capture scroll events
    $(window).scroll(function(){
      //debugger;
      //if (this.moving) return;

      animateSusie();
      checkAnimation();
    });


 




  }

  

  @ViewChild(MatMenuTrigger) trigger: MatMenuTrigger;

  someMethod() {
    this.trigger.openMenu();
  }

  

}
