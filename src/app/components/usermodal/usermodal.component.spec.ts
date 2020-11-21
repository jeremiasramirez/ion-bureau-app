import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UsermodalComponent } from './usermodal.component';

describe('UsermodalComponent', () => {
  let component: UsermodalComponent;
  let fixture: ComponentFixture<UsermodalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsermodalComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UsermodalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
