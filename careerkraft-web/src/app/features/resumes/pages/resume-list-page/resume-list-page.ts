import { Component, inject } from '@angular/core';
import { PersonalInfoForm } from '../../../../shared/components/personal-info-form/personal-info-form';
import { ModalService } from '../../../../shared/services/modal.service';
import { DocumentTile } from '../../../../shared/ui/document-tile/document-tile';
import { Resume } from '../../resume.model';
import { PersonalInfo } from '../../../../shared/models/personal-info.model';
import { Store } from '@ngrx/store';
import { ResumeActions } from '../../store/resume.actions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-resume-list-page',
  imports: [PersonalInfoForm, DocumentTile],
  templateUrl: './resume-list-page.html',
  styleUrl: './resume-list-page.scss',
})
export class ResumeListPage {
  modal = inject(ModalService);
  store = inject(Store);
  router = inject(Router);

  // TODO: fetch resumes and add id to route(TBD)
  readonly resumes: Resume[] = [];

  onPersonalInfoSubmitted(personalInfo: PersonalInfo): void {
    this.store.dispatch(ResumeActions.createDraftResume({ personalInfo }));

    // :id/edit (TBD)
    this.router.navigate(['/resumes/new/edit']);
  }
}
