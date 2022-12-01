import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarComponent } from './navbar.component';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('renders a header element', () => {
    let header = fixture.nativeElement.querySelector("header");
    expect(header).toBeTruthy();
  });

  it("renders an img with an id of logo", () => {
    let logo = fixture.nativeElement.querySelector("img#logo");
    expect(logo).toBeTruthy();
  })
});
