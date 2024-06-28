import { ChangeDetectorRef, Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthenticationService } from 'src/app/demo/service/authentication.service';

@Component({
  selector: 'app-edit-rental',

  templateUrl: './edit-rental.component.html',
  styleUrl: './edit-rental.component.scss'
})
export class EditRentalComponent {
  images: string[] = [];
  thumbnailBinary: string[] = [];
  private formData = new FormData();
  idParam = this.activatedRoute.snapshot.params['id'];
  editRenatlForm!: FormGroup;
  rentalResult: any
  editrental: any
  constructor(private toastr: ToastrService ,private router: Router, private cdr: ChangeDetectorRef, private auth: AuthenticationService, private activatedRoute: ActivatedRoute, private fb: FormBuilder,) {
    this.editRenatlForm = this.fb.group({
      name: ['',Validators.required],
      address: ['',Validators.required],
      phone: ['',Validators.required],
      city: [],
      website:['',Validators.required],
      images: [],
      description: []


    });
  }

  ngOnInit(): void {
    this.auth.getRenatlById(this.idParam).subscribe(
      (res: any) => {
        this.editrental = res.data[0];
        this.images = this.editrental.images

        console.log(this.editrental);

        this.editRenatlForm = this.fb.group({
          name: [this.editrental.name,Validators.required],
          address: [this.editrental.address,Validators.required],
          city: [this.editrental.city],
          description: [this.editrental.description],
          phone: [this.editrental.phone,Validators.required],
          website: [this.editrental.website,Validators.required],
        })
        console.log('Form controls:', this.editRenatlForm.controls);

     
        this.cdr.detectChanges();
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
  errorShow: any;
  errorMsg: any;
  submitted: boolean = false

  Submit(value: any) {
    
    this.submitted = true
    if (!this.editRenatlForm.valid) {
      this.toastr.error("Please fill all Mandatory field")
    }
    if (this.editRenatlForm.valid) {
    this.formData.append('name', value.name);
    this.formData.append('address', value.address);
    this.formData.append('phone', value.phone);
    this.formData.append('city', value.city);
    this.formData.append('website', value.website);
    this.formData.append('description', value.description);


    console.log(this.formData.append);


    
    this.auth.editRental(this.idParam, this.formData).subscribe(
      (result) => {
        this.rentalResult = result;
        console.log(this.rentalResult.message);

        this.toastr.success(this.rentalResult.message);

        this.router.navigate(['/tribe/rentalList']);
        this.editRenatlForm.reset();
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