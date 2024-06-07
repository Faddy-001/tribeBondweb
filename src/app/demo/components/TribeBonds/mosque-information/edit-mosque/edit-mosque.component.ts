import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthenticationService } from 'src/app/demo/service/authentication.service';

@Component({
  selector: 'app-edit-mosque',
  templateUrl: './edit-mosque.component.html',
  styleUrls: ['./edit-mosque.component.scss']
})
export class EditMosqueComponent implements OnInit {
  private formData = new FormData();
  idParam = this.activatedRoute.snapshot.params['id'];
  images: string[] = [];
  thumbnailBinary: string[] = [];
  editMosque: FormGroup;

  constructor(
    private router: Router,
    private cdr: ChangeDetectorRef,
    private auth: AuthenticationService,
    private activatedRoute: ActivatedRoute,
    private fb: FormBuilder
  ) {
    this.editMosque = this.fb.group({
      name: [],
      address: [],
      phone: [],
      website: [],
      images: [],
      description: [],
      city: [],
      khutbah: this.fb.array([]) // Initialize FormArray
    });
  }

  editMosqueResult: any;

  ngOnInit(): void {
    this.auth.getMosqueId(this.idParam).subscribe((res: any) => {
      this.editMosqueResult = res.data;
      this.images = this.editMosqueResult.images;

      console.log(this.editMosqueResult.khutbah);

      this.editMosque.patchValue({
        name: this.editMosqueResult.name,
        address: this.editMosqueResult.address,
        city: this.editMosqueResult.city,
        description: this.editMosqueResult.description,
        phone: this.editMosqueResult.phone,
        website: this.editMosqueResult.website,
      });

      // Set the khutbah times in the FormArray
      const khutbahArray = this.editMosque.get('khutbah') as FormArray;
      this.editMosqueResult.khutbah.forEach((time: string) => {
        khutbahArray.push(this.fb.control(new Date(time)));
      });

      console.log('Form controls:', this.editMosque.controls);
      this.cdr.detectChanges();
    });
  }

  get khutbah(): FormArray {
    return this.editMosque.get('khutbah') as FormArray;
  }

  addKhutbahTime(): void {
    this.khutbah.push(this.fb.control('', Validators.required));
  }

  removeKhutbahTime(index: number): void {
    this.khutbah.removeAt(index);
  }

  onFileSelected(event: any) {
    const input = event.target as HTMLInputElement;
    const files = input.files;
    this.images = [];
    if (files && files.length > 0) {
      this.formData.append('thumbnail', files[0]);
      this.images.push();
      for (let i = 1; i < files.length; i++) {
        this.formData.append('images', files[i]);
      }
      for (let i = 0; i < files.length; i++) {
        const reader = new FileReader();
        reader.onload = (e: any) => {
          this.images.push(e.target.result as string);
        };
        reader.readAsDataURL(files[i]);
      }
    }
  }

  groceryResult: any;

  Submit(value: any) {
    this.formData.append('name', value.name);
    this.formData.append('address', value.address);
    this.formData.append('phone', value.phone);
    this.formData.append('city', value.city);
    this.formData.append('website', value.website);
    this.formData.append('description', value.description);

    // value.khutbah.forEach((time: Date, index: number) => {
    //   this.formData.append('khutbah', time.toISOString());
    // });
    const khutbahArray: string[] = [];
    value.khutbah.forEach((time: Date) => {
      khutbahArray.push(time.toISOString());
    });
    this.formData.append('khutbah', JSON.stringify(khutbahArray));
    // value.khutbah.forEach((khutbah: any) => {
    //   this.formData.append('khutbah', khutbah.time);
    // });
    console.log(this.formData);

    this.auth.editMosque(this.idParam, this.formData).subscribe(
      (result) => {
        this.groceryResult = result;
        console.log(this.groceryResult.message);

        this.router.navigate(['/tribe/mosqueList']);
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
