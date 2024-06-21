import { ChangeDetectorRef, Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthenticationService } from 'src/app/demo/service/authentication.service';
@Component({
  selector: 'app-edit-beauty',

  templateUrl: './edit-beauty.component.html',
  styleUrl: './edit-beauty.component.scss'
})
export class EditBeautyComponent {
  images: string[] = [];
  thumbnailBinary: string[] = [];
  private formData = new FormData();
  idParam = this.activatedRoute.snapshot.params['id'];
  editBeautyForm!: FormGroup;
  editBeauty: any
  beautyResult:any
  constructor(private toastr: ToastrService ,private router: Router, private cdr: ChangeDetectorRef, private auth: AuthenticationService, private activatedRoute: ActivatedRoute, private fb: FormBuilder,) {
    this.editBeautyForm = this.fb.group({
      name: [],
      address: [],
      phone: [],
      city: [],
      website: [],
      images: [],
      description: [],
      services:[],
      email:[]


    });
  }

  ngOnInit(): void {
    this.auth.getBeautyId(this.idParam).subscribe(
      (res: any) => {
        this.editBeauty = res.data;
        this.images = this.editBeauty.images

        console.log(this.editBeauty);

        this.editBeautyForm = this.fb.group({
          name: [this.editBeauty.name,Validators.required],
          address: [this.editBeauty.address,Validators.required],
          city: [this.editBeauty.city],
          description: [this.editBeauty.description],
          phone: [this.editBeauty.phone,Validators.required],
          website: [this.editBeauty.website,Validators.required],
          services:[this.editBeauty.services,Validators.required],
          email:[this.editBeauty.email,Validators.required]
        })
        console.log('Form controls:', this.editBeautyForm.controls);

     
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
    if (!this.editBeautyForm.valid) {
      this.toastr.error("Please fill all Mandatory field")
    }
    if (this.editBeautyForm.valid) {
    this.formData.append('name', value.name);
    this.formData.append('address', value.address);
    this.formData.append('phone', value.phone);
    this.formData.append('city', value.city);
    this.formData.append('website', value.website);
    this.formData.append('description', value.description);
    this.formData.append('services', value.services);
    this.formData.append('email', value.email);




    console.log(this.formData.append);


    
    this.auth.editBeauty(this.idParam, this.formData).subscribe(
      (result) => {
        this.beautyResult = result;
        console.log(this.beautyResult.message);

        this.toastr.success(this.beautyResult.message);

        this.router.navigate([`/tribe/beautyList`]);
        this.editBeautyForm.reset();
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
}}



