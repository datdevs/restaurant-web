import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-section-block',
  imports: [],
  templateUrl: './section-block.component.html',
  styleUrl: './section-block.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SectionBlockComponent {
  title = input<string>();
  subtitle = input<string>();
  sectionClass = input<string>();
  backgroundColor = input<string>();
  backgroundImage = input<string>();
}
