import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailedPokemonComponent } from './detailed-pokemon.component';

describe('DetailedPokemonComponent', () => {
  let component: DetailedPokemonComponent;
  let fixture: ComponentFixture<DetailedPokemonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailedPokemonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailedPokemonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
