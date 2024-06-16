import { ChangeDetectorRef, Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthenticationService } from 'src/app/demo/service/authentication.service';

@Component({
  selector: 'app-edit-volunter',

  templateUrl: './edit-volunter.component.html',
  styleUrl: './edit-volunter.component.scss'
})
export class EditVolunterComponent {
  images: string[] = [];
  thumbnailBinary: string[] = [];
  private formData = new FormData();
  idParam = this.activatedRoute.snapshot.params['id'];
  editvolunterForm!: FormGroup;
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
  editresult: any
  errorShow: any;
  errorMsg: any;
  submitted:boolean=false
  constructor(private toastr: ToastrService ,private router: Router, private cdr: ChangeDetectorRef, private auth: AuthenticationService, private activatedRoute: ActivatedRoute, private fb: FormBuilder,) {
    this.editvolunterForm = this.fb.group({
      name: ['',Validators.required],
      phone: ['',Validators.required],
      address: ['',Validators.required],
      images: [],
      description:[],
      city:[],
      time:['',Validators.required],
      date:['',Validators.required],
      website:['',Validators.required],
      // price: [],
      // category: []
    });
  }

  ngOnInit(): void {
    this.auth.getVolunteer(this.idParam).subscribe(
      (res: any) => {
        this.autoResult = res.data;
        this.images = this.autoResult.images

        console.log(this.autoResult.date);
        const serverDate = new Date(this.autoResult.date);// 'YYYY-MM-DD' format
        this.editvolunterForm.patchValue({
          name: [this.autoResult.name],
          city: [this.autoResult.city],
          description: [this.autoResult.description],
          phone: [this.autoResult.phone],
          website: [this.autoResult.website],
          address:[this.autoResult.address],
          date: serverDate,
        })
        console.log('Form controls:', this.editvolunterForm.controls);
        const payloadDate = this.autoResult.time
        const dateObject = new Date(payloadDate);

        // Set the parsed date object to the time FormControl
        this.editvolunterForm.get('time')?.setValue(dateObject);

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
 
  Submit(value: any) {
    this.submitted = true;
    if (!this.editvolunterForm.valid) {
      this.toastr.error("Please fill all Mandatory field")
    }
    if (this.editvolunterForm.valid) {
    this.formData.append('name', value.name);
    this.formData.append('website', value.website);
    this.formData.append('phone', value.phone);
    this.formData.append('city', value.city);
    this.formData.append('description', value.description);
    this.formData.append('address', value.address);
    this.formData.append('date', value.date);
    this.formData.append('time', value.time);

    console.log(this.formData.append);

    this.auth.editVolunteer(this.idParam, this.formData).subscribe(
      (result) => {
        this.editresult = result;
        console.log(this.editresult.message);
        this.toastr.success(this.editresult.message);

        this.router.navigate([`/tribe/volunter`]);
      },
      (err) => {
        console.log(err);
        this.errorShow = err;
        this.errorMsg = this.errorShow.error.message;
        this.toastr.error(this.errorMsg);


        const formData = new FormData();

      })
  }
}}




