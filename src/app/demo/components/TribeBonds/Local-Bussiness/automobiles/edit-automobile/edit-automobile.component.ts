import { ChangeDetectorRef, Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthenticationService } from 'src/app/demo/service/authentication.service';
@Component({
  selector: 'app-edit-automobile',

  templateUrl: './edit-automobile.component.html',
  styleUrl: './edit-automobile.component.scss'
})
export class EditAutomobileComponent {
  images: string[] = [];
  thumbnailBinary: string[] = [];
  private formData = new FormData();
  idParam = this.activatedRoute.snapshot.params['id'];
  editAutomobileForm!: FormGroup;
  autoResult: any
  constructor(private toastr: ToastrService, private router: Router, private cdr: ChangeDetectorRef, private auth: AuthenticationService, private activatedRoute: ActivatedRoute, private fb: FormBuilder,) {
    this.editAutomobileForm = this.fb.group({
      name: [],
      address: [],
      phone: [],
      city: [],
      website: [],
      images: [],
      description: [],


    });
  }

  ngOnInit(): void {
    this.auth.getAutomobileById(this.idParam).subscribe(
      (res: any) => {
        this.autoResult = res.data;
        this.images = this.autoResult.images

        console.log(this.autoResult);

        this.editAutomobileForm = this.fb.group({
          name: [this.autoResult.name, Validators.required],
          address: [this.autoResult.address, Validators.required],
          city: [this.autoResult.city],
          description: [this.autoResult.description],
          phone: [this.autoResult.phone, Validators.required],
          website: [this.autoResult.website, Validators.required],

        })
        console.log('Form controls:', this.editAutomobileForm.controls);


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


  submitted: boolean = false
  Submit(value: any) {
    this.submitted = true
    if (!this.editAutomobileForm.valid) {
      this.toastr.error("Please fill all Mandatory field")
    }
    if (this.editAutomobileForm.valid) {
      this.formData.append('name', value.name);
      this.formData.append('address', value.address);
      this.formData.append('phone', value.phone);
      this.formData.append('city', value.city);
      this.formData.append('website', value.website);
      this.formData.append('description', value.description);
      this.auth.editAutomobile(this.idParam, this.formData).subscribe(
        (result) => {
          this.editresult = result;
          console.log(this.editresult.message);

          this.toastr.success(this.editresult.message);

          this.router.navigate([`/tribe/automobileList`]);
          this.editAutomobileForm.reset();
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

