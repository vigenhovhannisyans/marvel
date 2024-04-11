import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerDataComponent } from './container-data.component';

describe('ContainerDataComponent', () => {
  let component: ContainerDataComponent;
  let fixture: ComponentFixture<ContainerDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContainerDataComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ContainerDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
