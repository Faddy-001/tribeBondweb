import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from 'src/app/demo/service/authentication.service';

@Component({
  selector: 'app-add-food',
  templateUrl: './add-food.component.html',
  styleUrl: './add-food.component.scss'
})
export class AddFoodComponent {
  private formData = new FormData();
  idParam = this.activatedRoute.snapshot.params['id'];
  images: string[] = [];
  thumbnailBinary: string[] = [];
  addFood: FormGroup;
  foodResult: any

  constructor(private router: Router, private auth: AuthenticationService, private activatedRoute: ActivatedRoute, private fb: FormBuilder,) {
    this.addFood = this.fb.group({
      name: [],
      address: [],
      phone: [],
      city:[],
      website: [],
      images: [],
      email:[],
      description: [],
      foodType:[]
    });
  }
  userDataString:any
  user:any
  cityData:any
  ngOnInit(): void {
    console.log(localStorage.getItem('user'));
    this.userDataString = localStorage.getItem('user');
   this.user = JSON.parse(this.userDataString);
   this.cityData = this.user.city
   console.log(this.cityData);
   this.addFood = this.fb.group({
     city:[this.cityData],
     name: [],
      address: [],
      phone: [],
      website: [],
      images: [],
      email:[],
      description: [],
      foodType:[]

   })
  }

  onFileSelected(event: any) {
    const input = event.target as HTMLInputElement;
    const files = input.files;
    this.images = [];
    if (files && files.length > 0) {
      // Append the first file as 'thumbnail'
    
      // Append the rest of the files to the 'images' array in FormData
      for (let i = 0; i < files.length; i++) {

        this.formData.append('images', files[i]);
      }
      for (let i = 0; i < files.length; i++) {
        const reader = new FileReader();
        reader.onload = (e: any) => {
          // Push the URL of the loaded image to the images array
          this.images.push(e.target.result as string);
        };
        reader.readAsDataURL(files[i]);
      }
    }
  }

  Submit(value: any) {
    this.formData.append('name', value.name);
    this.formData.append('address', value.address);
    this.formData.append('phone', value.phone);
    this.formData.append('website', value.website);
    this.formData.append('city', value.city);
    this.formData.append('email', value.email);

    this.formData.append('description', value.description);
    this.formData.append('foodType', value.foodType);

    

    this.auth.addFood(this.formData).subscribe(
      (result: any) => {
        this.foodResult = result;
        console.log(this.foodResult.message);

        // this.toastr.success(this.eventResult.message);

        this.router.navigate([`/tribe/foodList`]);
      },
      (err: any) => {
        console.log(err);
        // this.errorShow = err;
        // this.errorMsg = this.errorShow;
        // this.toastr.error(this.errorMsg);
      })
    const formData = new FormData();

  }
}


