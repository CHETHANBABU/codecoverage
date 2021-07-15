import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { UserService } from './user.service';

const arr = [{ "id": 1, "email": "george.bluth@reqres.in", "first_name": "George", "last_name": "Bluth", "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/calebogden/128.jpg" }, { "id": 2, "email": "janet.weaver@reqres.in", "first_name": "Janet", "last_name": "Weaver", "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/josephstein/128.jpg" }, { "id": 3, "email": "emma.wong@reqres.in", "first_name": "Emma", "last_name": "Wong", "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/olegpogodaev/128.jpg" }, { "id": 4, "email": "eve.holt@reqres.in", "first_name": "Eve", "last_name": "Holt", "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/marcoramires/128.jpg" }, { "id": 5, "email": "charles.morris@reqres.in", "first_name": "Charles", "last_name": "Morris", "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/stephenmoon/128.jpg" }, { "id": 6, "email": "tracey.ramos@reqres.in", "first_name": "Tracey", "last_name": "Ramos", "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/bigmancho/128.jpg" }];
const sortedArr = [{ "id": 5, "email": "charles.morris@reqres.in", "first_name": "Charles", "last_name": "Morris", "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/stephenmoon/128.jpg" }, { "id": 3, "email": "emma.wong@reqres.in", "first_name": "Emma", "last_name": "Wong", "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/olegpogodaev/128.jpg" }, { "id": 4, "email": "eve.holt@reqres.in", "first_name": "Eve", "last_name": "Holt", "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/marcoramires/128.jpg" }, { "id": 1, "email": "george.bluth@reqres.in", "first_name": "George", "last_name": "Bluth", "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/calebogden/128.jpg" }, { "id": 2, "email": "janet.weaver@reqres.in", "first_name": "Janet", "last_name": "Weaver", "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/josephstein/128.jpg" }, { "id": 6, "email": "tracey.ramos@reqres.in", "first_name": "Tracey", "last_name": "Ramos", "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/bigmancho/128.jpg" }];

describe('UserService', () => {
  let service: UserService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [UserService]
    });
    httpTestingController = TestBed.inject(HttpTestingController);
    service = TestBed.inject(UserService);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return object: getUserDetails', () => {
    expect(service.getUserDetails()).not.toBeNull();
  });

  it('should return object: getUserInfo', () => {
    expect(service.getUserInfo(1)).not.toBeNull();
  });

  it('should return sorted array: sortingUser', () => {
    expect(JSON.stringify(service.sortingUser(arr))).toEqual(JSON.stringify(sortedArr));
  });

});
