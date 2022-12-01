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

  it('renders a nav element', () => {
    let header = fixture.nativeElement.querySelector("nav");
    expect(header).toBeTruthy();
  });

  it("renders an img with an id of logo", () => {
    let logo = fixture.nativeElement.querySelector("img#logo");
    expect(logo).toBeTruthy();
  })

  it("renders the logo with the correct src", () => {
    let logo = fixture.nativeElement.querySelector("img#logo");
    expect(logo.src).toContain('assets/images/pokedex-logo.png');
  })
});
