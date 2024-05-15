import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
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

  constructor(private formbuilder: FormBuilder, private activatedRoute: ActivatedRoute, private auth: AuthenticationService, private toastr: ToastrService, public router: Router,) {
    this.EditEventForm = this.formbuilder.group({
      name: [],
      date: [],
      time: [,],
      address: [],
      city: [],
      gender: [],
      phone: [],
      website: [],
      thumbnail: []

    });
  }
  description: any
  time: any
  ngOnInit() {
    this.auth.getEventById(this.id).subscribe(
      (res: any) => {
        this.editEvent = res.data;
        this.description = this.editEvent.description;
        // this.images = this.editEvent.images

        const timeParts = this.editEvent.time.split(':');
        const hours = parseInt(timeParts[0], 10);
        const minutes = parseInt(timeParts[1], 10);
        const seconds = parseInt(timeParts[2], 10);
        const time = new Date();
        time.setHours(hours, minutes);
        this.EditEventForm = this.formbuilder.group({
          name: [this.editEvent.name],
          date: [new Date(this.editEvent.date)],
          time: [time],
          address: [this.editEvent.address],
          city: [this.editEvent.city],
          // gender: [],
          description: [this.editEvent.phone],
          phone: [this.editEvent.phone],
          website: [this.editEvent.website],
          thumbnail: [],
        })

      })
  }
  images: string[] = [];
  onFileSelected(event: any) {
    const input = event.target as HTMLInputElement;
    const files = input.files;
    if (files && files.length > 0) {
      // Append the first file as 'thumbnail'
      this.formData.append('thumbnail', files[0]);

      // Append the rest of the files to the 'images' array in FormData
      for (let i = 1; i < files.length; i++) {
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
        this.errorMsg = this.errorShow;
        this.toastr.error(this.errorMsg);
      })
  }

}
