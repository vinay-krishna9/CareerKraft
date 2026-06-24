import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideZonelessChangeDetection } from '@angular/core';
import { ResumeEditorPage } from './resume-editor-page';
import { provideMockStore } from '@ngrx/store/testing';

describe('ResumeEditorPage', () => {
  let component: ResumeEditorPage;
  let fixture: ComponentFixture<ResumeEditorPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResumeEditorPage],
      providers: [
        provideZonelessChangeDetection(),
        provideMockStore({
          initialState: {
            resume: {
              currentResume: null,
              resumes: [],
              loading: false,
            },
          },
        }),
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(ResumeEditorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
