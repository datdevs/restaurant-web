import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { HeaderMenuComponent } from '../../components/header-menu/header-menu.component';
import { LanguageSwitcherComponent } from '../../components/language-switcher/language-switcher.component';
import { StoreService } from '../../services';

@Component({
  selector: 'app-header',
  imports: [HeaderMenuComponent, LanguageSwitcherComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  readonly headerMenus = inject(StoreService).menus;
}
