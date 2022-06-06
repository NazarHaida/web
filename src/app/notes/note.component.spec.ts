import {ComponentFixture, TestBed} from "@angular/core/testing";
import {NoteComponent} from "./note.component";
import {HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing";
import {HttpClientModule} from "@angular/common/http";
import {FormBuilder, FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RouterTestingModule} from "@angular/router/testing";
import {AppComponent} from "../app.component";


describe('NoteComponent', () => {
  let component: NoteComponent;
  let fixture: ComponentFixture<NoteComponent>;
  const formBuilder = new FormBuilder();


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule, RouterTestingModule, ReactiveFormsModule, FormsModule, HttpClientTestingModule],
      declarations: [ NoteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NoteComponent);
    component = fixture.componentInstance;


    fixture.detectChanges();

  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(NoteComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();

  });
  it("Find Show",()=>{
    const val = component.show_find
    expect(val).toBe(false)
  });
  it("Change Show",()=>{
    const val = component.show_change
    expect(val).toBe(false)
  });
  it("Add Show",()=>{
    const val = component.show_add
    expect(val).toBe(false)
  });
  it(" Function Find Show",()=>{
    const val = component.find_show()
    expect(val).toBe(true)
  });
  it(" Function Change Show",()=>{
    const val = component.change_show()
    expect(val).toBe(true)
  });
  it(" Function Add Show",()=>{
    const val = component.add_show()
    expect(val).toBe(true)
  });
   it(" Show",()=>{
     const val=component.form.getRawValue()
    expect(val).toEqual( ({ text: '', id: '' }))
  });
  it('should post', function () {
    component.find();
    const req = TestBed.inject(HttpTestingController).expectOne('http://127.0.0.1:5000/note/find');
    expect(req.request.method).toEqual('POST');
  });
   it('should post', function () {
    component.delete();
    const req = TestBed.inject(HttpTestingController).expectOne('http://127.0.0.1:5000/note/delete');
    expect(req.request.method).toEqual('POST');
  });
    it('should post', function () {
    component.add();
    const req = TestBed.inject(HttpTestingController).expectOne('http://127.0.0.1:5000/note/add');
    expect(req.request.method).toEqual('POST');
  });
  });

