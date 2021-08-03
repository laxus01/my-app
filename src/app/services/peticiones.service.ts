import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs/Observable';
import { Global } from './global';


@Injectable()
export class PeticionesService{

    public url: string;
    public url2: string;

    constructor(

        public _http: HttpClient

    ){

        this.url = Global.url;
        this.url2 = Global.url2;

    }

    getStudents(): Observable<any> {

        return this._http.get(this.url);

    }

    

	saveNotification(notification): Observable<any>{

        console.log(notification);
        
		let headers = new HttpHeaders().set('Content-Type','application/json');

		return this._http.post(this.url2, notification, {headers: headers}); 

	}

}