import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { StoreService } from '../../services';
import { BlockOneComponent } from './components/block-one/block-one.component';
import { BlockThreeComponent } from './components/block-three/block-three.component';
import { BlockTwoTwoComponent } from './components/block-two-two/block-two-two.component';
import { BlockTwoComponent } from './components/block-two/block-two.component';
import { HeroComponent } from './components/hero/hero.component';

@Component({
  selector: 'app-home',
  imports: [BlockOneComponent, BlockTwoComponent, BlockThreeComponent, BlockTwoTwoComponent, HeroComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
  readonly pageData = inject(StoreService).pageData;
}
