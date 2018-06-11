import { Component, OnInit } from '@angular/core';
import { ChallengesService } from '../services/challenges/challenges.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  hierarchy;
  constructor(private challengesService: ChallengesService) {}

  ngOnInit() {
    this.hierarchy = this.challengesService.getChallengeHierarchy();

    console.log(this.hierarchy);
  }

}
