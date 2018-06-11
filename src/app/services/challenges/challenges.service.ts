import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HIERARCHY } from './hierarchy.js';
@Injectable({
  providedIn: 'root'
})
export class ChallengesService {

  constructor() { }
  getChallengeHierarchy = () => {
    return HIERARCHY;
  }
}
