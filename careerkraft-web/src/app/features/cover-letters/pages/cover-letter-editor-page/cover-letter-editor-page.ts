import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { Store } from '@ngrx/store';
import { selectCurrentCoverLetter } from '../../store/cover-letter.selectors';

@Component({
  selector: 'app-cover-letter-editor-page',
  imports: [],
  templateUrl: './cover-letter-editor-page.html',
  styleUrl: './cover-letter-editor-page.scss',
})
export class CoverLetterEditorPage {
  store = inject(Store);

  readonly currentCoverLetter = toSignal(this.store.select(selectCurrentCoverLetter), {
    initialValue: null,
  });
}
