import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-menu-item',
    templateUrl: './menu-item.component.html',
    styleUrls: ['./menu-item.component.scss'],
    standalone: true
})
export class MenuItemComponent implements OnInit {
  @Input() menu: any;

  constructor() {}

  ngOnInit(): void {}
}
