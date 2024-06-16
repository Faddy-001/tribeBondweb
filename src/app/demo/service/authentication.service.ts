import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, catchError, subscribeOn, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  url = environment.apiURL
  login_url = this.url + 'user/login';
  signup_url = this.url + 'user/register';

  constructor(private http: HttpClient,) { }
  public setToken(token: string) {
    localStorage.setItem('token', token);
  }
  public getToken() {
    return localStorage.getItem('token');
  }
  public clear() {
    localStorage.clear();
  }
  isLogin: any;

  // verifyTokenUrl = this.url + 'verifytoken';

  // verifyToken(token: any) {
  //   return this.http.post(this.verifyTokenUrl, token);
  // }
  isAuthenticated(): boolean {
    const token = this.getToken();
    // Add your token validation logic here (e.g., checking if the token is not expired)
    return !!token; // This example simply checks if a token exists
  }

  LoginUser(user: any): Observable<any> {
    return this.http.post(this.login_url, user).pipe(
      tap((res: any) => {
        console.log('Login API Response:', res);
        if (res && res.success && res.data && res.data.token) {
          sessionStorage.setItem('currentUser', JSON.stringify(res.data));
        }
      })
    );
  }


  isLoggedIn(): boolean {
    return !!this.getToken();
  }

  //  signup
  SignUp(user: any) {
    return this.http.post(this.signup_url, user).pipe(map((res) => res));
  }

  // city api
  get_city = this.url + 'constants/cities';

  getCity() {
    return this.http.get(this.get_city).pipe(map((res) => res));
  }
  // Event Api
  add_event = this.url + 'events/add';
  addEvent(value: any) {
    let bearerToken = localStorage.getItem('token');
    console.log(bearerToken);

    let httpOptions = {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + bearerToken,
      }),
    };
    return this.http.post(this.add_event, value, httpOptions).pipe(map((res) => res));

  }
  all_event = this.url + 'events/display';
  getAllEvent() {
    let bearerToken = localStorage.getItem('token');
    console.log(bearerToken);

    let httpOptions = {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + bearerToken,

      }),
    };
    return this.http.get(this.all_event, httpOptions).pipe(map((res) => res));

  }
  getById_event = this.url + 'events/display/';
  getEventById(id: number) {
    let bearerToken = localStorage.getItem('token');
    console.log(bearerToken);

    let httpOptions = {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + bearerToken,

      }),
    };
    return this.http.get(this.getById_event + id, httpOptions);
  }
  edit_event = this.url + 'events/edit/';
  editEventId(id: number, data: any) {
    let bearerToken = localStorage.getItem('token');
    let httpOptions = {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + bearerToken,

      }),
    };
    return this.http.put(this.edit_event + id, data, httpOptions);

  }
  add_eventreview = this.url + 'events/add-review';
  addEventReview(value: any) {
    let bearerToken = localStorage.getItem('token');
    console.log(bearerToken);

    let httpOptions = {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + bearerToken,

      }),
    };
    return this.http.post(this.add_eventreview, value, httpOptions).pipe(map((res) => res));

  }
  // Eduction
  getall_eduction = this.url + 'education-types/display';
  getAllEducation() {
    let bearerToken = localStorage.getItem('token');
    // console.log(bearerToken);

    let httpOptions = {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + bearerToken,

      }),
    };
    return this.http.get(this.getall_eduction, httpOptions).pipe(map((res) => res));

  }
  // add Education entity
  add_eductionentiti = this.url + 'education-types/add-entity';
  addEdEntity(value: any) {
    let bearerToken = localStorage.getItem('token');
    console.log(bearerToken);

    let httpOptions = {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + bearerToken,

      }),
    };
    return this.http.post(this.add_eductionentiti, value, httpOptions).pipe(map((res) => res));

  }
  edit_edentity = this.url + 'education-types/edit-entity/';
  editEductionEntity(id: number, data: any) {
    let bearerToken = localStorage.getItem('token');
    let httpOptions = {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + bearerToken,

      }),
    };
    return this.http.put(this.edit_edentity + id, data, httpOptions);

  }
  getById_eductionenti = this.url + 'education-types/display/';
  getEductionEntitiyById(id: number) {
    let bearerToken = localStorage.getItem('token');
    console.log(bearerToken);

    let httpOptions = {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + bearerToken,

      }),
    };
    return this.http.get(this.getById_eductionenti + id, httpOptions);
  }
  add_review = this.url + 'education-types/add-review';
  addEducationReview(value: any) {
    let bearerToken = localStorage.getItem('token');
    console.log(bearerToken);

    let httpOptions = {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + bearerToken,

      }),
    };
    return this.http.post(this.add_review, value, httpOptions).pipe(map((res) => res));

  }

  // home Blog Api 
  add_blogs = this.url + 'blogs/add';
  addBlog(value: any) {
    let bearerToken = localStorage.getItem('token');
    console.log(bearerToken);

    let httpOptions = {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + bearerToken,

      }),
    };
    return this.http.post(this.add_blogs, value, httpOptions).pipe(map((res) => res));

  }
  add_blogComment = this.url + 'blogs/add-comment';
  addBlogComment(value: any) {
    let bearerToken = localStorage.getItem('token');
    console.log(bearerToken);

    let httpOptions = {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + bearerToken,

      }),
    };
    return this.http.post(this.add_blogComment, value, httpOptions).pipe(map((res) => res));

  }
  reply_blogComment = this.url + 'blogs/comment-reply';
  replyBlogComment(value: any) {
    let bearerToken = localStorage.getItem('token');
    console.log(bearerToken);

    let httpOptions = {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + bearerToken,

      }),
    };
    return this.http.post(this.reply_blogComment, value, httpOptions).pipe(map((res) => res));

  }
  getall_blog = this.url + 'blogs/display';
  getAllBlog() {
    let bearerToken = localStorage.getItem('token');
    // console.log(bearerToken);

    let httpOptions = {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + bearerToken,

      }),
    };
    return this.http.get(this.getall_blog, httpOptions).pipe(map((res) => res));

  }
  fetch_allcomment = this.url + 'blogs/comments/display';
  fetchAllComment(value: any) {
    let bearerToken = localStorage.getItem('token');
    console.log(bearerToken);

    let httpOptions = {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + bearerToken,

      }),
    };
    return this.http.post(this.fetch_allcomment, value, httpOptions).pipe(map((res) => res));

  }

  event_delete_image = this.url + 'events/delete-images';
  eventRemoveImage(value: any) {
    let bearerToken = localStorage.getItem('token');
    console.log(bearerToken);

    let httpOptions = {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + bearerToken,

      }),
    };
    return this.http.post(this.event_delete_image, value, httpOptions).pipe(map((res) => res));
  }

  // halal restaurant
  add_restaurant = this.url + 'halal-restaurants/add';

  addRestaurant(value: any) {
    let bearerToken = localStorage.getItem('token');
    console.log(bearerToken);

    let httpOptions = {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + bearerToken,

      }),
    };
    return this.http.post(this.add_restaurant, value, httpOptions).pipe(map((res) => res));

  }
  edit_restaurant = this.url + 'halal-restaurants/edit/';
  editRestaurant(id: number, data: any) {
    let bearerToken = localStorage.getItem('token');
    let httpOptions = {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + bearerToken,

      }),
    };
    return this.http.put(this.edit_restaurant + id, data, httpOptions);

  }
  getall_restaurant = this.url + 'halal-restaurants/display';
  getAllRestaurant() {
    let bearerToken = localStorage.getItem('token');
    // console.log(bearerToken);

    let httpOptions = {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + bearerToken,

      }),
    };
    return this.http.get(this.getall_restaurant, httpOptions).pipe(map((res) => res));

  }
  getById_restaurant = this.url + 'halal-restaurants/display/';
  getReataurantById(id: number) {
    let bearerToken = localStorage.getItem('token');
    console.log(bearerToken);

    let httpOptions = {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + bearerToken,

      }),
    };
    return this.http.get(this.getById_restaurant + id, httpOptions);
  }
  add_restaurantReview = this.url + 'halal-restaurants/add-review';
  addRestaurantReview(value: any) {
    let bearerToken = localStorage.getItem('token');
    console.log(bearerToken);

    let httpOptions = {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + bearerToken,

      }),
    };
    return this.http.post(this.add_restaurantReview, value, httpOptions).pipe(map((res) => res));

  }
  // halal meat
  add_meat = this.url + 'halal-meat/add';

  addMeat(value: any) {
    let bearerToken = localStorage.getItem('token');
    console.log(bearerToken);

    let httpOptions = {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + bearerToken,

      }),
    };
    return this.http.post(this.add_meat, value, httpOptions).pipe(map((res) => res));

  }
  edit_meat = this.url + 'halal-meat/edit/';
  editMeat(id: number, data: any) {
    let bearerToken = localStorage.getItem('token');
    let httpOptions = {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + bearerToken,

      }),
    };
    return this.http.put(this.edit_meat + id, data, httpOptions);

  }
  getall_meat = this.url + 'halal-meat/display';
  getAllMeat() {
    let bearerToken = localStorage.getItem('token');
    // console.log(bearerToken);

    let httpOptions = {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + bearerToken,

      }),
    };
    return this.http.get(this.getall_meat, httpOptions).pipe(map((res) => res));

  }
  getById_meat = this.url + 'halal-meat/display/';
  getMeatById(id: number) {
    let bearerToken = localStorage.getItem('token');
    console.log(bearerToken);

    let httpOptions = {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + bearerToken,

      }),
    };
    return this.http.get(this.getById_meat + id, httpOptions);
  }
  add_meatReview = this.url + 'halal-meat/add-review';
  addMeatReview(value: any) {
    let bearerToken = localStorage.getItem('token');
    console.log(bearerToken);

    let httpOptions = {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + bearerToken,

      }),
    };
    return this.http.post(this.add_meatReview, value, httpOptions).pipe(map((res) => res));

  }

  // grocery 
  add_grocery = this.url + 'groceries/add';

  addGrocery(value: any) {
    let bearerToken = localStorage.getItem('token');
    console.log(bearerToken);

    let httpOptions = {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + bearerToken,

      }),
    };
    return this.http.post(this.add_grocery, value, httpOptions).pipe(map((res) => res));

  }
  edit_grocery = this.url + 'groceries/edit/';
  editgrocery(id: number, data: any) {
    let bearerToken = localStorage.getItem('token');
    let httpOptions = {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + bearerToken,

      }),
    };
    return this.http.put(this.edit_grocery + id, data, httpOptions);

  }
  getall_grocery = this.url + 'groceries/display';
  getAllGrocery() {
    let bearerToken = localStorage.getItem('token');
    // console.log(bearerToken);

    let httpOptions = {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + bearerToken,

      }),
    };
    return this.http.get(this.getall_grocery, httpOptions).pipe(map((res) => res));

  }
  getById_grocery = this.url + 'groceries/display/';
  getGroceryById(id: number) {
    let bearerToken = localStorage.getItem('token');
    console.log(bearerToken);

    let httpOptions = {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + bearerToken,

      }),
    };
    return this.http.get(this.getById_grocery + id, httpOptions);
  }
  add_groceryReview = this.url + 'groceries/add-review';
  addGroceryReview(value: any) {
    let bearerToken = localStorage.getItem('token');
    console.log(bearerToken);

    let httpOptions = {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + bearerToken,

      }),
    };
    return this.http.post(this.add_groceryReview, value, httpOptions).pipe(map((res) => res));

  }

  // household 
  add_hold = this.url + 'household-items/add';

  addHold(value: any) {
    let bearerToken = localStorage.getItem('token');
    console.log(bearerToken);

    let httpOptions = {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + bearerToken,

      }),
    };
    return this.http.post(this.add_hold, value, httpOptions).pipe(map((res) => res));

  }
  edit_hold = this.url + 'household-items/edit/';
  editHold(id: number, data: any) {
    let bearerToken = localStorage.getItem('token');
    let httpOptions = {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + bearerToken,

      }),
    };
    return this.http.put(this.edit_hold + id, data, httpOptions);

  }
  getall_hold = this.url + 'household-items/display';
  getAllHold() {
    let bearerToken = localStorage.getItem('token');
    // console.log(bearerToken);

    let httpOptions = {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + bearerToken,

      }),
    };
    return this.http.get(this.getall_hold, httpOptions).pipe(map((res) => res));

  }
  getById_hold = this.url + 'household-items/display/';
  getHoldById(id: number) {
    let bearerToken = localStorage.getItem('token');
    console.log(bearerToken);

    let httpOptions = {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + bearerToken,

      }),
    };
    return this.http.get(this.getById_hold + id, httpOptions);
  }
  add_holdReview = this.url + 'household-items/add-review';
  addHoldReview(value: any) {
    let bearerToken = localStorage.getItem('token');
    console.log(bearerToken);

    let httpOptions = {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + bearerToken,

      }),
    };
    return this.http.post(this.add_holdReview, value, httpOptions).pipe(map((res) => res));

  }
  // food & catering
  add_food = this.url + 'food-catering/add';

  addFood(value: any) {
    let bearerToken = localStorage.getItem('token');
    console.log(bearerToken);

    let httpOptions = {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + bearerToken,

      }),
    };
    return this.http.post(this.add_food, value, httpOptions).pipe(map((res) => res));

  }
  edit_food = this.url + 'food-catering/edit/';
  editFood(id: number, data: any) {
    let bearerToken = localStorage.getItem('token');
    let httpOptions = {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + bearerToken,

      }),
    };
    return this.http.put(this.edit_food + id, data, httpOptions);

  }
  getall_food = this.url + 'food-catering/display';
  getAllFood() {
    let bearerToken = localStorage.getItem('token');
    // console.log(bearerToken);

    let httpOptions = {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + bearerToken,

      }),
    };
    return this.http.get(this.getall_food, httpOptions).pipe(map((res) => res));

  }
  getById_food = this.url + 'food-catering/display/';
  getFoodById(id: number) {
    let bearerToken = localStorage.getItem('token');
    console.log(bearerToken);

    let httpOptions = {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + bearerToken,

      }),
    };
    return this.http.get(this.getById_food + id, httpOptions);
  }
  add_foodReview = this.url + 'food-catering/add-review';
  addFoodReview(value: any) {
    let bearerToken = localStorage.getItem('token');
    console.log(bearerToken);

    let httpOptions = {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + bearerToken,

      }),
    };
    return this.http.post(this.add_foodReview, value, httpOptions).pipe(map((res) => res));

  }
  delete_food = this.url + 'food-catering/delete';

  deleteFood(id: any,) {
    // delete by id data
    console.log(localStorage.getItem('token'));

    let bearerToken = localStorage.getItem('token');
    let httpOptions = {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + bearerToken,

      }),
    };
    return this.http.patch(this.delete_food + '/' + id, {}, httpOptions);
  }

  // Rental
  add_rental = this.url + 'rental/add';

  addRenatl(value: any) {
    let bearerToken = localStorage.getItem('token');
    console.log(bearerToken);

    let httpOptions = {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + bearerToken,

      }),
    };
    return this.http.post(this.add_rental, value, httpOptions).pipe(map((res) => res));

  }
  edit_rental = this.url + 'rental/edit/';
  editRental(id: number, data: any) {
    let bearerToken = localStorage.getItem('token');
    let httpOptions = {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + bearerToken,

      }),
    };
    return this.http.put(this.edit_rental + id, data, httpOptions);

  }
  getall_rental = this.url + 'rental/display';
  getAllRental() {
    let bearerToken = localStorage.getItem('token');
    // console.log(bearerToken);

    let httpOptions = {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + bearerToken,

      }),
    };
    return this.http.get(this.getall_rental, httpOptions).pipe(map((res) => res));

  }
  getById_rental = this.url + 'rental/display/';
  getRenatlById(id: number) {
    let bearerToken = localStorage.getItem('token');
    console.log(bearerToken);

    let httpOptions = {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + bearerToken,

      }),
    };
    return this.http.get(this.getById_rental + id, httpOptions);
  }
  add_rentalReview = this.url + 'rental/add-review';
  addRenatlReview(value: any) {
    let bearerToken = localStorage.getItem('token');
    console.log(bearerToken);

    let httpOptions = {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + bearerToken,

      }),
    };
    return this.http.post(this.add_rentalReview, value, httpOptions).pipe(map((res) => res));

  }

  // Sweet
  add_sweet = this.url + 'sweets/add';

  addSweet(value: any) {
    let bearerToken = localStorage.getItem('token');
    console.log(bearerToken);

    let httpOptions = {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + bearerToken,

      }),
    };
    return this.http.post(this.add_sweet, value, httpOptions).pipe(map((res) => res));

  }
  edit_sweet = this.url + 'sweets/edit/';
  editSweet(id: number, data: any) {
    let bearerToken = localStorage.getItem('token');
    let httpOptions = {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + bearerToken,

      }),
    };
    return this.http.put(this.edit_sweet + id, data, httpOptions);

  }
  getall_sweet = this.url + 'sweets/display';
  getAllSweet() {
    let bearerToken = localStorage.getItem('token');
    // console.log(bearerToken);

    let httpOptions = {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + bearerToken,

      }),
    };
    return this.http.get(this.getall_sweet, httpOptions).pipe(map((res) => res));

  }
  getById_sweet = this.url + 'sweets/display/';
  getSweetById(id: number) {
    let bearerToken = localStorage.getItem('token');
    console.log(bearerToken);

    let httpOptions = {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + bearerToken,

      }),
    };
    return this.http.get(this.getById_sweet + id, httpOptions);
  }
  add_sweetsReview = this.url + 'sweets/add-review';
  addSweetReview(value: any) {
    let bearerToken = localStorage.getItem('token');
    console.log(bearerToken);

    let httpOptions = {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + bearerToken,

      }),
    };
    return this.http.post(this.add_sweetsReview, value, httpOptions).pipe(map((res) => res));

  }
  // Electronic
  add_electronic = this.url + 'electronics/add';

  addElectronic(value: any) {
    let bearerToken = localStorage.getItem('token');
    console.log(bearerToken);

    let httpOptions = {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + bearerToken,

      }),
    };
    return this.http.post(this.add_electronic, value, httpOptions).pipe(map((res) => res));

  }
  edit_electronic = this.url + 'electronics/edit/';
  editElectronic(id: number, data: any) {
    let bearerToken = localStorage.getItem('token');
    let httpOptions = {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + bearerToken,

      }),
    };
    return this.http.put(this.edit_electronic + id, data, httpOptions);

  }
  getall_electronic = this.url + 'electronics/display';
  getAllElectronic() {
    let bearerToken = localStorage.getItem('token');
    // console.log(bearerToken);

    let httpOptions = {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + bearerToken,

      }),
    };
    return this.http.get(this.getall_electronic, httpOptions).pipe(map((res) => res));

  }
  getById_electronic = this.url + 'electronics/display/';
  getElectronicById(id: number) {
    let bearerToken = localStorage.getItem('token');
    console.log(bearerToken);

    let httpOptions = {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + bearerToken,

      }),
    };
    return this.http.get(this.getById_electronic + id, httpOptions);
  }
  add_electronicReview = this.url + 'electronics/add-review';
  addElectronicReview(value: any) {
    let bearerToken = localStorage.getItem('token');
    console.log(bearerToken);

    let httpOptions = {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + bearerToken,

      }),
    };
    return this.http.post(this.add_electronicReview, value, httpOptions).pipe(map((res) => res));

  }
  delete_electrnic = this.url + 'electronics/delete';

  deleteElectronic(id: any,) {
    // delete by id data
    console.log(localStorage.getItem('token'));

    let bearerToken = localStorage.getItem('token');
    let httpOptions = {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + bearerToken,

      }),
    };
    return this.http.patch(this.delete_electrnic + '/' + id, {}, httpOptions);
  }
  //  Automobile
  add_automobile = this.url + 'automobile/add';

  addAutomobile(value: any) {
    let bearerToken = localStorage.getItem('token');
    console.log(bearerToken);

    let httpOptions = {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + bearerToken,

      }),
    };
    return this.http.post(this.add_automobile, value, httpOptions).pipe(map((res) => res));

  }
  edit_automobile = this.url + 'automobile/edit/';
  editAutomobile(id: number, data: any) {
    let bearerToken = localStorage.getItem('token');
    let httpOptions = {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + bearerToken,

      }),
    };
    return this.http.put(this.edit_automobile + id, data, httpOptions);

  }
  getall_automobile = this.url + 'automobile/display';
  getAllAutomobile() {
    let bearerToken = localStorage.getItem('token');
    // console.log(bearerToken);

    let httpOptions = {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + bearerToken,

      }),
    };
    return this.http.get(this.getall_automobile, httpOptions).pipe(map((res) => res));

  }
  getById_automobile = this.url + 'automobile/display/';
  getAutomobileById(id: number) {
    let bearerToken = localStorage.getItem('token');
    console.log(bearerToken);

    let httpOptions = {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + bearerToken,

      }),
    };
    return this.http.get(this.getById_automobile + id, httpOptions);
  }
  add_automobileReview = this.url + 'automobile/add-review';
  addAutomobileReview(value: any) {
    let bearerToken = localStorage.getItem('token');
    console.log(bearerToken);

    let httpOptions = {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + bearerToken,

      }),
    };
    return this.http.post(this.add_automobileReview, value, httpOptions).pipe(map((res) => res));

  }
  //  Party
  add_party = this.url + 'party/add';

  addParty(value: any) {
    let bearerToken = localStorage.getItem('token');
    console.log(bearerToken);

    let httpOptions = {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + bearerToken,

      }),
    };
    return this.http.post(this.add_party, value, httpOptions).pipe(map((res) => res));

  }
  edit_party = this.url + 'party/edit/';
  editParty(id: number, data: any) {
    let bearerToken = localStorage.getItem('token');
    let httpOptions = {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + bearerToken,

      }),
    };
    return this.http.put(this.edit_party + id, data, httpOptions);

  }
  getall_party = this.url + 'party/display';
  getAllParty() {
    let bearerToken = localStorage.getItem('token');
    // console.log(bearerToken);

    let httpOptions = {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + bearerToken,

      }),
    };
    return this.http.get(this.getall_party, httpOptions).pipe(map((res) => res));

  }
  getById_party = this.url + 'party/display/';
  getpartyById(id: number) {
    let bearerToken = localStorage.getItem('token');
    console.log(bearerToken);

    let httpOptions = {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + bearerToken,

      }),
    };
    return this.http.get(this.getById_party + id, httpOptions);
  }
  add_partyReview = this.url + 'party/add-review';
  addPartyReview(value: any) {
    let bearerToken = localStorage.getItem('token');
    console.log(bearerToken);

    let httpOptions = {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + bearerToken,

      }),
    };
    return this.http.post(this.add_partyReview, value, httpOptions).pipe(map((res) => res));

  }
  // legal
  add_legal = this.url + 'legal/add';

  addLegal(value: any) {
    let bearerToken = localStorage.getItem('token');
    console.log(bearerToken);

    let httpOptions = {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + bearerToken,

      }),
    };
    return this.http.post(this.add_legal, value, httpOptions).pipe(map((res) => res));

  }
  edit_legal = this.url + 'legal/edit/';
  editLegal(id: number, data: any) {
    let bearerToken = localStorage.getItem('token');
    let httpOptions = {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + bearerToken,

      }),
    };
    return this.http.put(this.edit_legal + id, data, httpOptions);

  }
  getall_legal = this.url + 'legal/display';
  getAllLegal() {
    let bearerToken = localStorage.getItem('token');
    // console.log(bearerToken);

    let httpOptions = {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + bearerToken,

      }),
    };
    return this.http.get(this.getall_legal, httpOptions).pipe(map((res) => res));

  }
  getById_legal = this.url + 'legal/display/';
  getlegalById(id: number) {
    let bearerToken = localStorage.getItem('token');
    console.log(bearerToken);

    let httpOptions = {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + bearerToken,

      }),
    };
    return this.http.get(this.getById_legal + id, httpOptions);
  }
  add_legalReview = this.url + 'legal/add-review';
  addlegalReview(value: any) {
    let bearerToken = localStorage.getItem('token');
    console.log(bearerToken);

    let httpOptions = {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + bearerToken,

      }),
    };
    return this.http.post(this.add_legalReview, value, httpOptions).pipe(map((res) => res));

  }
  delete_legal = this.url + 'legal/delete';

  deleteLegal(id: any,) {
    // delete by id data
    console.log(localStorage.getItem('token'));

    let bearerToken = localStorage.getItem('token');
    let httpOptions = {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + bearerToken,

      }),
    };
    return this.http.patch(this.delete_legal + '/' + id, {}, httpOptions);
  }
  // doctor
  add_doctor = this.url + 'doctor/add';

  addDoctor(value: any) {
    let bearerToken = localStorage.getItem('token');
    console.log(bearerToken);

    let httpOptions = {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + bearerToken,

      }),
    };
    return this.http.post(this.add_doctor, value, httpOptions).pipe(map((res) => res));

  }
  edit_doctor = this.url + 'doctor/edit/';
  editDoctor(id: number, data: any) {
    let bearerToken = localStorage.getItem('token');
    let httpOptions = {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + bearerToken,

      }),
    };
    return this.http.put(this.edit_doctor + id, data, httpOptions);

  }
  getall_doctor = this.url + 'doctor/display';
  getAllDoctor() {
    let bearerToken = localStorage.getItem('token');
    // console.log(bearerToken);

    let httpOptions = {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + bearerToken,

      }),
    };
    return this.http.get(this.getall_doctor, httpOptions).pipe(map((res) => res));

  }
  getById_doctor = this.url + 'doctor/display/';
  getdoctoryId(id: number) {
    let bearerToken = localStorage.getItem('token');
    console.log(bearerToken);

    let httpOptions = {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + bearerToken,

      }),
    };
    return this.http.get(this.getById_doctor + id, httpOptions);
  }
  add_doctorReview = this.url + 'doctor/add-review';
  adddoctorReview(value: any) {
    let bearerToken = localStorage.getItem('token');
    console.log(bearerToken);

    let httpOptions = {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + bearerToken,

      }),
    };
    return this.http.post(this.add_doctorReview, value, httpOptions).pipe(map((res) => res));

  }
  delete_doctor = this.url + 'doctor/delete';

  deleteDoctor(id: any,) {
    // delete by id data
    console.log(localStorage.getItem('token'));

    let bearerToken = localStorage.getItem('token');
    let httpOptions = {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + bearerToken,

      }),
    };
    return this.http.patch(this.delete_doctor + '/' + id, {}, httpOptions);
  }

  // health
  add_health = this.url + 'health/add';

  addHealth(value: any) {
    let bearerToken = localStorage.getItem('token');
    console.log(bearerToken);

    let httpOptions = {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + bearerToken,

      }),
    };
    return this.http.post(this.add_health, value, httpOptions).pipe(map((res) => res));

  }
  edit_health = this.url + 'health/edit/';
  editHealth(id: number, data: any) {
    let bearerToken = localStorage.getItem('token');
    let httpOptions = {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + bearerToken,

      }),
    };
    return this.http.put(this.edit_health + id, data, httpOptions);

  }
  getall_health = this.url + 'health/display';
  getAllHealth() {
    let bearerToken = localStorage.getItem('token');
    // console.log(bearerToken);

    let httpOptions = {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + bearerToken,

      }),
    };
    return this.http.get(this.getall_health, httpOptions).pipe(map((res) => res));

  }
  getById_health = this.url + 'health/display/';
  gethealthId(id: number) {
    let bearerToken = localStorage.getItem('token');
    console.log(bearerToken);

    let httpOptions = {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + bearerToken,

      }),
    };
    return this.http.get(this.getById_health + id, httpOptions);
  }
  add_healthReview = this.url + 'health/add-review';
  addhealthReview(value: any) {
    let bearerToken = localStorage.getItem('token');
    console.log(bearerToken);

    let httpOptions = {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + bearerToken,

      }),
    };
    return this.http.post(this.add_healthReview, value, httpOptions).pipe(map((res) => res));

  }
  delete_health = this.url + 'health/delete';

  deleteHealth(id: any,) {
    // delete by id data
    console.log(localStorage.getItem('token'));

    let bearerToken = localStorage.getItem('token');
    let httpOptions = {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + bearerToken,

      }),
    };
    return this.http.patch(this.delete_health + '/' + id, {}, httpOptions);
  }


  // Qurbani
  add_q = this.url + 'qurbani/add';

  addQur(value: any) {
    let bearerToken = localStorage.getItem('token');
    console.log(bearerToken);

    let httpOptions = {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + bearerToken,

      }),
    };
    return this.http.post(this.add_q, value, httpOptions).pipe(map((res) => res));

  }
  edit_q = this.url + 'qurbani/edit/';
  editQur(id: number, data: any) {
    let bearerToken = localStorage.getItem('token');
    let httpOptions = {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + bearerToken,

      }),
    };
    return this.http.put(this.edit_q + id, data, httpOptions);

  }
  getall_q = this.url + 'qurbani/display';
  getAllQur() {
    let bearerToken = localStorage.getItem('token');
    // console.log(bearerToken);

    let httpOptions = {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + bearerToken,

      }),
    };
    return this.http.get(this.getall_q, httpOptions).pipe(map((res) => res));

  }
  getById_q = this.url + 'qurbani/display/';
  getQurId(id: number) {
    let bearerToken = localStorage.getItem('token');
    console.log(bearerToken);

    let httpOptions = {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + bearerToken,

      }),
    };
    return this.http.get(this.getById_q + id, httpOptions);
  }
  add_qReview = this.url + 'qurbani/add-review';
  addQurReview(value: any) {
    let bearerToken = localStorage.getItem('token');
    console.log(bearerToken);

    let httpOptions = {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + bearerToken,

      }),
    };
    return this.http.post(this.add_qReview, value, httpOptions).pipe(map((res) => res));


  }
  // Beauty
  add_beauty = this.url + 'beauty/add';

  addBeauty(value: any) {
    let bearerToken = localStorage.getItem('token');
    console.log(bearerToken);

    let httpOptions = {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + bearerToken,

      }),
    };
    return this.http.post(this.add_beauty, value, httpOptions).pipe(map((res) => res));

  }
  edit_beauty = this.url + 'beauty/edit/';
  editBeauty(id: number, data: any) {
    let bearerToken = localStorage.getItem('token');
    let httpOptions = {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + bearerToken,

      }),
    };
    return this.http.put(this.edit_beauty + id, data, httpOptions);

  }
  getall_beauty = this.url + 'beauty/display';
  getAllBeauty() {
    let bearerToken = localStorage.getItem('token');
    // console.log(bearerToken);

    let httpOptions = {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + bearerToken,

      }),
    };
    return this.http.get(this.getall_beauty, httpOptions).pipe(map((res) => res));

  }
  getById_beauty = this.url + 'beauty/display/';
  getBeautyId(id: number) {
    let bearerToken = localStorage.getItem('token');
    console.log(bearerToken);

    let httpOptions = {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + bearerToken,

      }),
    };
    return this.http.get(this.getById_beauty + id, httpOptions);
  }
  add_beautyReview = this.url + 'beauty/add-review';
  addBeautyReview(value: any) {
    let bearerToken = localStorage.getItem('token');
    console.log(bearerToken);

    let httpOptions = {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + bearerToken,

      }),
    };
    return this.http.post(this.add_beautyReview, value, httpOptions).pipe(map((res) => res));


  }
  delete_beauty = this.url + 'beauty/delete';

  deleteBeauty(id: any,) {
    // delete by id data
    console.log(localStorage.getItem('token'));

    let bearerToken = localStorage.getItem('token');
    let httpOptions = {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + bearerToken,

      }),
    };
    return this.http.patch(this.delete_beauty + '/' + id, {}, httpOptions);
  }
  // Real Estate
  add_real = this.url + 'real-estate/add';

  addReal(value: any) {
    let bearerToken = localStorage.getItem('token');
    console.log(bearerToken);

    let httpOptions = {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + bearerToken,

      }),
    };
    return this.http.post(this.add_real, value, httpOptions).pipe(map((res) => res));

  }
  edit_real = this.url + 'real-estate/edit/';
  editReal(id: number, data: any) {
    let bearerToken = localStorage.getItem('token');
    let httpOptions = {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + bearerToken,

      }),
    };
    return this.http.put(this.edit_real + id, data, httpOptions);

  }
  getall_real = this.url + 'real-estate/display';
  getAllReal() {
    let bearerToken = localStorage.getItem('token');
    // console.log(bearerToken);

    let httpOptions = {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + bearerToken,

      }),
    };
    return this.http.get(this.getall_real, httpOptions).pipe(map((res) => res));

  }
  getById_real = this.url + 'real-estate/display/';
  getRealId(id: number) {
    let bearerToken = localStorage.getItem('token');
    console.log(bearerToken);

    let httpOptions = {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + bearerToken,

      }),
    };
    return this.http.get(this.getById_real + id, httpOptions);
  }
  add_realReview = this.url + 'real-estate/add-review';
  addRealReview(value: any) {
    let bearerToken = localStorage.getItem('token');
    console.log(bearerToken);

    let httpOptions = {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + bearerToken,

      }),
    };
    return this.http.post(this.add_realReview, value, httpOptions).pipe(map((res) => res));



  }
  delete_real = this.url + 'real-estate/delete';

  deleteReal(id: any,) {
    // delete by id data
    console.log(localStorage.getItem('token'));

    let bearerToken = localStorage.getItem('token');
    let httpOptions = {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + bearerToken,

      }),
    };
    return this.http.patch(this.delete_real + '/' + id, {}, httpOptions);
  }

  // party/banquet
  add_banq = this.url + 'banquet/add';

  addBanq(value: any) {
    let bearerToken = localStorage.getItem('token');
    console.log(bearerToken);

    let httpOptions = {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + bearerToken,

      }),
    };
    return this.http.post(this.add_banq, value, httpOptions).pipe(map((res) => res));

  }
  edit_banq = this.url + 'banquet/edit/';
  editBanq(id: number, data: any) {
    let bearerToken = localStorage.getItem('token');
    let httpOptions = {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + bearerToken,

      }),
    };
    return this.http.put(this.edit_banq + id, data, httpOptions);

  }
  getall_banq = this.url + 'banquet/display';
  getAllBanq() {
    let bearerToken = localStorage.getItem('token');
    // console.log(bearerToken);

    let httpOptions = {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + bearerToken,

      }),
    };
    return this.http.get(this.getall_banq, httpOptions).pipe(map((res) => res));

  }
  getById_banq = this.url + 'banquet/display/';
  getBanqId(id: number) {
    let bearerToken = localStorage.getItem('token');
    console.log(bearerToken);

    let httpOptions = {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + bearerToken,

      }),
    };
    return this.http.get(this.getById_banq + id, httpOptions);
  }
  add_banqReview = this.url + 'banquet/add-review';
  addBanqReview(value: any) {
    let bearerToken = localStorage.getItem('token');
    console.log(bearerToken);

    let httpOptions = {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + bearerToken,

      }),
    };
    return this.http.post(this.add_banqReview, value, httpOptions).pipe(map((res) => res));



  }



  // Henna
  add_henna = this.url + 'henna/add';

  addHenna(value: any) {
    let bearerToken = localStorage.getItem('token');
    console.log(bearerToken);

    let httpOptions = {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + bearerToken,

      }),
    };
    return this.http.post(this.add_henna, value, httpOptions).pipe(map((res) => res));

  }
  edit_henna = this.url + 'henna/edit/';
  editHenna(id: number, data: any) {
    let bearerToken = localStorage.getItem('token');
    let httpOptions = {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + bearerToken,

      }),
    };
    return this.http.put(this.edit_henna + id, data, httpOptions);

  }
  getall_henna = this.url + 'henna/display';
  getAllHenna() {
    let bearerToken = localStorage.getItem('token');
    // console.log(bearerToken);

    let httpOptions = {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + bearerToken,

      }),
    };
    return this.http.get(this.getall_henna, httpOptions).pipe(map((res) => res));

  }
  getById_henna = this.url + 'henna/display/';
  getHennaId(id: number) {
    let bearerToken = localStorage.getItem('token');
    console.log(bearerToken);

    let httpOptions = {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + bearerToken,

      }),
    };
    return this.http.get(this.getById_henna + id, httpOptions);
  }
  add_hennaReview = this.url + 'henna/add-review';
  addHennaReview(value: any) {
    let bearerToken = localStorage.getItem('token');
    console.log(bearerToken);

    let httpOptions = {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + bearerToken,

      }),
    };
    return this.http.post(this.add_hennaReview, value, httpOptions).pipe(map((res) => res));



  }

  // Job
  add_job = this.url + 'jobs/add';

  addJob(value: any) {
    let bearerToken = localStorage.getItem('token');
    console.log(bearerToken);

    let httpOptions = {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + bearerToken,

      }),
    };
    return this.http.post(this.add_job, value, httpOptions).pipe(map((res) => res));

  }
  edit_job = this.url + 'jobs/edit/';
  editJob(id: number, data: any) {
    let bearerToken = localStorage.getItem('token');
    let httpOptions = {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + bearerToken,

      }),
    };
    return this.http.put(this.edit_job + id, data, httpOptions);

  }
  getall_job = this.url + 'jobs/display';
  getAllJob() {
    let bearerToken = localStorage.getItem('token');
    // console.log(bearerToken);

    let httpOptions = {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + bearerToken,

      }),
    };
    return this.http.get(this.getall_job, httpOptions).pipe(map((res) => res));

  }
  getById_job = this.url + 'jobs/display/';
  getjobId(id: number) {
    let bearerToken = localStorage.getItem('token');
    console.log(bearerToken);

    let httpOptions = {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + bearerToken,

      }),
    };
    return this.http.get(this.getById_job + id, httpOptions);
  }
  add_jobReview = this.url + 'jobs/add-review';
  addJobReview(value: any) {
    let bearerToken = localStorage.getItem('token');
    console.log(bearerToken);

    let httpOptions = {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + bearerToken,

      }),
    };
    return this.http.post(this.add_jobReview, value, httpOptions).pipe(map((res) => res));



  }
  delete_job = this.url + 'jobs/delete';

  deletejob(id: any,) {
    // delete by id data
    console.log(localStorage.getItem('token'));

    let bearerToken = localStorage.getItem('token');
    let httpOptions = {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + bearerToken,

      }),
    };
    return this.http.patch(this.delete_job + '/' + id, {}, httpOptions);
  }

  // mosque
  add_mosque = this.url + 'mosque/add';

  addMosque(value: any) {
    let bearerToken = localStorage.getItem('token');
    console.log(bearerToken);

    let httpOptions = {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + bearerToken,

      }),
    };
    return this.http.post(this.add_mosque, value, httpOptions).pipe(map((res) => res));

  }
  edit_mosque = this.url + 'mosque/edit/';
  editMosque(id: number, data: any) {
    let bearerToken = localStorage.getItem('token');
    let httpOptions = {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + bearerToken,

      }),
    };
    return this.http.put(this.edit_mosque + id, data, httpOptions);

  }
  getall_mosque = this.url + 'mosque/display';
  getAllMosque() {
    let bearerToken = localStorage.getItem('token');
    // console.log(bearerToken);

    let httpOptions = {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + bearerToken,

      }),
    };
    return this.http.get(this.getall_mosque, httpOptions).pipe(map((res) => res));

  }
  getById_mosque = this.url + 'mosque/display/';
  getMosqueId(id: number) {
    let bearerToken = localStorage.getItem('token');
    console.log(bearerToken);

    let httpOptions = {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + bearerToken,

      }),
    };
    return this.http.get(this.getById_mosque + id, httpOptions);
  }
  add_mosqueReview = this.url + 'mosque/add-review';
  addmosqueReview(value: any) {
    let bearerToken = localStorage.getItem('token');
    console.log(bearerToken);

    let httpOptions = {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + bearerToken,

      }),
    };
    return this.http.post(this.add_mosqueReview, value, httpOptions).pipe(map((res) => res));



  }
  delete_mosque = this.url + 'mosque/delete';

  deletemosque(id: any,) {
    // delete by id data
    console.log(localStorage.getItem('token'));

    let bearerToken = localStorage.getItem('token');
    let httpOptions = {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + bearerToken,

      }),
    };
    return this.http.patch(this.delete_mosque + '/' + id, {}, httpOptions);
  }

  // buy 

  add_buy = this.url + 'buy-n-sell/add';

  addBuy(value: any) {
    let bearerToken = localStorage.getItem('token');
    console.log(bearerToken);

    let httpOptions = {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + bearerToken,

      }),
    };
    return this.http.post(this.add_buy, value, httpOptions).pipe(map((res) => res));

  }
  edit_buy = this.url + 'buy-n-sell/edit/';
  editBuy(id: number, data: any) {
    let bearerToken = localStorage.getItem('token');
    let httpOptions = {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + bearerToken,

      }),
    };
    return this.http.put(this.edit_buy + id, data, httpOptions);

  }
  getall_buy = this.url + 'buy-n-sell/display';
  getAllBuy() {
    let bearerToken = localStorage.getItem('token');
    // console.log(bearerToken);

    let httpOptions = {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + bearerToken,

      }),
    };
    return this.http.get(this.getall_buy, httpOptions).pipe(map((res) => res));

  }
  getById_buy = this.url + 'buy-n-sell/display/';
  getBuyId(id: number) {
    let bearerToken = localStorage.getItem('token');
    console.log(bearerToken);

    let httpOptions = {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + bearerToken,

      }),
    };
    return this.http.get(this.getById_buy + id, httpOptions);
  }
  add_buyReview = this.url + 'buy-n-sell/add-review';
  addBuyReview(value: any) {
    let bearerToken = localStorage.getItem('token');
    console.log(bearerToken);

    let httpOptions = {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + bearerToken,

      }),
    };
    return this.http.post(this.add_buyReview, value, httpOptions).pipe(map((res) => res));



  }
  delete_buy = this.url + 'buy-n-sell/delete';

  deleteBuy(id: any,) {
    // delete by id data
    console.log(localStorage.getItem('token'));

    let bearerToken = localStorage.getItem('token');
    let httpOptions = {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + bearerToken,

      }),
    };
    return this.http.patch(this.delete_buy + '/' + id, {}, httpOptions);
  }

  // community
  // Askforfree

  add_ask = this.url + 'ask-for-help/add';

  addAskFree(value: any) {
    let bearerToken = localStorage.getItem('token');
    console.log(bearerToken);

    let httpOptions = {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + bearerToken,

      }),
    };
    return this.http.post(this.add_ask, value, httpOptions).pipe(map((res) => res));

  }
  edit_ask = this.url + 'ask-for-help/edit/';
  editAskFree(id: number, data: any) {
    let bearerToken = localStorage.getItem('token');
    let httpOptions = {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + bearerToken,

      }),
    };
    return this.http.put(this.edit_ask + id, data, httpOptions);

  }
  getall_ask = this.url + 'ask-for-help/display';
  getAllAsk() {
    let bearerToken = localStorage.getItem('token');
    // console.log(bearerToken);

    let httpOptions = {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + bearerToken,

      }),
    };
    return this.http.get(this.getall_ask, httpOptions).pipe(map((res) => res));

  }
  getById_ask = this.url + 'ask-for-help/display/';
  getBuyIdask(id: number) {
    let bearerToken = localStorage.getItem('token');
    console.log(bearerToken);

    let httpOptions = {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + bearerToken,

      }),
    };
    return this.http.get(this.getById_ask + id, httpOptions);
  }
  add_askReview = this.url + 'ask-for-help/add-review';
  addAskReview(value: any) {
    let bearerToken = localStorage.getItem('token');
    console.log(bearerToken);

    let httpOptions = {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + bearerToken,

      }),
    };
    return this.http.post(this.add_askReview, value, httpOptions).pipe(map((res) => res));



  }
  delete_ask = this.url + 'ask-for-help/delete';

  deleteAsk(id: any,) {
    // delete by id data
    console.log(localStorage.getItem('token'));

    let bearerToken = localStorage.getItem('token');
    let httpOptions = {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + bearerToken,

      }),
    };
    return this.http.patch(this.delete_ask + '/' + id, {}, httpOptions);
  }

  // FreeGIveAway

  add_give = this.url + 'free-giveaway/add';

  addgive(value: any) {
    let bearerToken = localStorage.getItem('token');
    console.log(bearerToken);

    let httpOptions = {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + bearerToken,

      }),
    };
    return this.http.post(this.add_give, value, httpOptions).pipe(map((res) => res));

  }
  edit_give = this.url + 'free-giveaway/edit/';
  editgive(id: number, data: any) {
    let bearerToken = localStorage.getItem('token');
    let httpOptions = {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + bearerToken,

      }),
    };
    return this.http.put(this.edit_give + id, data, httpOptions);

  }
  getall_give = this.url + 'free-giveaway/display';
  getAllGive() {
    let bearerToken = localStorage.getItem('token');
    // console.log(bearerToken);

    let httpOptions = {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + bearerToken,

      }),
    };
    return this.http.get(this.getall_give, httpOptions).pipe(map((res) => res));

  }
  getById_give = this.url + 'free-giveaway/display/';
  getGive(id: number) {
    let bearerToken = localStorage.getItem('token');
    console.log(bearerToken);

    let httpOptions = {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + bearerToken,

      }),
    };
    return this.http.get(this.getById_give + id, httpOptions);
  }
  add_giveReview = this.url + 'free-giveaway/add-review';
  addGiveReview(value: any) {
    let bearerToken = localStorage.getItem('token');
    console.log(bearerToken);

    let httpOptions = {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + bearerToken,

      }),
    };
    return this.http.post(this.add_giveReview, value, httpOptions).pipe(map((res) => res));



  }
  delete_give = this.url + 'free-giveaway/delete';

  deleteGive(id: any,) {
    // delete by id data
    console.log(localStorage.getItem('token'));

    let bearerToken = localStorage.getItem('token');
    let httpOptions = {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + bearerToken,

      }),
    };
    return this.http.patch(this.delete_give + '/' + id, {}, httpOptions);
  }


  // Volunter

  add_volunter = this.url + 'volunteer-event/add';

  addVolunteer(value: any) {
    let bearerToken = localStorage.getItem('token');
    console.log(bearerToken);

    let httpOptions = {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + bearerToken,

      }),
    };
    return this.http.post(this.add_volunter, value, httpOptions).pipe(map((res) => res));

  }
  edit_volunteer = this.url + 'volunteer-event/edit/';
  editVolunteer(id: number, data: any) {
    let bearerToken = localStorage.getItem('token');
    let httpOptions = {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + bearerToken,

      }),
    };
    return this.http.put(this.edit_volunteer + id, data, httpOptions);

  }
  getall_volunter = this.url + 'volunteer-event/display';
  getAllVolunteer() {
    let bearerToken = localStorage.getItem('token');
    // console.log(bearerToken);

    let httpOptions = {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + bearerToken,

      }),
    };
    return this.http.get(this.getall_volunter, httpOptions).pipe(map((res) => res));

  }
  getById_volunter = this.url + 'volunteer-event/display/';
  getVolunteer(id: number) {
    let bearerToken = localStorage.getItem('token');
    console.log(bearerToken);

    let httpOptions = {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + bearerToken,

      }),
    };
    return this.http.get(this.getById_volunter + id, httpOptions);
  }
  add_volunteerr = this.url + 'volunteer-event/add-review';
  addVolunteerReview(value: any) {
    let bearerToken = localStorage.getItem('token');
    console.log(bearerToken);

    let httpOptions = {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + bearerToken,

      }),
    };
    return this.http.post(this.add_volunteerr, value, httpOptions).pipe(map((res) => res));



  }
  delete_volunter = this.url + 'volunteer-event/delete';

  deleteVolunter(id: any,) {
    // delete by id data
    console.log(localStorage.getItem('token'));

    let bearerToken = localStorage.getItem('token');
    let httpOptions = {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + bearerToken,

      }),
    };
    return this.http.patch(this.delete_volunter + '/' + id, {}, httpOptions);
  }
}