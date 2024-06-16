import { ChangeDetectorRef, Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthenticationService } from 'src/app/demo/service/authentication.service';

@Component({
  selector: 'app-edit-event',

  templateUrl: './edit-event.component.html',
  styleUrl: './edit-event.component.scss'
})
export class EditEventComponent {
  id = this.activatedRoute.snapshot.params['id'];
  editEvent: any
  EditEventForm!: FormGroup;
  formData = new FormData();
  submitted: boolean = false;

  constructor(private formbuilder: FormBuilder, private activatedRoute: ActivatedRoute, private auth: AuthenticationService, private cdr: ChangeDetectorRef, private toastr: ToastrService, public router: Router,) {
    this.EditEventForm = this.formbuilder.group({
      name: [],
      date: [],
      time: [,],
      address: [],
      description: [],
      city: [],
      phone: [],
      website: [],

    });
  }
  description: any
  time: any
  ngOnInit() {
    this.auth.getEventById(this.id).subscribe(
      (res: any) => {
        this.editEvent = res.data[0];
        // this.description = this.editEvent.description;
        this.images = this.editEvent.images


        this.EditEventForm = this.formbuilder.group({
          name: [this.editEvent.name,Validators.required],
          date: [new Date(this.editEvent.date),Validators.required],
          time: ['',Validators.required],
          address: [this.editEvent.address,Validators.required],
          city: [this.editEvent.city,Validators.required],
          // gender: [],
          description: [this.editEvent.description,Validators.required],
          phone: [this.editEvent.phone,Validators.required],
          website: [this.editEvent.website,Validators.required],
        
        })
        console.log('Form controls:', this.EditEventForm.controls);
        const payloadDate = this.editEvent.time
        const dateObject = new Date(payloadDate);

        // Set the parsed date object to the time FormControl
        this.EditEventForm.get('time')?.setValue(dateObject);
        this.EditEventForm.get('description')?.setValue(this.editEvent.description);
        this.cdr.detectChanges();
      })
  }
  images: string[] = [];
  onFileSelected(event: any) {
    const input = event.target as HTMLInputElement;
    const files = input.files;
    if (files && files.length > 0) {
      // Append the first file as 'thumbnail'
      // this.formData.append('thumbnail', files[0]);

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
  // form submit
  Submit(value: any) {
    console.log(value);
    this.submitted = true
    if(!this.EditEventForm.valid){
      this.toastr.error("Please fill all Mandatory field")
    }
    if (this.EditEventForm.valid) {
    this.formData.append('name', value.name);

    this.formData.append('date', value.date);
    this.formData.append('time', value.time);
    this.formData.append('address', value.address);
    this.formData.append('phone', value.phone);
    this.formData.append('website', value.website);
    this.formData.append('city', value.city);
    this.formData.append('description', value.description);

    console.log(this.formData.append);

    this.auth.editEventId(this.id, this.formData).subscribe(
      (result) => {
        this.eventResult = result;
        console.log(this.eventResult.message);

        this.toastr.success(this.eventResult.message);

        this.router.navigate(['/tribe/event']);
      },
      (err) => {
        console.log(err);
        this.errorShow = err;
        this.errorMsg = this.errorShow.error.message;
        this.toastr.error(this.errorMsg);
      })
    }
  }
  removeImage(imageUrl: string, index: number) {
    // Prepare the payload with the image URL and event ID
    const payload = {
      imageUrls: [imageUrl],
      eventId: this.id,
    };

    // Send the payload to the server
    this.auth.eventRemoveImage(payload).subscribe(
      (response: any) => {
        console.log('Image removed successfully:', response);
        this.toastr.success('Image removed successfully');

        // Remove the image from the list
        this.images.splice(index, 1);
      },
      (err) => {
        console.error('Error removing image:', err);
        this.toastr.error('Error removing image');
      }
    );
  }
}
