import { LocationStrategy } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroComponent {
  assetPath = 'assets/videos/banner.mov';
  private readonly locationStrategy = inject(LocationStrategy);

  constructor() {
    this.assetPath = this.locationStrategy.getBaseHref() + this.assetPath;
  }
}
