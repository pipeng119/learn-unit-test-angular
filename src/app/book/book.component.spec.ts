import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookComponent } from './book.component';

describe('BookComponent', () => {
  let component: BookComponent;
  let fixture: ComponentFixture<BookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain "张三"', () => {
    const h2Element = fixture.nativeElement.querySelector('h2');
    expect(h2Element.textContent).toContain('张三');
  })

  it('should contain "haha"', () => {
    const div1Element = (fixture.nativeElement as HTMLElement).querySelector('#div1')
    expect(div1Element?.textContent).toContain('haha')
  })
});
