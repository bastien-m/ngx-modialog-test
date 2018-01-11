# AngularTest

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.3.

My node version is 8.9.0
My npm version is 5.6.0

## Bug

In my spec file, I tried to mock the open function in order to test the return result

```
  fit('test', () => {
    const modal = TestBed.get(Modal);
    spyOn(modal, 'open').and.returnValue({result: new Promise(r => r(false))});

    app.openModal();

    expect(1).toBe(1);
  });
```

```
  openModal() {
    console.log('openModal');
    this.modal.open(ModalContentComponent, overlayConfigFactory({ title: 'Title !!!'}, BSModalContext))
    .result
    .then(r => {
      console.log(r);
    }, err => {
      console.log(err);
    });
  }
```


