import { ChangeDetectorRef, Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthenticationService } from 'src/app/demo/service/authentication.service';
@Component({
  selector: 'app-edit-wedding',

  templateUrl: './edit-wedding.component.html',
  styleUrl: './edit-wedding.component.scss'
})
export class EditWeddingComponent {
  images: string[] = [];
  thumbnailBinary: string[] = [];
  private formData = new FormData();
  idParam = this.activatedRoute.snapshot.params['id'];
  editWeddingForm!: FormGroup;
  weddingResult: any
  editwedding: any
  constructor(private toastr: ToastrService ,private router: Router, private cdr: ChangeDetectorRef, private auth: AuthenticationService, private activatedRoute: ActivatedRoute, private fb: FormBuilder,) {
    this.editWeddingForm = this.fb.group({
      name: ['',Validators.required],
      address: ['',Validators.required],
      phone: ['',Validators.required],
      city: [],
      website: ['',Validators.required],
      images: [],
      description: []


    });
  }

  ngOnInit(): void {
    this.auth.getpartyById(this.idParam).subscribe(
      (res: any) => {
        this.editwedding = res.data;
        this.images = this.editwedding.images

        console.log(this.editwedding);

        this.editWeddingForm = this.fb.group({
          name: [this.editwedding.name,Validators.required],
          address: [this.editwedding.address,Validators.required],
          city: [this.editwedding.city],
          description: [this.editwedding.description],
          phone: [this.editwedding.phone,Validators.required],
          website: [this.editwedding.website,Validators.required],
        })
        console.log('Form controls:', this.editWeddingForm.controls);

     
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
  eventResult: any;
  submitted: boolean = false
  errorShow: any;
  errorMsg: any;
  Submit(value: any) {
    
    this.submitted = true
    if (!this.editWeddingForm.valid) {
      this.toastr.error("Please fill all Mandatory field")
    }
    if (this.editWeddingForm.valid) {

    this.formData.append('name', value.name);
    this.formData.append('address', value.address);
    this.formData.append('phone', value.phone);
    this.formData.append('city', value.city);
    this.formData.append('website', value.website);
    this.formData.append('description', value.description);


    console.log(this.formData.append);



    this.auth.editParty(this.idParam, this.formData).subscribe(
      (result) => {
        this.weddingResult = result;
        console.log(this.weddingResult.message);

        this.toastr.success(this.weddingResult.message);

        this.router.navigate(['/tribe/weddingList']);
        this.editWeddingForm.reset();
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


