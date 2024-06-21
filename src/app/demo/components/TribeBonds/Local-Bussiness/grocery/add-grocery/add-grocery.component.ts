import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthenticationService } from 'src/app/demo/service/authentication.service';

@Component({
  selector: 'app-add-grocery',
 
  templateUrl: './add-grocery.component.html',
  styleUrl: './add-grocery.component.scss'
})
export class AddGroceryComponent {
  private formData = new FormData();
  idParam = this.activatedRoute.snapshot.params['id'];
  images: string[] = [];
  thumbnailBinary: string[] = [];
  addGroceryForm: FormGroup;
  groceryResult: any
  eventResult: any;
  errorShow: any;
  errorMsg: any;
  submitted:boolean=false
  userDataString:any
  user:any
  cityData:any
  constructor(private toastr: ToastrService ,private router: Router, private auth: AuthenticationService, private activatedRoute: ActivatedRoute, private fb: FormBuilder,) {
    this.addGroceryForm = this.fb.group({
      name: ["",Validators.required],
      address: ["",Validators.required],
      phone: ["",Validators.required],
      website: ["",Validators.required],
   
      images: [],
      description:[],
      city:[],
      foodType:["",Validators.required],

    });
  }
 
  ngOnInit(): void {
    console.log(localStorage.getItem('user'));
    this.userDataString = localStorage.getItem('user');
   this.user = JSON.parse(this.userDataString);
   this.cityData = this.user.city
   console.log(this.cityData);
   this.addGroceryForm = this.fb.group({
     city:[this.cityData],
     name: ["",Validators.required],
      address: ["",Validators.required],
      phone: ["",Validators.required],
      website: ["",Validators.required],
      images: [],
      description: [],
      foodType:["",Validators.required],

   })
  }
 
  onFileSelected(event: any) {
    const input = event.target as HTMLInputElement;
    const files = input.files;
    this.images = [];
    if (files && files.length > 0) {
      // Append the first file as 'thumbnail'
      // this.formData.append('thumbnail', files[0]);
      // this.images.push();
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
    
    
    this.submitted =true
    if(!this.addGroceryForm.valid){
     this.toastr.error("Please fill all Mandatory field")
   }
   if (this.addGroceryForm.valid) {

    this.formData.append('name', value.name);
    this.formData.append('address', value.address);
    this.formData.append('phone', value.phone);
    this.formData.append('city', value.city);
    this.formData.append('website', value.website);
    this.formData.append('description', value.description);

    
    console.log(this.formData.append);


    this.auth.addGrocery(this.formData).subscribe(
      (result: any) => {
        this.groceryResult = result;
        console.log(this.groceryResult.message);

        this.toastr.success(this.groceryResult.message);

        this.router.navigate([`/tribe/gList`]);
        this.addGroceryForm.reset();
        this.formData = new FormData();
        this.submitted = false;
      },
      (err: any) => {
        console.log(err);
        console.log(err);
        this.errorShow = err;
        this.errorMsg = this.errorShow.error.message;
        this.toastr.error(this.errorMsg);
   
        this.formData = new FormData();
        this.submitted = false;
      })

  }
}

}
