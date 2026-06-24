import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CoverLetterEditorPage } from './cover-letter-editor-page';
import { provideZonelessChangeDetection } from '@angular/core';
import { provideMockStore } from '@ngrx/store/testing';

describe('CoverLetterEditorPage', () => {
  let component: CoverLetterEditorPage;
  let fixture: ComponentFixture<CoverLetterEditorPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CoverLetterEditorPage],
      providers: [
        provideZonelessChangeDetection(),
        provideMockStore({
          initialState: {
            coverLetter: {
              currentCoverLetter: null,
              coverLetters: [],
              loading: false,
            },
          },
        }),
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(CoverLetterEditorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
