import { ChangeDetectorRef, Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
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
  editPartyForm!: FormGroup;
  weddingResult: any
  editwedding: any
  constructor(private toastr: ToastrService ,private router: Router, private cdr: ChangeDetectorRef, private auth: AuthenticationService, private activatedRoute: ActivatedRoute, private fb: FormBuilder,) {
    this.editPartyForm = this.fb.group({
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
    this.auth.getpartyById(this.idParam).subscribe(
      (res: any) => {
        this.editwedding = res.data;
        this.images = this.editwedding.images

        console.log(this.editwedding);

        this.editPartyForm = this.fb.group({
          name: [this.editwedding.name],
          address: [this.editwedding.address],
          city: [this.editwedding.city],
          description: [this.editwedding.description],
          phone: [this.editwedding.phone],
          website: [this.editwedding.website],
        })
        console.log('Form controls:', this.editPartyForm.controls);

     
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



    this.auth.editParty(this.idParam, this.formData).subscribe(
      (result) => {
        this.weddingResult = result;
        console.log(this.weddingResult.message);

        this.toastr.success(this.weddingResult.message);

        this.router.navigate(['/tribe/weddingList']);
      },
      (err) => {
        console.log(err);
        this.errorShow = err;
        this.errorMsg = this.errorShow.error.message;
        this.toastr.error(this.errorMsg);

    const formData = new FormData();

  })}
}



