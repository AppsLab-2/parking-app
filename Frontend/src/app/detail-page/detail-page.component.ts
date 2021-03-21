import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import {Place} from '../place';
import {PlaceService} from '../place.service'

@Component({
  selector: 'app-detail-page',
  templateUrl: './detail-page.component.html',
  styleUrls: ['./detail-page.component.css']
})
export class DetailPageComponent implements OnInit {
 place: Place;
  constructor(
    private location: Location,
    private placeService: PlaceService,
    private route: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.getPlace();
  }

  getPlace(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.placeService.getPlace(id)
      .subscribe(hero => this.place = hero);
  }
  goBack(): void{
this.location.back();

  }
  click():void{
    
  }
}
