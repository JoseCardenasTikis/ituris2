import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelOfturismoComponent } from './panel-ofturismo.component';

describe('PanelOfturismoComponent', () => {
  let component: PanelOfturismoComponent;
  let fixture: ComponentFixture<PanelOfturismoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PanelOfturismoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PanelOfturismoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
