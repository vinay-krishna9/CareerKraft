import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { Store } from '@ngrx/store';
import { selectCurrentResume } from '../../store/resume.selectors';

@Component({
  selector: 'app-resume-editor-page',
  imports: [],
  templateUrl: './resume-editor-page.html',
  styleUrl: './resume-editor-page.scss',
})
export class ResumeEditorPage {
  store = inject(Store);

  readonly currentResume = toSignal(this.store.select(selectCurrentResume), { initialValue: null });
}
