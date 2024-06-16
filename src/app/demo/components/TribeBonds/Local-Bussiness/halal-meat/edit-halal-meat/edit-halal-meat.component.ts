import { ChangeDetectorRef, Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthenticationService } from 'src/app/demo/service/authentication.service';

@Component({
  selector: 'app-edit-halal-meat',
  
  templateUrl: './edit-halal-meat.component.html',
  styleUrl: './edit-halal-meat.component.scss'
})
export class EditHalalMeatComponent {
  images: string[] = [];
  thumbnailBinary: string[] = [];
  private formData = new FormData();
  idParam = this.activatedRoute.snapshot.params['id'];
  editmeatResturant: FormGroup;
  halalResult: any
  submitted:boolean=false
  constructor(private toastr: ToastrService ,private router: Router, private cdr: ChangeDetectorRef,  private auth: AuthenticationService, private activatedRoute: ActivatedRoute, private fb: FormBuilder,) {
    this.editmeatResturant = this.fb.group({
      name: ["",Validators.required],
      address: ["",Validators.required],
      phone: ["",Validators.required],
      website: ["",Validators.required],
      // thumbnail: [],
      images: [],
       description:[],
       city:[]


    });
  }
  editmeatResult:any
  ngOnInit(): void {
    this.auth.getMeatById(this.idParam).subscribe(
      (res: any) => {
        this.editmeatResult = res.data;
        this.images = this.editmeatResult.images
        this.editmeatResturant = this.fb.group({
          name: [this.editmeatResult.name,Validators.required],
          address: [this.editmeatResult.address,Validators.required],
          city: [this.editmeatResult.city],
          description: [this.editmeatResult.description],
          phone: [this.editmeatResult.phone,Validators.required],
          website: [this.editmeatResult.website,Validators.required],
          // thumbnail: [],
        })
        console.log('Form controls:', this.editmeatResturant.controls);

        // Set the parsed date object to the time FormControl
        this.editmeatResturant.get('description')?.setValue('bdnsbdfmsb');
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
  eventResult: any;
  errorShow: any;
  errorMsg: any;
  Submit(value: any) {
    this.submitted =true
    if(!this.editmeatResturant.valid){
     this.toastr.error("Please fill all Mandatory field")
   }
   if (this.editmeatResturant.valid) {
    this.formData.append('name', value.name);
    this.formData.append('address', value.address);
    this.formData.append('phone', value.phone);
    this.formData.append('city', value.city);
    this.formData.append('website', value.website);
    this.formData.append('description', value.description);


    console.log(this.formData.append);

    this.auth.editMeat(this.idParam, this.formData).subscribe(
      (result) => {
        this.halalResult = result;
        console.log(this.halalResult.message);

        this.toastr.success(this.halalResult.message);

        this.router.navigate(['/tribe/halalMList']);
      },
      (err) => {
        console.log(err);
        this.errorShow = err;
        this.errorMsg = this.errorShow.error.message;
        this.toastr.error(this.errorMsg);
      })
    const formData = new FormData();

  }
}


}
