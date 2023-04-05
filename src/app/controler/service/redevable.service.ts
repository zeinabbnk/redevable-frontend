import { Injectable } from '@angular/core';
import {Redevable} from '../model/redevable.model';
import {HttpClient} from '@angular/common/http';
import {Observable} from "rxjs";
import {environment} from "src/environments/environment.development";
import {patchTsGetExpandoInitializer} from "@angular/compiler-cli/ngcc/src/packages/patch_ts_expando_initializer";




@Injectable({
  providedIn: 'root'
})
export class RedevableService {

  private _redevable: Redevable = new Redevable;
  private _redevables: Array<Redevable> = [];
  //private url = environment.baseURL + 'api/v1/redevable/';
  private url = 'http://localhost:8036/api/v1/redevable/';




  public deleteByCin(cin: string): Observable<number>{
    return this.http.delete<number>(this.url + 'cin/' + cin);
  }

  public save(): Observable<number>{
    return this.http.post<number>(this.url , this.redevable);
  }

  public findAll(): Observable<Array<Redevable>>{
    return this.http.get<Array<Redevable>>(this.url);
  }

  constructor(private http: HttpClient) { }


  get redevable(): Redevable {
    if (this._redevable == null){
      this._redevable = new Redevable();
    }
    return this._redevable;
  }

  set redevable(value: Redevable) {
    this._redevable = value;
  }

  get redevables(): Array<Redevable> {
    if (this._redevables == null){
      this._redevables = new Array<Redevable>();
    }
    return this._redevables;
  }

  set redevables(value: Array<Redevable>) {
    this._redevables = value;
  }
  private clone(redevable: Redevable){
    let myClone = new Redevable();
    myClone.cin=redevable.cin;
    myClone.nom=redevable.nom;
    myClone.prenom=redevable.prenom;
    return myClone;
  }

}
