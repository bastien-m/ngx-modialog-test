import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { ModalModule } from 'ngx-modialog';
import { ModalContentComponent } from './modal-content/modal-content.component';
import { BootstrapModalModule } from 'ngx-modialog/plugins/bootstrap';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';
import { Modal } from 'ngx-modialog/plugins/bootstrap';

describe('AppComponent', () => {
  let app;
  let fixture;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        ModalModule.forRoot(),
        BootstrapModalModule
      ],
      declarations: [
        AppComponent, ModalContentComponent
      ]
    })
    .overrideModule(BrowserDynamicTestingModule, {
      set: {
        entryComponents: [
          ModalContentComponent
        ]
      }
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    app = fixture.debugElement.componentInstance;
  });

  it('should create the app', async(() => {
    console.log('should create');
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'app'`, async(() => {
    expect(app.title).toEqual('app');
  }));

  it('should render title in a h1 tag', async(() => {
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to app!');
  }));

  fit('test', () => {
    const modal = TestBed.get(Modal);
    spyOn(modal, 'open').and.returnValue({result: new Promise(r => r(false))});

    app.openModal();

    expect(1).toBe(1);
  });

  it('test2', () => {
    const spy =  spyOn(app, 'open').and.returnValue({result: new Promise(r => r(false))});

    app.methodTest();
    fixture.detectChanges();

    expect(2).toBe(2);
  });

});
