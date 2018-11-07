import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileFinderComponent } from './profile-finder.component';

describe('ProfileFinderComponent', () => {
  let component: ProfileFinderComponent;
  let fixture: ComponentFixture<ProfileFinderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileFinderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileFinderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
