import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SelectItem } from 'primeng/api';
import { Blog } from 'src/app/demo/api/blog';
import { AuthenticationService } from 'src/app/demo/service/authentication.service';

@Component({
    selector: 'app-events',
    templateUrl: './events.component.html',
    styleUrl: './events.component.scss',
    providers: [DatePipe] 
})
export class EventsComponent {
    desiredWidth = 450; // Example width in pixels
    desiredHeight = 250;
    constructor(private router: Router, private auth: AuthenticationService,private datePipe: DatePipe) { }
    sortOptions: SelectItem[] = [
        { label: 'Most Shared', value: 'share' },
        { label: 'Most Commented', value: 'comment' },
    ];
    ngOnInit(): void {
        console.log("f s bdn");

        this.getAllEventsDisplay();

    }
    newPPT: any = [];
    allData: any;
    getAllEventsDisplay() {
        this.auth.getAllEvent().subscribe(
            (res: any) => {
                console.log(res.data.thumbnail);
                this.allData = res
                this.allData.data.forEach((data: any) => {
                    console.log(data.thumbnail
                    );
                    const dateObj = new Date(data.time);
                    const hours = dateObj.getHours();
                    const minutes = dateObj.getMinutes();
                    const ampm = hours >= 12 ? 'PM' : 'AM';
        
                    const formattedTime = `${hours % 12 || 12}:${minutes < 10 ? '0' : ''}${minutes} ${ampm}`;
                    this.newPPT.push({
                        id: data._id,
                        name: data.name,
                        date: data.date,
                        address: data.address,
                        phone: data.phone,
                        time: formattedTime,
                        image: data.images[0]


                    })
                    console.log(this.newPPT.image);

                })
            })
    }

    sortField: string = '';
   
    navigateToDetail(): void {
        this.router.navigateByUrl('/tribe/event/event-detail/');
    }
  
}