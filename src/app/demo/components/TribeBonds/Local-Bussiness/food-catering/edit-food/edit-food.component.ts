import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
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

  constructor(private router: Router, private auth: AuthenticationService, private activatedRoute: ActivatedRoute, private fb: FormBuilder,) {
    this.editFoodForm = this.fb.group({
      name: [],
      address: [],
      phone: [],
      website: [],
      thumbnail: [],
      images: [],
       description:[],
       foodType:[],
       city:[]


    });
  }
  editFood:any

  ngOnInit(): void {
    this.auth.getFoodById(this.idParam).subscribe(
      (res: any) => {
        this.editFood = res.data;
        this.images = this.editFood.images

        console.log(this.editFood);

        this.editFoodForm = this.fb.group({
          name: [this.editFood.name],
          address: [this.editFood.address],
          city: [this.editFood.city],
          description: [this.editFood.description],
          phone: [this.editFood.phone],
          website: [this.editFood.website],
          foodType:[this.editFood.foodType]
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
      this.formData.append('thumbnail', files[0]);
      this.images.push();
      // Append the rest of the files to the 'images' array in FormData
      for (let i = 1; i < files.length; i++) {

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
  Submit(value: any) {
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

        // this.toastr.success(this.halalResult.message);

        this.router.navigate(['/tribe/foodList']);
      },
      (err) => {
        console.log(err);
        // this.errorShow = err;
        // this.errorMsg = this.errorShow;
        // // this.toas
    
    const formData = new FormData();

  })
  }
}



