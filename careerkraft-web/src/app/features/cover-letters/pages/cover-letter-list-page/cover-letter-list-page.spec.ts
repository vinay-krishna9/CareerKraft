import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CoverLetterListPage } from './cover-letter-list-page';
import { provideZonelessChangeDetection } from '@angular/core';
import { provideMockStore } from '@ngrx/store/testing';

describe('CoverLetterListPage', () => {
  let component: CoverLetterListPage;
  let fixture: ComponentFixture<CoverLetterListPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CoverLetterListPage],
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

    fixture = TestBed.createComponent(CoverLetterListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
