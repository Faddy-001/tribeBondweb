import { ChangeDetectorRef, Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthenticationService } from 'src/app/demo/service/authentication.service';
@Component({
  selector: 'app-edit-legal',

  templateUrl: './edit-legal.component.html',
  styleUrl: './edit-legal.component.scss'
})
export class EditLegalComponent {
  images: string[] = [];
  thumbnailBinary: string[] = [];
  private formData = new FormData();
  idParam = this.activatedRoute.snapshot.params['id'];
  editLegalForm!: FormGroup;
  legalResult: any
  editelectronic: any
  constructor(private toastr: ToastrService ,private router: Router, private cdr: ChangeDetectorRef, private auth: AuthenticationService, private activatedRoute: ActivatedRoute, private fb: FormBuilder,) {
    this.editLegalForm = this.fb.group({
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
    this.auth.getlegalById(this.idParam).subscribe(
      (res: any) => {
        this.editelectronic = res.data;
        this.images = this.editelectronic.images

        console.log(this.editelectronic);

        this.editLegalForm = this.fb.group({
          name: [this.editelectronic.name],
          address: [this.editelectronic.address],
          city: [this.editelectronic.city],
          description: [this.editelectronic.description],
          phone: [this.editelectronic.phone],
          website: [this.editelectronic.website],
          services:[this.editelectronic.services],
          email:[this.editelectronic.email]
        })
        console.log('Form controls:', this.editLegalForm.controls);

     
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
  Submit(value: any) {
    this.formData.append('name', value.name);
    this.formData.append('address', value.address);
    this.formData.append('phone', value.phone);
    this.formData.append('city', value.city);
    this.formData.append('website', value.website);
    this.formData.append('description', value.description);
    this.formData.append('services', value.services);
    this.formData.append('email', value.email);




    console.log(this.formData.append);


    
    this.auth.editLegal(this.idParam, this.formData).subscribe(
      (result) => {
        this.legalResult = result;
        console.log(this.legalResult.message);

        this.toastr.success(this.legalResult.message);

        this.router.navigate([`/tribe/legalList`]);
      },
      (err) => {
        console.log(err);
        this.errorShow = err;
        this.errorMsg = this.errorShow.error.message;
        this.toastr.error(this.errorMsg);
    
    const formData = new FormData();

  })}
}



