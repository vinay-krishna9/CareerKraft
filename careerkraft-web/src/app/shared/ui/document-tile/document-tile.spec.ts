import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentTile } from './document-tile';

describe('DocumentTile', () => {
  let component: DocumentTile;
  let fixture: ComponentFixture<DocumentTile>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DocumentTile]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DocumentTile);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
