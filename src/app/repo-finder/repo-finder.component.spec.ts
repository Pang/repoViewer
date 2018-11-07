import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RepoFinderComponent } from './repo-finder.component';

describe('RepoFinderComponent', () => {
  let component: RepoFinderComponent;
  let fixture: ComponentFixture<RepoFinderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RepoFinderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RepoFinderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
