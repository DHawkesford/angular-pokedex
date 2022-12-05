import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';

import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  @Component({selector: 'app-navbar', template: ''})
  class NavbarStubComponent {
  }

  @Component({selector: 'app-footer', template: ''})
  class FooterStubComponent {
  }

  @Component({selector: 'app-pokemon-list', template: ''})
  class PokemonListStubComponent {
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppComponent, NavbarStubComponent, FooterStubComponent ],
      imports: [ RouterTestingModule.withRoutes(
        [{ path: '', component: PokemonListStubComponent }]
      )]
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