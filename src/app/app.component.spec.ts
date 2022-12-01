// Placeholder file to bypass following error:
// "No inputs were found in config file 'C:/Users/danie/Projects/angular-pokedex/tsconfig.spec.json'. Specified 'include' paths were '["src/**/*.spec.ts","src/**/*.d.ts"]' and 'exclude' paths were '["./out-tsc/spec"]'."
// export {};

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('creates', () => {
    expect(component).toBeTruthy();
  });

  it("renders a navbar component", () => {
    
  })
});