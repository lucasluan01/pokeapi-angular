import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonCartaoComponent } from './pokemon-cartao.component';

describe('PokemonCartaoComponent', () => {
  let component: PokemonCartaoComponent;
  let fixture: ComponentFixture<PokemonCartaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokemonCartaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonCartaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
