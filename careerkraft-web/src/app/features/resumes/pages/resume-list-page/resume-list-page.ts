import { Component, inject } from '@angular/core';
import { PersonalInfoForm } from '../../../../shared/components/personal-info-form/personal-info-form';
import { ModalService } from '../../../../shared/services/modal.service';
import { DocumentTile } from '../../../../shared/ui/document-tile/document-tile';
import { Resume } from '../../resume.model';

@Component({
  selector: 'app-resume-list-page',
  imports: [PersonalInfoForm, DocumentTile],
  templateUrl: './resume-list-page.html',
  styleUrl: './resume-list-page.scss',
})
export class ResumeListPage {
  modal = inject(ModalService);

  readonly resumes: Resume[] = [];
}
