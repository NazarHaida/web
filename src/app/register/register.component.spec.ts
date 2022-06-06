import {ComponentFixture, TestBed} from "@angular/core/testing";
import {RegisterComponent} from "./register.component";
import {HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing";
import {HttpClientModule} from "@angular/common/http";
import {FormBuilder, FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RouterTestingModule} from "@angular/router/testing";
import {AppComponent} from "../app.component";


describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;
  const formBuilder = new FormBuilder();


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule, RouterTestingModule, ReactiveFormsModule, FormsModule, HttpClientTestingModule],
      declarations: [ RegisterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(RegisterComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

   it('should post', function () {
    component.onsubmit();
    const req = TestBed.inject(HttpTestingController).expectOne('http://127.0.0.1:5000/user/post');
    expect(req.request.method).toEqual('POST');
  });
  });
