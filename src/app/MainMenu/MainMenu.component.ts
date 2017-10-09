import {Component, Input, OnInit} from '@angular/core';
import {Portal} from './Portal';
import {MainMenuService} from './MainMenu.services';
import {PortalList} from './PortalList';

@Component({
  selector: 'MainMenu',
  templateUrl: './MainMenu.component.html',
  styleUrls: ['./MainMenu.component.scss'],
  providers: [MainMenuService]
})
export class MainMenuComponent implements OnInit {
  Portals: Portal[];
  PortalLists: PortalList[];

  constructor(private mainMenuService: MainMenuService) { }

  getPortals(): void {
    this.mainMenuService.getPortalLists().then(PortalLists => this.PortalLists = PortalLists);
  }

  ngOnInit(): void {
    this.getPortals();
  }
}
