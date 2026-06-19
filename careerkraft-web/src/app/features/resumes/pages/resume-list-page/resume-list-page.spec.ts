import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeListPage } from './resume-list-page';

describe('ResumeListPage', () => {
  let component: ResumeListPage;
  let fixture: ComponentFixture<ResumeListPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResumeListPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResumeListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
