import { ChangeDetectorRef, Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthenticationService } from 'src/app/demo/service/authentication.service';
@Component({
  selector: 'app-edit-party',

  templateUrl: './edit-party.component.html',
  styleUrl: './edit-party.component.scss'
})
export class EditPartyComponent {
  images: string[] = [];
  thumbnailBinary: string[] = [];
  private formData = new FormData();
  idParam = this.activatedRoute.snapshot.params['id'];
  editBanquetForm!: FormGroup;
  partyResult: any
  editBanq: any
  constructor(private toastr: ToastrService ,private router: Router, private cdr: ChangeDetectorRef, private auth: AuthenticationService, private activatedRoute: ActivatedRoute, private fb: FormBuilder,) {
    this.editBanquetForm = this.fb.group({
      name: [],
      address: [],
      phone: [],
      city: [],
      website: [],
      images: [],
      description: []


    });
  }

  ngOnInit(): void {
    this.auth.getBanqId(this.idParam).subscribe(
      (res: any) => {
        this.editBanq = res.data;
        this.images = this.editBanq.images

        console.log(this.editBanq);

        this.editBanquetForm = this.fb.group({
          name: [this.editBanq.name],
          address: [this.editBanq.address],
          city: [this.editBanq.city],
          description: [this.editBanq.description],
          phone: [this.editBanq.phone],
          website: [this.editBanq.website],
        })
        console.log('Form controls:', this.editBanquetForm.controls);

     
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
  errorShow: any;
  errorMsg: any;
  Submit(value: any) {
    this.formData.append('name', value.name);
    this.formData.append('address', value.address);
    this.formData.append('phone', value.phone);
    this.formData.append('city', value.city);
    this.formData.append('website', value.website);
    this.formData.append('description', value.description);


    console.log(this.formData.append);


    
    this.auth.editBanq(this.idParam, this.formData).subscribe(
      (result) => {
        this.partyResult = result;
        console.log(this.partyResult.message);

        this.toastr.success(this.partyResult.message);

        this.router.navigate(['/tribe/partyList']);
      },
      (err) => {
        console.log(err);
        console.log(err);
        this.errorShow = err;
        this.errorMsg = this.errorShow.error.message;
        this.toastr.error(this.errorMsg);
    
    const formData = new FormData();

  })}
}



