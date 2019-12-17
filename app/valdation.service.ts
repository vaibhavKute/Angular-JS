import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValdationService {

  constructor() { }

  name(){
    return 1;
  }
  mobile(){
    return 2;
  }
  email(){
    return 3;
  }
  password(){
    return 4;
  }
}
