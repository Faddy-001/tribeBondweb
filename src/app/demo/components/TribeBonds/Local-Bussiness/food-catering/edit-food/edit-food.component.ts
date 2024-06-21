import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthenticationService } from 'src/app/demo/service/authentication.service';

@Component({
  selector: 'app-edit-food',

  templateUrl: './edit-food.component.html',
  styleUrl: './edit-food.component.scss'
})
export class EditFoodComponent {
  images: string[] = [];
  thumbnailBinary: string[] = [];
  private formData = new FormData();
  idParam = this.activatedRoute.snapshot.params['id'];
  editFoodForm: FormGroup;
  submitted: boolean = false
  constructor(private toastr: ToastrService, private router: Router, private auth: AuthenticationService, private activatedRoute: ActivatedRoute, private fb: FormBuilder,) {
    this.editFoodForm = this.fb.group({
      name: ["",Validators.required],
      address: ["",Validators.required],
      phone: ["",Validators.required],
      website: ["",Validators.required],
      email: ["",Validators.required],
      images: [],
      description: [],
      foodType: ["",Validators.required],
      city: []


    });
  }
  editFood: any

  ngOnInit(): void {
    this.auth.getFoodById(this.idParam).subscribe(
      (res: any) => {
        this.editFood = res.data;
        this.images = this.editFood.images

        console.log(this.editFood);

        this.editFoodForm = this.fb.group({
          name: [this.editFood.name,Validators.required],
          address: [this.editFood.address,Validators.required],
          city: [this.editFood.city],
          description: [this.editFood.description,],
          phone: [this.editFood.phone,Validators.required],
          website: [this.editFood.website,Validators.required],
          email: [this.editFood.email,Validators.required]
          , foodType: [this.editFood.foodType,Validators.required]
        })
        console.log('Form controls:', this.editFoodForm.controls);

        // Set the parsed date object to the time FormControl
        // this.editHoldForm.get('description')?.setValue();
        // this.cdr.detectChanges();
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

  foodResult: any
  errorShow: any;
  errorMsg: any;
  Submit(value: any) {
    this.submitted =true
    if(!this.editFoodForm.valid){
     this.toastr.error("Please fill all Mandatory field")
   }
   if (this.editFoodForm.valid) {
    this.formData.append('name', value.name);
    this.formData.append('address', value.address);
    this.formData.append('phone', value.phone);
    // this.formData.append('typeId', this.idParam);

    // this.formData.append('contactNumber', value.contactNumber);
    this.formData.append('website', value.website);
    this.formData.append('city', value.city);
    this.formData.append('foodType', value.foodType);
    this.formData.append('email', value.email);

    this.formData.append('description', value.description);


    console.log(this.formData.append);


    this.auth.editFood(this.idParam, this.formData).subscribe(
      (result) => {
        this.foodResult = result;
        console.log(this.foodResult.message);

        this.toastr.success(this.foodResult.message);

        this.router.navigate(['/tribe/foodList']);
        this.editFoodForm.reset();
        this.formData = new FormData();
        this.submitted = false;
      },
      (err) => {
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


