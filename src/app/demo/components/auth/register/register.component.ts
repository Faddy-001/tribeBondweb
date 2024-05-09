import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/demo/service/authentication.service';
import { LayoutService } from 'src/app/layout/service/app.layout.service';

@Component({
  selector: 'app-register',
  // standalone: true,
  // imports: [],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  signUpForm: FormGroup;
  defaultImge = 'assets/demo/images/avatar/check.jpg';
  selectedFile: any = [];
  filesToUpload: any = [];
  extension: any;
  extensionErr: any;
  imageData: any;
  showExtError: any;
  UserPreviousImage: any;
  genderItems = [
    { name: 'Male', code: 'Option 1' },
    { name: 'Female', code: 'Option 2' },
    { name: 'Other', code: 'Option 3' }
  ];
  cityItems = [
    { name: 'Male', code: 'Option 1' },
    { name: 'Female', code: 'Option 2' },
    { name: 'Other', code: 'Option 3' }
  ];
  selectedState: any = null;

  constructor(private layoutService: LayoutService, private fb: FormBuilder,
    public router: Router, private auth: AuthenticationService,
  ) {
    this.signUpForm = this.fb.group({
      firstName: [],
      lastName: [],
      email: [null, [Validators.required, Validators.email]],
      password: [null, Validators.required],
      confirmPwd: [],
      gender: [],
      city: [],
      religion: []

    });
    this.UserPreviousImage =  this.defaultImge;
  }
  get dark(): boolean {
    return this.layoutService.config().colorScheme !== 'light';
  }
  userImage(event: Event) {
    const input = event.target as HTMLInputElement;
     this.selectedFile = input.files?.[0];
     console.log(this.selectedFile);
     
    if ( this.selectedFile) {
      // Read the selected file as a data URL
      const reader = new FileReader();
      reader.onload = () => {
        // Update the UserPreviousImage variable with the selected image data
        this.UserPreviousImage = reader.result;
      };
      reader.readAsDataURL( this.selectedFile);
    }
  }
  SignUp(userdata: any) {
    console.log(userdata);
    if (userdata.city) {
      userdata.city = userdata.city.name
    }
    if (userdata.gender) {
      userdata.gender = userdata.gender.name
    }
    console.log(this.selectedFile);
    
    const formData = new FormData();
    formData.append('firstName', userdata.firstName);
    formData.append('lastName', userdata.lastName);
    formData.append('password', userdata.password);
    formData.append('confirmPwd', userdata.confirmPwd);
    formData.append('email', userdata.email);
    formData.append('gender', userdata.gender);
    formData.append('city', userdata.city);
    formData.append('religion', userdata.religion);
    formData.append('profilePicture', this.selectedFile);
    console.log(formData);

    this.auth.SignUp(formData).subscribe()
  }

  // upload image
  // userImage(event: any) {
  //   console.log(this.selectedFile);

  //   this.selectedFile = event.target.files[0];
  //   console.log(this.selectedFile);

  //   this.filesToUpload.push(this.selectedFile);
  //   var fileName = this.selectedFile.name;
  //   this.extension = fileName.split('.').pop();
  //   var reader = new FileReader();

  //   if (
  //     this.extension == 'png' ||
  //     this.extension == 'jpg' ||
  //     this.extension == 'jpeg' ||
  //     this.extension == 'gif' ||
  //     this.extension == 'webp'
  //   ) {
  //     reader.onload = (e: any) => {
  //       // $('#blah').attr('src', e.target.result);
  //     };
  //     reader.readAsDataURL(this.selectedFile); // convert to base64 string

  //     this.extensionErr = false;
  //   } else {
  //     this.showExtError = "Couldn't set profile photo.";
  //     this.extensionErr = true;
  //   }
  // }

}
