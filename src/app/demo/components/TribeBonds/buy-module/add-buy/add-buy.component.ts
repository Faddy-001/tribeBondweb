import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from 'src/app/demo/service/authentication.service';

@Component({
  selector: 'app-add-buy',
 
  templateUrl: './add-buy.component.html',
  styleUrl: './add-buy.component.scss'
})
export class AddBuyComponent {
  images: string[] = [];
  thumbnailBinary: string[] = [];
  private formData = new FormData();
  idParam = this.activatedRoute.snapshot.params['id'];
  addAutomobileForm: FormGroup;
  Category = [
    { label: 'Kids', value: 'Kids' },
    { label: 'Beauty', value: 'Beauty' },
    { label: 'Business', value: 'Business' },
    { label: 'Automobile', value: 'Automobile' },
    { label: 'Clothes', value: 'Clothes' },
    { label: 'Electronic', value: 'Electronic' },
    { label: 'Phone', value: 'Phone' },
    { label: 'Furniture', value: 'Furniture' },
    { label: 'Household', value: 'Household' },
    { label: 'Music', value: 'Music' },
    { label: 'Sports', value: 'Sports' },
    { label: 'Tickets', value: 'Tickets' },
    { label: 'General', value: 'General' },
    { label: 'Free', value: 'Free' },
  ];

user:any
cityData:any
userDataString:any
  constructor(private router: Router, private auth: AuthenticationService, private activatedRoute: ActivatedRoute, private fb: FormBuilder,) {
    this.addAutomobileForm = this.fb.group({
      name: [],
      phone: [],
      contactEmail: [],
      images: [],
      description:[],
      city:[],
      location:[],
      price:[],
      category:[]
    });
  }

  ngOnInit(): void {
    console.log(localStorage.getItem('user'));
     this.userDataString = localStorage.getItem('user');
    this.user = JSON.parse(this.userDataString);
    this.cityData = this.user.city
    console.log(this.cityData);
    this.addAutomobileForm = this.fb.group({
      city:[this.cityData],
      name: [],
      phone: [],
      contactEmail: [],
      images: [],
      description:[],
      location:[],
      price:[],
      category:[]

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

  rentalResult: any
  Submit(value: any) {
    console.log(value.category.value);
    


    this.formData.append('name', value.name);
    this.formData.append('phone', value.phone);
    this.formData.append('contactEmail', value.contactEmail);
    this.formData.append('city', value.city);
    this.formData.append('website', value.website);
    this.formData.append('description', value.description);
    this.formData.append('location', value.location);
    this.formData.append('price', value.price);
    this.formData.append('category', value.category.value);





  
    
    console.log(this.formData.append);


    this.auth.addBuy(this.formData).subscribe(
      (result: any) => {
        this.rentalResult = result;
        console.log(this.rentalResult.message);

        // this.toastr.success(this.eventResult.message);

        this.router.navigate([`/tribe/BuyList`]);
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



