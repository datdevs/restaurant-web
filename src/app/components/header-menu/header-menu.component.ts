import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { StoreService } from '../../services';

@Component({
  selector: 'app-header-menu',
  imports: [],
  templateUrl: './header-menu.component.html',
  styleUrl: './header-menu.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderMenuComponent {
  readonly headerMenus = inject(StoreService).menus;

  /**
   * Build link
   * @param menu
   */
  buildLink(menu: string) {
    return `/#${menu.toLowerCase().split(' ').join('_')}`;
  }
}
