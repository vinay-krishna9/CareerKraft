import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoverLetterEditorPage } from './cover-letter-editor-page';

describe('CoverLetterEditorPage', () => {
  let component: CoverLetterEditorPage;
  let fixture: ComponentFixture<CoverLetterEditorPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CoverLetterEditorPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoverLetterEditorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
