// Placeholder file to bypass following error:
// "No inputs were found in config file 'C:/Users/danie/Projects/angular-pokedex/tsconfig.spec.json'. Specified 'include' paths were '["src/**/*.spec.ts","src/**/*.d.ts"]' and 'exclude' paths were '["./out-tsc/spec"]'."
// export {};

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';

import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  @Component({selector: 'app-navbar', template: ''})
  class NavbarStubComponent {
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppComponent, NavbarStubComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('creates', () => {
    expect(component).toBeTruthy();
  });

  it("renders a navbar", () => {
    let nav = fixture.nativeElement.querySelector("app-navbar");
    expect(nav).toBeTruthy();
  })

  it("renders a main element" ,() => {
    let main = fixture.nativeElement.querySelector("main");
    expect(main).toBeTruthy();
  })
});