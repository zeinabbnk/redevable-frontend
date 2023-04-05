import {Component, OnInit} from '@angular/core';
import {RedevableService} from 'src/app/controler/service/redevable.service';
import {Redevable} from 'src/app/controler/model/redevable.model';

@Component({
  selector: 'app-redevable-create',
  templateUrl: './redevable-create.component.html',
  styleUrls: ['./redevable-create.component.css']
})
export class RedevableCreateComponent implements OnInit {


  constructor(private redevableService: RedevableService) {
  }

  ngOnInit(): void {
  }

  public save(): void {
    this.redevableService.save().subscribe(data => {
      if (data == 1) {
        this.redevables.push({...this.redevable});
        alert('SAVE SUCCESS');
      } else {
        alert('SAVE ERROR :: REDEVABLE EXISTE');
      }
    });
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
