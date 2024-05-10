import { Component } from '@angular/core';

@Component({
  selector: 'app-add-online-tutor',
 
  templateUrl: './add-online-tutor.component.html',
  styleUrl: './add-online-tutor.component.scss'
})
export class AddOnlineTutorComponent {
  selectedState: any = null;
  calendarVal: Date | null =null;
  UserPreviousImage: any;
  selectedFile: any = [];
  uploadedFiles: any[] = [];

  states: any[] = [
      {name: 'Arizona', code: 'Arizona'},
      {name: 'California', value: 'California'},
      {name: 'Florida', code: 'Florida'},
      {name: 'Ohio', code: 'Ohio'},
      {name: 'Washington', code: 'Washington'}
  ];

  dropdownItems = [
      { name: 'Option 1', code: 'Option 1' },
      { name: 'Option 2', code: 'Option 2' },
      { name: 'Option 3', code: 'Option 3' }
  ];
  
  // constructor(private messageService: MessageService) {}
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

onUpload(event: any) {
  for (const file of event.files) {
      this.uploadedFiles.push(file);
  }

  // this.messageService.add({ severity: 'info', summary: 'Success', detail: 'File Uploaded' });
}
}
