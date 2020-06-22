import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BreedFormPage } from './breed-form.page';

describe('BreedFormPage', () => {
  let component: BreedFormPage;
  let fixture: ComponentFixture<BreedFormPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BreedFormPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BreedFormPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
