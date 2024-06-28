import { ChangeDetectorRef, Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthenticationService } from 'src/app/demo/service/authentication.service';

@Component({
  selector: 'app-edit-household',

  templateUrl: './edit-household.component.html',
  styleUrl: './edit-household.component.scss'
})
export class EditHouseholdComponent {
  images: string[] = [];
  thumbnailBinary: string[] = [];
  private formData = new FormData();
  idParam = this.activatedRoute.snapshot.params['id'];
  editHoldForm!: FormGroup;
  houseHoldResult: any
  editHold: any
  submitted:boolean=false
  constructor(private toastr: ToastrService ,private router: Router, private cdr: ChangeDetectorRef, private auth: AuthenticationService, private activatedRoute: ActivatedRoute, private fb: FormBuilder,) {
    this.editHoldForm = this.fb.group({
      name: ["",Validators.required],
      address: ["",Validators.required],
      phone: ["",Validators.required],
      city: [],
      website: ["",Validators.required],
      // thumbnail: [],
      images: [],
      description: []


    });
  }

  ngOnInit(): void {
    this.auth.getHoldById(this.idParam).subscribe(
      (res: any) => {
        this.editHold = res.data[0];
        this.images = this.editHold.images

        console.log(this.editHold);

        this.editHoldForm = this.fb.group({
          name: [this.editHold.name,Validators.required],
          address: [this.editHold.address,Validators.required],
          city: [this.editHold.city],
          description: [this.editHold.description],
          phone: [this.editHold.phone,Validators.required],
          website: [this.editHold.website,Validators.required],
        })
        console.log('Form controls:', this.editHoldForm.controls);

        // Set the parsed date object to the time FormControl
        // this.editHoldForm.get('description')?.setValue();
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
  errorShow: any;
  errorMsg: any;
  Submit(value: any) {
    this.submitted =true
    if(!this.editHoldForm.valid){
     this.toastr.error("Please fill all Mandatory field")
   }
   if (this.editHoldForm.valid) {
    this.formData.append('name', value.name);
    this.formData.append('address', value.address);
    this.formData.append('phone', value.phone);
    this.formData.append('city', value.city);
    this.formData.append('website', value.website);
    this.formData.append('description', value.description);


    console.log(this.formData.append);


    
    this.auth.editHold(this.idParam, this.formData).subscribe(
      (result) => {
        this.houseHoldResult = result;
        console.log(this.houseHoldResult.message);

        this.toastr.success(this.houseHoldResult.message);

        this.router.navigate(['/tribe/houseHoldList']);
        this.editHoldForm.reset();
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

