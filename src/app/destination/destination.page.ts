import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { DestinationDetailPage } from '../destination-detail/destination-detail.page';
import { AppService, destination } from '../app.service';

@Component({
  selector: 'app-destination',
  templateUrl: './destination.page.html',
  styleUrls: ['./destination.page.scss'],
})
export class DestinationPage implements OnInit {

  constructor(
    public nav: NavController,
    private service: AppService
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
    this.nav.navigateForward('/destination-detail');
    this.service.destinationProvince = item;
  }

}
