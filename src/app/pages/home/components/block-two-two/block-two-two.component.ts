import { ChangeDetectionStrategy, Component, effect, ElementRef, signal, viewChild } from '@angular/core';
import Quill from 'quill';
import { QuillOptions } from 'quill/core/quill';
import { CalendarComponent } from '../../../../components/calendar/calendar.component';
import { SectionBlockComponent } from '../../../../components/section-block/section-block.component';
import { BlockD2Type } from '../../../../types';
import { BlockComponent } from '../block';

@Component({
  selector: 'app-block-two-two',
  imports: [SectionBlockComponent, CalendarComponent],
  templateUrl: './block-two-two.component.html',
  styleUrl: './block-two-two.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BlockTwoTwoComponent extends BlockComponent<BlockD2Type> {
  readonly formGroupClass = 'flex gap-4';
  readonly labelClass = 'text-2xl capitalize w-[120px] mt-2';
  readonly textEditor = viewChild<ElementRef>('textEditor');
  readonly selectedFile = signal<File | null>(null);

  constructor() {
    super();

    effect(() => {
      if (this.textEditor()?.nativeElement) {
        this._initRichTextEditor();
      }
    });
  }

  onFileChange(event: Event): void {
    const target = event.target as HTMLInputElement;
    const file = target.files?.[0];

    if (file) {
      this.selectedFile.set(file);
    }
  }

  private _initRichTextEditor(): void {
    const options: QuillOptions = {
      modules: {
        toolbar: [['bold', 'italic', 'underline'], [{ list: 'bullet' }, { list: 'ordered' }], ['link']],
      },
      theme: 'snow',
    };

    const quill = new Quill(this.textEditor()?.nativeElement, options);
  }
}
