import {Component, Input, OnInit, HostBinding } from '@angular/core';
import {Portal} from './Portal';
import {MainMenuService} from './MainMenu.services';
import {PortalList} from './PortalList';
import {slideInDownAnimation} from './animation';

@Component({
  selector: 'MainMenu',
  templateUrl: './MainMenu.component.html',
  animations: [ slideInDownAnimation ],
  styleUrls: ['./MainMenu.component.scss'],
  providers: [MainMenuService]
})
export class MainMenuComponent implements OnInit {
  @HostBinding('@routeAnimation') routeAnimation = true;
  @HostBinding('style.display')   display = 'block';
  @HostBinding('style.position')  position = 'relative';
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
