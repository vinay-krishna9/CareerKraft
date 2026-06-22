import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideZonelessChangeDetection } from '@angular/core';

import { DocumentTile } from './document-tile';

describe('DocumentTile', () => {
  let component: DocumentTile;
  let fixture: ComponentFixture<DocumentTile>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DocumentTile],
      providers: [provideZonelessChangeDetection()],
    }).compileComponents();

    fixture = TestBed.createComponent(DocumentTile);
    fixture.componentRef.setInput('title', 'Test title');
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
