import { Component, inject } from '@angular/core';
import { DocumentTile } from '../../../../shared/ui/document-tile/document-tile';
import { PersonalInfo } from '../../../../shared/models/personal-info.model';
import { CoverLetter } from '../../cover-letter.model';
import { PersonalInfoForm } from '../../../../shared/components/personal-info-form/personal-info-form';
import { ModalService } from '../../../../shared/services/modal.service';

@Component({
  selector: 'app-cover-letter-list-page',
  imports: [PersonalInfoForm, DocumentTile],
  templateUrl: './cover-letter-list-page.html',
  styleUrl: './cover-letter-list-page.scss',
})
export class CoverLetterListPage {
  modal = inject(ModalService);

  readonly coverLetters: CoverLetter[] = [];

  onPersonalInfoSubmitted(personalInfo: PersonalInfo): void {}
}
