import { Component, OnInit } from '@angular/core';
import {DomSanitizer, SafeHtml} from '@angular/platform-browser';
declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-landingpage',
  templateUrl: './landingpage.component.html',
  styleUrls: ['./landingpage.component.css']
})
export class LandingpageComponent implements OnInit {
  constructor(private domSanitizationService: DomSanitizer) { }

  i18nHtmlPage: SafeHtml;

  ngOnInit() {
    $(document).ready(function(){
      $('.carousel').carousel({dist: 20});
    });
  }
}
