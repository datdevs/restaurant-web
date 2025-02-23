import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SectionBlockComponent } from '../../../../components/section-block/section-block.component';
import { Block2Type } from '../../../../types';
import { BlockComponent } from '../block';

@Component({
  selector: 'app-block-two',
  imports: [SectionBlockComponent, NgOptimizedImage],
  templateUrl: './block-two.component.html',
  styleUrl: './block-two.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BlockTwoComponent extends BlockComponent<Block2Type> {}
