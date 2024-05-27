import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NatesPageComponent } from './nates-page.component';

describe('NatesPageComponent', () => {
  let component: NatesPageComponent;
  let fixture: ComponentFixture<NatesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NatesPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NatesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
