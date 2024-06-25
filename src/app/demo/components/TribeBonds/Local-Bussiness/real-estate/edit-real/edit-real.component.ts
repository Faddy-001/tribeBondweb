import { ChangeDetectorRef, Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthenticationService } from 'src/app/demo/service/authentication.service';
@Component({
  selector: 'app-edit-real',

  templateUrl: './edit-real.component.html',
  styleUrl: './edit-real.component.scss'
})
export class EditRealComponent {
  images: string[] = [];
  thumbnailBinary: string[] = [];
  private formData = new FormData();
  idParam = this.activatedRoute.snapshot.params['id'];
  editRealForm!: FormGroup;
  realResult: any
  editReal: any
  constructor(private toastr: ToastrService ,private router: Router, private cdr: ChangeDetectorRef, private auth: AuthenticationService, private activatedRoute: ActivatedRoute, private fb: FormBuilder,) {
    this.editRealForm = this.fb.group({
      name: ['',Validators.required],
      address: ['',Validators.required],
      phone: ['',Validators.required],
      city: [],
      email:['',Validators.required],
      images: [],
      description: [],
      price:['',Validators.required],


    });
  }

  ngOnInit(): void {
    this.auth.getRealId(this.idParam).subscribe(
      (res: any) => {
        this.editReal = res.data;
        this.images = this.editReal.images

        console.log(this.editReal);

        this.editRealForm = this.fb.group({
          name: [this.editReal.name,Validators.required],
          address: [this.editReal.address,Validators.required],
          city: [this.editReal.city],
          description: [this.editReal.description],
          phone: [this.editReal.phone,Validators.required],
          email: [this.editReal.email,Validators.required],
          price:[this.editReal.price,Validators.required]
        })
        console.log('Form controls:', this.editRealForm.controls);

     
        this.cdr.detectChanges();
      })
  }

  onFileSelected(event: any) {
    const input = event.target as HTMLInputElement;
    const files = input.files;
    this.images = [];
    if (files && files.length > 0) {
      
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
  errorShow: any;
  errorMsg: any;
  submitted: boolean = false

  Submit(value: any) {
    
    this.submitted = true
    if (!this.editRealForm.valid) {
      this.toastr.error("Please fill all Mandatory field")
    }
    if (this.editRealForm.valid) {
    this.formData.append('name', value.name);
    this.formData.append('address', value.address);
    this.formData.append('phone', value.phone);
    this.formData.append('city', value.city);
    this.formData.append('email', value.email);
    this.formData.append('price', value.price);
    this.formData.append('description', value.description);



    console.log(this.formData.append);


    
    this.auth.editReal(this.idParam, this.formData).subscribe(
      (result) => {
        this.realResult = result;
        console.log(this.realResult.message);

        this.toastr.success(this.realResult.message);

        this.router.navigate(['/tribe/realEstateList']);
        this.editRealForm.reset();
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

  })}
}
}



