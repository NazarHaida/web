import {ComponentFixture, TestBed} from "@angular/core/testing";
import {AccComponent} from "./acc.component";
import {HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing";
import {HttpClientModule} from "@angular/common/http";
import {FormBuilder, FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RouterTestingModule} from "@angular/router/testing";
import {AppComponent} from "../app.component";


describe('AccComponent', () => {
  let component: AccComponent;
  let fixture: ComponentFixture<AccComponent>;
  const formBuilder = new FormBuilder();


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule, RouterTestingModule, ReactiveFormsModule, FormsModule, HttpClientTestingModule],
      declarations: [ AccComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AccComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();

  });

   it('should post', function () {
    component.onsubmit();
    const req = TestBed.inject(HttpTestingController).expectOne('http://127.0.0.1:5000/user/delete');
    expect(req.request.method).toEqual('POST');
  });
    it('should post', function () {
    component.onsubmit2();
    const req = TestBed.inject(HttpTestingController).expectOne('http://127.0.0.1:5000/user/change');
    expect(req.request.method).toEqual('POST');
  });
  });
