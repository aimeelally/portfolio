import { Component, OnInit } from '@angular/core';
//import * from jquery;

@Component({
  selector: 'app-panel-d3',
  templateUrl: './panel-d3.component.html',
  styleUrls: ['./panel-d3.component.scss']
})
export class PanelD3Component implements OnInit {

  //list: Array<String>;  

  constructor() { }

  ngOnInit() {
    // let list = Array.from(document.querySelectorAll('a[href^="#"]'));
    // list.forEach(anchor => {
    //     anchor.addEventListener('click', function (e) {
    //         e.preventDefault();

    //         document.querySelector(this.getAttribute('href')).scrollIntoView({
    //             behavior: 'smooth'
    //         });
    //     });
    // });

    /*function isElementInViewport(elem) {
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
        checkAnimation();
    });*/

  }



  

}
