import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'navigation-menu',
  templateUrl: './navigation-menu.component.html',
  styleUrls: ['./navigation-menu.component.scss']
})
export class NavigationMenuComponent implements OnInit {

  links: Array<{ name: string, url: string, info: string }>;

  constructor() {
    this.links = this.createDummies();
  }

  ngOnInit() {
  }

  showInfo() {

  }

  createDummies(): Array<{ name: string, url: string, info: string }> {
    return [{
      name: 'Geography', url: '/geography', info: 'string'
    }, {
      name: 'Authentication', url: '/authentication', info: 'string'
    }, {
      name: 'Firebase', url: '/firebase', info: 'string'
    }, {
      name: 'Slack', url: '/slack', info: 'string'
    }, {
      name: 'Data representation', url: '/data-representation',
      info: 'Different ways of showing data on the web, ex: excel/table, network/graph, list,...'
    }];
  }

}
