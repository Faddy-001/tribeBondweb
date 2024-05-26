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
}