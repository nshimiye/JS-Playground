import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-md-item-template',
  templateUrl: './md-item-template.component.html',
  styleUrls: ['./md-item-template.component.scss']
})
export class MdItemTemplateComponent implements OnInit {
  item: { name: string } = { name: 'Hello' };
  @Input('md-highlight-text') hText: string;
  @Input('md-highlight-flags') fText: string;

  constructor() { }

  ngOnInit() {
  }

}
