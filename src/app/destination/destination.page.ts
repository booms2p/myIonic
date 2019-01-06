import { Component, OnInit } from '@angular/core';
import { AppService, destination } from '../app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-destination',
  templateUrl: './destination.page.html',
  styleUrls: ['./destination.page.scss'],
})
export class DestinationPage implements OnInit {

  constructor(
    private service: AppService,
    private route: Router
    ) { }

  destinationList: Array<destination> = [
    {imgSrc: '/assets/wat-arun.jpg', province: 'กรุงเทพ'},
    {imgSrc: '/assets/wat-si-rin.jpg', province: 'อุบลราชธานี'},
    {imgSrc: '/assets/wat-pak-nam.jpg', province: 'ฉะเชิงเทรา'},
    {imgSrc: '/assets/wat-rong-khun.jpg', province: 'เชียงราย'},
    {imgSrc: '/assets/wat-pra-ya-na-khon.jpg', province: 'ประจวบคีรีขันธ์'},
  ]

  ngOnInit() {
  }
  
  openDestinationDetails(item) {
    // this.nav.navigateForward('/destination-detail');
    this.route.navigate(['/destination-detail']);
    this.service.destinationProvince = item;
  }

}
