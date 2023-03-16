import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor() { }

  getUserPosts() {
    
  }
  // getUserPosts() {
  //   fetch('https://jsonplaceholder.typicode.com/users/1/posts')
  //   .then(res => res.json())
  //   .then(json => {
  //     console.log(json);
  //   })
  // }
}
