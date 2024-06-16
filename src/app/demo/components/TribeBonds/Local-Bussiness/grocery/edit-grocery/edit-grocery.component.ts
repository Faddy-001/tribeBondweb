import { ChangeDetectorRef, Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthenticationService } from 'src/app/demo/service/authentication.service';

@Component({
  selector: 'app-edit-grocery',

  templateUrl: './edit-grocery.component.html',
  styleUrl: './edit-grocery.component.scss'
})
export class EditGroceryComponent {
  private formData = new FormData();
  idParam = this.activatedRoute.snapshot.params['id'];
  images: string[] = [];
  thumbnailBinary: string[] = [];
  editGroceryForm: FormGroup;
  groceryResult: any
  eventResult: any;
  errorShow: any;
  errorMsg: any;
  submitted:boolean= false;
  constructor(private toastr: ToastrService, private router: Router, private cdr: ChangeDetectorRef, private auth: AuthenticationService, private activatedRoute: ActivatedRoute, private fb: FormBuilder,) {
    this.editGroceryForm = this.fb.group({
      name: ["",Validators.required],
      address: ["",Validators.required],
      phone: ["",Validators.required],
      website: ["",Validators.required],
      images: [],
      description: [],
      city: []


    });
  }
  editGroceryResult: any
  ngOnInit(): void {
    this.auth.getGroceryById(this.idParam).subscribe(
      (res: any) => {
        this.editGroceryResult = res.data;
        this.images = this.editGroceryResult.images

        console.log(this.editGroceryResult);

        this.editGroceryForm = this.fb.group({
          name: [this.editGroceryResult.name,Validators.required],
          address: [this.editGroceryResult.address,Validators.required],
          city: [this.editGroceryResult.city],
          description: [this.editGroceryResult.description],
          phone: [this.editGroceryResult.phone,Validators.required],
          website: [this.editGroceryResult.website,Validators.required],

        })
        console.log('Form controls:', this.editGroceryForm.controls);

        // Set the parsed date object to the time FormControl
        // this.editGrocery.get('description')?.setValue(this.editGrocery.description);
        this.cdr.detectChanges();
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
    if(!this.editGroceryForm.valid){
     this.toastr.error("Please fill all Mandatory field")
   }
   if (this.editGroceryForm.valid) {
    this.formData.append('name', value.name);
    this.formData.append('address', value.address);
    this.formData.append('phone', value.phone);
    this.formData.append('city', value.city);
    this.formData.append('website', value.website);
    this.formData.append('description', value.description);


    console.log(this.formData.append);


    this.auth.editgrocery(this.idParam, this.formData).subscribe(
      (result) => {
        this.groceryResult = result;
        console.log(this.groceryResult.message);

        this.toastr.success(this.groceryResult.message);

        this.router.navigate(['/tribe/gList']);
      },
      (err) => {
        console.log(err);
        this.errorShow = err;
        this.errorMsg = this.errorShow.error.message;
        this.toastr.error(this.errorMsg);

        const formData = new FormData();

      }
    )
  }

}

}

