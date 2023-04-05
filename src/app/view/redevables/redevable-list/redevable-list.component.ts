import {Component, OnInit} from '@angular/core';
import {Redevable} from "../../../controler/model/redevable.model";
import {RedevableService} from "../../../controler/service/redevable.service";

@Component({
  selector: 'app-redevable-list',
  templateUrl: './redevable-list.component.html',
  styleUrls: ['./redevable-list.component.css']
})
export class RedevableListComponent implements OnInit{

  searchText:any;

  constructor( private redevableService: RedevableService) {
  }

  ngOnInit(): void {
    this.findAll();
  }



  public deleteByCin( redevable:Redevable,index: number): void{
    this.redevableService.deleteByCin(redevable.cin).subscribe(data =>{
      if (data == 1){
        this.redevables.splice(index,1);
      }else{
        alert('Delete ERROR');
      }
    });

  }




  public findAll(): void{
    this.redevableService.findAll().subscribe(data =>  this.redevables = data);

  }

  get redevable(): Redevable {

    return this.redevableService.redevable;
  }

  set redevable(value: Redevable) {
    this.redevableService.redevable = value;
  }

  get redevables(): Array<Redevable> {
    return this.redevableService.redevables;
  }

  set redevables(value: Array<Redevable>) {
    this.redevableService.redevables = value;
  }

}
