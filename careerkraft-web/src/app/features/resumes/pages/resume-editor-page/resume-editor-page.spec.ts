import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeEditorPage } from './resume-editor-page';

describe('ResumeEditorPage', () => {
  let component: ResumeEditorPage;
  let fixture: ComponentFixture<ResumeEditorPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResumeEditorPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResumeEditorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
