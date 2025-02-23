import { Component, input } from '@angular/core';

@Component({
  selector: 'app-block',
  templateUrl: '',
})
export class BlockComponent<T> {
  data = input<T>();
}
