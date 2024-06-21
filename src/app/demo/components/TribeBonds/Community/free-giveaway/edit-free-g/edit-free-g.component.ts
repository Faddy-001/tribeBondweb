import { ChangeDetectorRef, Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthenticationService } from 'src/app/demo/service/authentication.service';

@Component({
  selector: 'app-edit-free-g',

  templateUrl: './edit-free-g.component.html',
  styleUrl: './edit-free-g.component.scss'
})
export class EditFreeGComponent {
  images: string[] = [];
  thumbnailBinary: string[] = [];
  private formData = new FormData();
  idParam = this.activatedRoute.snapshot.params['id'];
  editGiveForm!: FormGroup;
  submitted:boolean=false
  autoResult: any
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

  constructor(private toastr: ToastrService ,private router: Router, private cdr: ChangeDetectorRef, private auth: AuthenticationService, private activatedRoute: ActivatedRoute, private fb: FormBuilder,) {
    this.editGiveForm = this.fb.group({
      name: ['',Validators.required],
      phone: ['',Validators.required],
      city: [],
      address:['',Validators.required],
      // website: [],
      images: [],
      description: [],
      contactEmail: ['',Validators.required],
      location: ['',Validators.required],
      // price: [],
      category: ['',Validators.required]
    });
  }

  ngOnInit(): void {
    this.auth.getGive(this.idParam).subscribe(
      (res: any) => {
        this.autoResult = res.data;
        this.images = this.autoResult.images

        console.log(this.autoResult.category);

        this.editGiveForm.patchValue({
          name: [this.autoResult.name],
          city: [this.autoResult.city],
          description: [this.autoResult.description],
          phone: [this.autoResult.phone],
          address: [this.autoResult.address],

          contactEmail: [this.autoResult.contactEmail],
          location: [this.autoResult.location],
          category:[this.autoResult.category]
          
        })
        console.log('Form controls:', this.editGiveForm.controls);
        this.editGiveForm.get('category')?.setValue(this.autoResult.category);


        this.cdr.detectChanges();
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
  editresult: any
  errorShow: any;
  errorMsg: any;
  Submit(value: any) {
    this.submitted= true;
    if (!this.editGiveForm.valid) {
      this.toastr.error("Please fill all Mandatory field")
    }
    if (this.editGiveForm.valid) {
    this.formData.append('name', value.name);
    this.formData.append('price', value.price);
    this.formData.append('phone', value.phone);
    this.formData.append('city', value.city);
    this.formData.append('description', value.description);
    this.formData.append('contactEmail', value.contactEmail);
    this.formData.append('location', value.location);
    this.formData.append('category', value.category.value);
    console.log(this.formData.append);

    this.auth.editgive(this.idParam, this.formData).subscribe(
      (result) => {
        this.editresult = result;
        console.log(this.editresult.message);
        this.toastr.success(this.editresult.message);

        this.router.navigate([`/tribe/giveawayList`]);
        this.editGiveForm.reset();
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



