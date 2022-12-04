import { TestBed } from '@angular/core/testing';

import { PokeapiHttpService } from './pokeapi-http.service';

describe('PokeapiHttpService', () => {
  let service: PokeapiHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PokeapiHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
