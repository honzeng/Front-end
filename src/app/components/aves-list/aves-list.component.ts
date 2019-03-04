import { Component, OnInit, HostBinding } from '@angular/core';

import { AvesService } from '../../services/aves.service';
import { Aves } from 'src/app/models/aves';

@Component({
  selector: 'app-aves-list',
  templateUrl: './aves-list.component.html',
  styleUrls: ['./aves-list.component.css']
})
export class AvesListComponent implements OnInit {

  @HostBinding('class') classes = 'row';

  aves: any = [];

  constructor(private AvesService: AvesService) { }


  ngOnInit() {
    this.getAves();
  }

  getAves() {
    this.AvesService.getAves()
      .subscribe(
        res => {
          this.aves = res;
        },
        err => console.error(err)
      );
  }

  borrarAve(cdave: string) {
    this.AvesService.borrarAve(cdave)
      .subscribe(
        res => {
          console.log(res);
          this.getAves();
        },
        err => console.error(err)
      )
  }

}
