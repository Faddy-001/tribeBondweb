import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, catchError, subscribeOn, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  url = environment.apiURL
  login_url = this.url + 'user/login';
  signup_url = this.url + 'user/register';

  constructor(private http: HttpClient) { }
  public setToken(token: string) {
    localStorage.setItem('token', token);
  }
  public getToken() {
    return localStorage.getItem('token');
  }
  public clear() {
    localStorage.clear();
  }
  LoginUser(user: any) {
    return this.http.post(this.login_url, user).pipe(
      tap((res: any) => {
        console.log('Login API Response:', res);
        if (res && res.success && res.data && res.data.token) {
          sessionStorage.setItem('currentUser', JSON.stringify(res.data));
        }
      })
    );
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
    return this.http.post(this.add_event, value,httpOptions).pipe(map((res) => res));

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
    return this.http.get(this.getById_event + id,httpOptions);
  }
  edit_event = this.url + 'events/edit/';
  editEventId(id: number, data: any) {
    let bearerToken = localStorage.getItem('token');
    let httpOptions = {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + bearerToken,
        
      }),
    };
    return this.http.put(this.edit_event  + id, data, httpOptions);

}
add_eventreview = this.url + 'events/add-review';
addEventReview(value:any) {
  let bearerToken = localStorage.getItem('token');
  console.log(bearerToken);

  let httpOptions = {
    headers: new HttpHeaders({
      Authorization: 'Bearer ' + bearerToken,

    }),
  };
  return this.http.post(this.add_eventreview, value,httpOptions).pipe(map((res) => res));

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
  addEdEntity(value:any) {
    let bearerToken = localStorage.getItem('token');
    console.log(bearerToken);

    let httpOptions = {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + bearerToken,

      }),
    };
    return this.http.post(this.add_eductionentiti, value,httpOptions).pipe(map((res) => res));

}
edit_edentity = this.url + 'education-types/edit-entity/';
  editEductionEntity(id: number, data: any) {
    let bearerToken = localStorage.getItem('token');
    let httpOptions = {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + bearerToken,
        
      }),
    };
    return this.http.put(this.edit_edentity  + id, data, httpOptions);

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
    return this.http.get(this.getById_eductionenti + id,httpOptions);
}
add_review = this.url + 'education-types/add-review';
addEducationReview(value:any) {
  let bearerToken = localStorage.getItem('token');
  console.log(bearerToken);

  let httpOptions = {
    headers: new HttpHeaders({
      Authorization: 'Bearer ' + bearerToken,

    }),
  };
  return this.http.post(this.add_review, value,httpOptions).pipe(map((res) => res));

}

// home Blog Api 
add_blogs = this.url + 'blogs/add';
addBlog(value:any) {
  let bearerToken = localStorage.getItem('token');
  console.log(bearerToken);

  let httpOptions = {
    headers: new HttpHeaders({
      Authorization: 'Bearer ' + bearerToken,

    }),
  };
  return this.http.post(this.add_blogs, value,httpOptions).pipe(map((res) => res));

}
add_blogComment = this.url + 'blogs/add-comment';
addBlogComment(value:any) {
  let bearerToken = localStorage.getItem('token');
  console.log(bearerToken);

  let httpOptions = {
    headers: new HttpHeaders({
      Authorization: 'Bearer ' + bearerToken,

    }),
  };
  return this.http.post(this.add_blogComment, value,httpOptions).pipe(map((res) => res));

}
reply_blogComment = this.url + 'blogs/comment-reply';
replyBlogComment(value:any) {
  let bearerToken = localStorage.getItem('token');
  console.log(bearerToken);

  let httpOptions = {
    headers: new HttpHeaders({
      Authorization: 'Bearer ' + bearerToken,

    }),
  };
  return this.http.post(this.reply_blogComment, value,httpOptions).pipe(map((res) => res));

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
fetchAllComment(value:any) {
  let bearerToken = localStorage.getItem('token');
  console.log(bearerToken);

  let httpOptions = {
    headers: new HttpHeaders({
      Authorization: 'Bearer ' + bearerToken,

    }),
  };
  return this.http.post(this.fetch_allcomment, value,httpOptions).pipe(map((res) => res));

}

event_delete_image = this.url + 'events/delete-images';
eventRemoveImage(value:any){
  let bearerToken = localStorage.getItem('token');
  console.log(bearerToken);

  let httpOptions = {
    headers: new HttpHeaders({
      Authorization: 'Bearer ' + bearerToken,

    }),
  };
  return this.http.post(this.event_delete_image, value,httpOptions).pipe(map((res) => res));
}

// halal restaurant
add_restaurant = this.url + 'halal-restaurants/add';

addRestaurant(value:any) {
  let bearerToken = localStorage.getItem('token');
  console.log(bearerToken);

  let httpOptions = {
    headers: new HttpHeaders({
      Authorization: 'Bearer ' + bearerToken,

    }),
  };
  return this.http.post(this.add_restaurant, value,httpOptions).pipe(map((res) => res));

}
edit_restaurant = this.url + 'halal-restaurants/edit/';
  editRestaurant(id: number, data: any) {
    let bearerToken = localStorage.getItem('token');
    let httpOptions = {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + bearerToken,
        
      }),
    };
    return this.http.put(this.edit_restaurant  + id, data, httpOptions);

}
getall_restaurant= this.url + 'halal-restaurants/display';
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
    return this.http.get(this.getById_restaurant + id,httpOptions);
}
add_restaurantReview = this.url + 'halal-restaurants/add-review';
addRestaurantReview(value:any) {
  let bearerToken = localStorage.getItem('token');
  console.log(bearerToken);

  let httpOptions = {
    headers: new HttpHeaders({
      Authorization: 'Bearer ' + bearerToken,

    }),
  };
  return this.http.post(this.add_restaurantReview, value,httpOptions).pipe(map((res) => res));

}
// halal meat
add_meat = this.url + 'halal-meat/add';

addMeat(value:any) {
  let bearerToken = localStorage.getItem('token');
  console.log(bearerToken);

  let httpOptions = {
    headers: new HttpHeaders({
      Authorization: 'Bearer ' + bearerToken,

    }),
  };
  return this.http.post(this.add_meat, value,httpOptions).pipe(map((res) => res));

}
edit_meat = this.url + 'halal-meat/edit/';
  editMeat(id: number, data: any) {
    let bearerToken = localStorage.getItem('token');
    let httpOptions = {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + bearerToken,
        
      }),
    };
    return this.http.put(this.edit_meat  + id, data, httpOptions);

}
getall_meat= this.url + 'halal-meat/display';
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
    return this.http.get(this.getById_meat + id,httpOptions);
}
add_meatReview = this.url + 'halal-meat/add-review';
addMeatReview(value:any) {
  let bearerToken = localStorage.getItem('token');
  console.log(bearerToken);

  let httpOptions = {
    headers: new HttpHeaders({
      Authorization: 'Bearer ' + bearerToken,

    }),
  };
  return this.http.post(this.add_meatReview, value,httpOptions).pipe(map((res) => res));

}

// grocery 
add_grocery = this.url + 'groceries/add';

addGrocery(value:any) {
  let bearerToken = localStorage.getItem('token');
  console.log(bearerToken);

  let httpOptions = {
    headers: new HttpHeaders({
      Authorization: 'Bearer ' + bearerToken,

    }),
  };
  return this.http.post(this.add_grocery, value,httpOptions).pipe(map((res) => res));

}
edit_grocery = this.url + 'groceries/edit/';
  editgrocery(id: number, data: any) {
    let bearerToken = localStorage.getItem('token');
    let httpOptions = {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + bearerToken,
        
      }),
    };
    return this.http.put(this.edit_grocery  + id, data, httpOptions);

}
getall_grocery  = this.url + 'groceries/display';
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
    return this.http.get(this.getById_grocery + id,httpOptions);
}
add_groceryReview = this.url + 'groceries/add-review';
addGroceryReview(value:any) {
  let bearerToken = localStorage.getItem('token');
  console.log(bearerToken);

  let httpOptions = {
    headers: new HttpHeaders({
      Authorization: 'Bearer ' + bearerToken,

    }),
  };
  return this.http.post(this.add_groceryReview, value,httpOptions).pipe(map((res) => res));

}

// household 
add_hold = this.url + 'household-items/add';

addHold(value:any) {
  let bearerToken = localStorage.getItem('token');
  console.log(bearerToken);

  let httpOptions = {
    headers: new HttpHeaders({
      Authorization: 'Bearer ' + bearerToken,

    }),
  };
  return this.http.post(this.add_hold, value,httpOptions).pipe(map((res) => res));

}
edit_hold = this.url + 'household-items/edit/';
  editHold(id: number, data: any) {
    let bearerToken = localStorage.getItem('token');
    let httpOptions = {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + bearerToken,
        
      }),
    };
    return this.http.put(this.edit_hold  + id, data, httpOptions);

}
getall_hold  = this.url + 'household-items/display';
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
    return this.http.get(this.getById_hold + id,httpOptions);
}
add_holdReview = this.url + 'household-items/add-review';
addHoldReview(value:any) {
  let bearerToken = localStorage.getItem('token');
  console.log(bearerToken);

  let httpOptions = {
    headers: new HttpHeaders({
      Authorization: 'Bearer ' + bearerToken,

    }),
  };
  return this.http.post(this.add_holdReview, value,httpOptions).pipe(map((res) => res));

}
// food & catering
add_food = this.url + 'food-catering/add';

addFood(value:any) {
  let bearerToken = localStorage.getItem('token');
  console.log(bearerToken);

  let httpOptions = {
    headers: new HttpHeaders({
      Authorization: 'Bearer ' + bearerToken,

    }),
  };
  return this.http.post(this.add_food, value,httpOptions).pipe(map((res) => res));

}
edit_food = this.url + 'food-catering/edit/';
  editFood(id: number, data: any) {
    let bearerToken = localStorage.getItem('token');
    let httpOptions = {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + bearerToken,
        
      }),
    };
    return this.http.put(this.edit_food  + id, data, httpOptions);

}
getall_food  = this.url + 'food-catering/display';
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
    return this.http.get(this.getById_food + id,httpOptions);
}
add_foodReview = this.url + 'food-catering/add-review';
addFoodReview(value:any) {
  let bearerToken = localStorage.getItem('token');
  console.log(bearerToken);

  let httpOptions = {
    headers: new HttpHeaders({
      Authorization: 'Bearer ' + bearerToken,

    }),
  };
  return this.http.post(this.add_foodReview, value,httpOptions).pipe(map((res) => res));

}

// Rental
add_rental = this.url + 'rental/add';

addRenatl(value:any) {
  let bearerToken = localStorage.getItem('token');
  console.log(bearerToken);

  let httpOptions = {
    headers: new HttpHeaders({
      Authorization: 'Bearer ' + bearerToken,

    }),
  };
  return this.http.post(this.add_rental, value,httpOptions).pipe(map((res) => res));

}
edit_rental = this.url + 'rental/edit/';
  editRental(id: number, data: any) {
    let bearerToken = localStorage.getItem('token');
    let httpOptions = {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + bearerToken,
        
      }),
    };
    return this.http.put(this.edit_rental  + id, data, httpOptions);

}
getall_rental  = this.url + 'rental/display';
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
getById_rental= this.url + 'rental/display/';
  getRenatlById(id: number) {
    let bearerToken = localStorage.getItem('token');
    console.log(bearerToken);

    let httpOptions = {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + bearerToken,

      }),
    };
    return this.http.get(this.getById_rental + id,httpOptions);
}
add_rentalReview = this.url + 'rental/add-review';
addRenatlReview(value:any) {
  let bearerToken = localStorage.getItem('token');
  console.log(bearerToken);

  let httpOptions = {
    headers: new HttpHeaders({
      Authorization: 'Bearer ' + bearerToken,

    }),
  };
  return this.http.post(this.add_rentalReview, value,httpOptions).pipe(map((res) => res));

}

// Sweet
add_sweet = this.url + 'sweets/add';

addSweet(value:any) {
  let bearerToken = localStorage.getItem('token');
  console.log(bearerToken);

  let httpOptions = {
    headers: new HttpHeaders({
      Authorization: 'Bearer ' + bearerToken,

    }),
  };
  return this.http.post(this.add_sweet, value,httpOptions).pipe(map((res) => res));

}
edit_sweet = this.url + 'sweets/edit/';
  editSweet(id: number, data: any) {
    let bearerToken = localStorage.getItem('token');
    let httpOptions = {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + bearerToken,
        
      }),
    };
    return this.http.put(this.edit_sweet  + id, data, httpOptions);

}
getall_sweet  = this.url + 'sweets/display';
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
getById_sweet= this.url + 'sweets/display/';
  getSweetById(id: number) {
    let bearerToken = localStorage.getItem('token');
    console.log(bearerToken);

    let httpOptions = {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + bearerToken,

      }),
    };
    return this.http.get(this.getById_sweet + id,httpOptions);
}
add_sweetsReview = this.url + 'sweets/add-review';
addSweetReview(value:any) {
  let bearerToken = localStorage.getItem('token');
  console.log(bearerToken);

  let httpOptions = {
    headers: new HttpHeaders({
      Authorization: 'Bearer ' + bearerToken,

    }),
  };
  return this.http.post(this.add_sweetsReview, value,httpOptions).pipe(map((res) => res));

}
// Electronic
add_electronic = this.url + 'electronics/add';

addElectronic(value:any) {
  let bearerToken = localStorage.getItem('token');
  console.log(bearerToken);

  let httpOptions = {
    headers: new HttpHeaders({
      Authorization: 'Bearer ' + bearerToken,

    }),
  };
  return this.http.post(this.add_electronic, value,httpOptions).pipe(map((res) => res));

}
edit_electronic = this.url + 'electronics/edit/';
  editElectronic(id: number, data: any) {
    let bearerToken = localStorage.getItem('token');
    let httpOptions = {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + bearerToken,
        
      }),
    };
    return this.http.put(this.edit_electronic  + id, data, httpOptions);

}
getall_electronic  = this.url + 'electronics/display';
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
getById_electronic= this.url + 'electronics/display/';
  getElectronicById(id: number) {
    let bearerToken = localStorage.getItem('token');
    console.log(bearerToken);

    let httpOptions = {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + bearerToken,

      }),
    };
    return this.http.get(this.getById_electronic + id,httpOptions);
}
add_electronicReview = this.url + 'electronics/add-review';
addElectronicReview(value:any) {
  let bearerToken = localStorage.getItem('token');
  console.log(bearerToken);

  let httpOptions = {
    headers: new HttpHeaders({
      Authorization: 'Bearer ' + bearerToken,

    }),
  };
  return this.http.post(this.add_electronicReview, value,httpOptions).pipe(map((res) => res));

}
}