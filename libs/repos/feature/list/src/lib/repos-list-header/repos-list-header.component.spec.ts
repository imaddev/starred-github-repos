import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReposListHeaderComponent } from './repos-list-header.component';

describe('ReposListHeaderComponent', () => {
  let component: ReposListHeaderComponent;
  let fixture: ComponentFixture<ReposListHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReposListHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReposListHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
