import { LocationStrategy, NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, input } from '@angular/core';
import { CaseTypeWithCta } from '../../types';

@Component({
  selector: 'app-case-type-one',
  imports: [NgOptimizedImage],
  templateUrl: './case-type-one.component.html',
  styleUrl: './case-type-one.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CaseTypeOneComponent {
  case = input<CaseTypeWithCta>();
  image = input<number>();
  assetPath = 'assets/images';
  private readonly locationStrategy = inject(LocationStrategy);

  constructor() {
    this.assetPath = this.locationStrategy.getBaseHref() + this.assetPath;
  }
}
