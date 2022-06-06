import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import {Component, CUSTOM_ELEMENTS_SCHEMA} from "@angular/core";
import {RouterTestingModule} from "@angular/router/testing";

describe('AppComponent', () => {

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsModule,RouterTestingModule],
      declarations: [
        AppComponent

      ],
      schemas:[CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  });

   it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
   it(`should have as title 'university-web'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('WEb3Angular');
  });


});
