import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-destination-detail',
  templateUrl: './destination-detail.page.html',
  styleUrls: ['./destination-detail.page.scss'],
})
export class DestinationDetailPage implements OnInit {

  constructor(
    private service: AppService
  ) { }

  province: string;

  detailList = [
    { imgSrc: '', description: '' },
    { imgSrc: '', description: '' },
    { imgSrc: '', description: '' },
    { imgSrc: '', description: '' },
    { imgSrc: '', description: '' }
  ]

  ngOnInit() {
    console.log(this.service.destinationProvince);
    if (this.service.destinationProvince && this.service.destinationProvince.imgSrc) {
      const img = this.service.destinationProvince.imgSrc;

      this.detailList = [
        { imgSrc: img, description: '' },
        { imgSrc: img, description: '' },
        { imgSrc: img, description: '' },
        { imgSrc: img, description: '' },
        { imgSrc: img, description: '' }
      ]

      this.province = this.service.destinationProvince.province;
    }
  }

  clearDestinationProvince () {
    this.service.destinationProvince = {
      imgSrc: '',
      province: ''
    };
    
    this.province = '';
  }

}
