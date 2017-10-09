import {Injectable} from '@angular/core';

import {Portal} from './Portal';
import {PortalList} from './PortalList';
import {PORTALLISTS} from './Mock-Portals';

@Injectable()
export class MainMenuService {
  getPortalLists(): Promise<PortalList[]> {
    return Promise.resolve(PORTALLISTS);
  }
}
