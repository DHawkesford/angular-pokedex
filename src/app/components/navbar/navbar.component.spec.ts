import { createPlatform } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarComponent } from './navbar.component';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;
  let logo: HTMLImageElement;
  let logoText: HTMLSpanElement;
  let repo: HTMLImageElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    logo = fixture.nativeElement.querySelector("img#logo");
    repo = fixture.nativeElement.querySelector("img#repo");
  });

  it('creates', () => {
    expect(component).toBeTruthy();
  });

  it('renders a nav element', () => {
    let header = fixture.nativeElement.querySelector("nav");
    expect(header).toBeTruthy();
  });

  it("renders an img with an id of logo", () => {
    expect(logo).toBeTruthy();
  })

  it("renders an img with an id of repo", () => {
    expect(repo).toBeTruthy();
  })

  it("renders the logo with the correct src", () => {
    expect(logo.src).toContain('assets/images/pokedex-logo.png');
  })

  it("does not render the logo if the image link is broken", () => {
    component.logoSrcBroken = true;
    fixture.detectChanges();
    logo = fixture.nativeElement.querySelector("img#logo");
    expect(logo).toBeFalsy();
  })

  function breakImageLink() {
    component.logoSrcBroken = true;
    fixture.detectChanges();
    logoText = fixture.nativeElement.querySelector("span#logo");
  }

  it("renders text instead, if the logo image link is broken", () => {
    breakImageLink();
    expect(logoText).toBeTruthy(); 
  })

  it("renders the site name if the image link is broken", () => {
    breakImageLink();
    expect(logoText.innerText).toBe("Pokédex");
  })
});
