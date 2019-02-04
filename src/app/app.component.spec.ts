import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import {
  RouterTestingModule
} from '@angular/router/testing';
describe('TESTES FRONTEND ANGULAR', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [RouterTestingModule]
    }).compileComponents();
  }));

 it('TESTES FUNCIONAIS REALIZADO SEGUNDO A DESCRIÇÃO DE USABILIDADE...', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('router-outlet')).toBeTruthy();
   }));
});
