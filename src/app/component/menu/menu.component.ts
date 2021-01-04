import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

  openMenu = false;

  constructor() { }

  ngOnInit() {
  }

  togglePopupMenu() {
    return this.openMenu = !this.openMenu;
  }
}
