import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CaseTypeOneComponent } from '../../../../components/case-type-one/case-type-one.component';
import { SectionBlockComponent } from '../../../../components/section-block/section-block.component';
import { Block1Type } from '../../../../types';
import { BlockComponent } from '../block';

@Component({
  selector: 'app-block-one',
  imports: [SectionBlockComponent, CaseTypeOneComponent],
  templateUrl: './block-one.component.html',
  styleUrl: './block-one.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BlockOneComponent extends BlockComponent<Block1Type> {}
