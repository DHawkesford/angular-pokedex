import { createPlatform } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarComponent } from './navbar.component';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;
  let logo: HTMLImageElement;
  let repo: HTMLImageElement;
  let logoText: HTMLSpanElement;
  let repoText: HTMLSpanElement;
  let images: HTMLImageElement[];
  let imagesText: HTMLSpanElement[];

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
    logoText = fixture.nativeElement.querySelector("span#logo");
    repoText = fixture.nativeElement.querySelector("span#repo");
    images = [logo, repo];
    imagesText = [logoText, repoText];
  });

  it('creates', () => {
    expect(component).toBeTruthy();
  });

  it('renders a nav element', () => {
    let header = fixture.nativeElement.querySelector("nav");
    expect(header).toBeTruthy();
  });

  it('renders the images', () => {
    images.forEach(ele => {
      expect(ele)
        .withContext(ele.id)
        .toBeTruthy();
    });
  });

  it("renders the logo with the correct src", () => {
    expect(logo.src).toContain('assets/images/pokedex-logo.png');
  })

  it("renders the repo image with the correct src", () => {
    expect(repo.src).toContain('assets/images/github-logo.png');
  })

  it("does not render an image if the src link is broken", () => {
    images.forEach(ele => {
      component.brokenImages[ele.id] = true;
      fixture.detectChanges();
      ele = fixture.nativeElement.querySelector(`img#${ele.id}`);
      expect(ele).toBeFalsy();
    });
  })

  function breakImageLinks() {
    Object.keys(component.brokenImages).forEach(key => component.brokenImages[key] = true);
    fixture.detectChanges();
    logoText = fixture.nativeElement.querySelector("span#logo");
    repoText = fixture.nativeElement.querySelector("span#repo");
    imagesText = [logoText, repoText];
  }

  it("renders text instead, if an image link is broken", () => {
    breakImageLinks();
    imagesText.forEach(ele => {
      expect(ele).toBeTruthy(); 
    });
  })

  it("renders the site name if the image link is broken", () => {
    breakImageLinks();
    expect(logoText.innerText).toBe("Pokédex");
  })

  it("renders 'GitHub repo' if the repo image link is broken", () => {
    breakImageLinks();
    expect(repoText.innerText).toBe("GitHub repo");
  })

  it("links to the GitHub repo", () => {
    const spy = spyOn(window, "open").and.callThrough();
    const link = fixture.debugElement.nativeElement.querySelector("a#repoLink");
    console.log(fixture.debugElement.nativeElement.querySelector("a#repoLink"));
    // link.triggerEventHandler("click");
    link.click();
    expect(spy).toHaveBeenCalled();
  })
});
