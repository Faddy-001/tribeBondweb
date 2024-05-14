import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SelectItem } from 'primeng/api';
import { Blog } from 'src/app/demo/api/blog';
import { AuthenticationService } from 'src/app/demo/service/authentication.service';

@Component({
    selector: 'app-events',
    templateUrl: './events.component.html',
    styleUrl: './events.component.scss'
})
export class EventsComponent {
    desiredWidth = 450; // Example width in pixels
    desiredHeight = 250;
    constructor(private router: Router, private auth: AuthenticationService) { }
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

                    this.newPPT.push({
                        id: data._id,
                        name: data.name,
                        date: data.date,
                        address: data.address,
                        phone: data.phone,
                        time: data.time,
                        image: data.thumbnail


                    })
                    console.log(this.newPPT.image);

                })
            })
    }

    sortField: string = '';
    totalBlogs: Blog[] = [
        {
            coverImage: 'assets/demo/images/blog/blog-1.png',
            profile: 'assets/demo/images/avatar/circle/avatar-f-1.png',
            title: 'Blog',
            description:
                'Ornare egestas pellentesque facilisis in a ultrices erat diam metus integer sed',
            comment: 2,
            share: 7,
            day: '15',
            month: 'October',
        },
        {
            coverImage: 'assets/demo/images/blog/blog-2.png',
            profile: 'assets/demo/images/avatar/circle/avatar-f-2.png',
            title: 'Magazine',
            description:
                'Magna iaculis sagittis, amet faucibus scelerisque non ornare non in penatibus ',
            comment: 5,
            share: 1,
            day: '20',
            month: 'Nov',
        },
        {
            coverImage: 'assets/demo/images/blog/blog-3.png',
            profile: 'assets/demo/images/avatar/circle/avatar-m-1.png',
            title: 'Science',
            description:
                'Purus mattis mi, libero maecenas volutpat quis a morbi arcu pharetra, mollis',
            comment: 2,
            share: 6,
            day: '23',
            month: 'Oct',
        },
        {
            coverImage: 'assets/demo/images/blog/blog-4.png',
            profile: 'assets/demo/images/avatar/circle/avatar-m-1.png',
            title: 'Blog',
            description:
                'Curabitur vitae sit justo facilisi nec, sodales proin aliquet libero volutpat nunc',
            comment: 5,
            share: 5,
            day: '14',
            month: 'Dec',
        },
        {
            coverImage: 'assets/demo/images/blog/blog-5.png',
            profile: 'assets/demo/images/avatar/circle/avatar-f-3.png',
            title: 'Magazine',
            description:
                'Id eget arcu suspendisse ullamcorper dolor lobortis dui et morbi penatibus quam',
            comment: 4,
            share: 1,
            day: '05',
            month: 'Apr',
        },
        {
            coverImage: 'assets/demo/images/blog/blog-5.png',
            profile: 'assets/demo/images/avatar/circle/avatar-m-3.png',
            title: 'Science',
            description:
                'Sagittis hendrerit laoreet dignissim sed auctor sit pellentesque vel diam iaculis et',
            comment: 1,
            share: 3,
            day: '12',
            month: 'Nov',
        },
    ];
    navigateToDetail(): void {
        this.router.navigateByUrl('/tribe/event/event-detail');
    }
    routing() {
        console.log('dfsf');

        this.router.navigateByUrl('add-events')
    }
}