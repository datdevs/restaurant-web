import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';
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
}
