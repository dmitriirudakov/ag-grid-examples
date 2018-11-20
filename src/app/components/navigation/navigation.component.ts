import { Component } from '@angular/core';

import { CustomRoutes, routes } from '../../app.routes';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {

  public routes: CustomRoutes = routes;
  
}
