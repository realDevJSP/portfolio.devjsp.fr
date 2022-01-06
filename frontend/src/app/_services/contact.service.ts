import { Injectable } from '@angular/core';
import { first } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  
  readonly ROOT_URL;

  constructor(private http: HttpClient) {
    this.ROOT_URL = "http://devjsp.org:3000/sendmail";
  }

  PostMessage(input: any) {
    this.http.post(this.ROOT_URL, input).pipe(first())
    .toPromise()
    .then((response: any) => {
          if (response) {
            console.log(response);
            return response;
          }
        })
        .catch((error: any) => {
          console.log(error);
          return error;
        }
      );
  };





  //   this.http.post(this.api, JSON.stringify(input), { headers: this.myHeaders, responseType: 'text' })
  //   .pipe(first())
  //   .toPromise()
  //   .then((response: any) => {
  //         if (response) {
  //           console.log(response);
  //           return response;
  //         }
  //       })
  //       .catch((error: any) => {
  //         console.log(error);
  //         return error;
  //       }
  //     );
  // }
}
