import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoverLetterListPage } from './cover-letter-list-page';

describe('CoverLetterListPage', () => {
  let component: CoverLetterListPage;
  let fixture: ComponentFixture<CoverLetterListPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CoverLetterListPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoverLetterListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
