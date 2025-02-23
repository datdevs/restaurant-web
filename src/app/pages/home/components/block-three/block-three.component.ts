import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SectionBlockComponent } from '../../../../components/section-block/section-block.component';
import { Block3Type } from '../../../../types';
import { BlockComponent } from '../block';

@Component({
  selector: 'app-block-three',
  imports: [SectionBlockComponent],
  templateUrl: './block-three.component.html',
  styleUrl: './block-three.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BlockThreeComponent extends BlockComponent<Block3Type> {}
