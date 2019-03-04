import { Component, OnInit, HostBinding } from '@angular/core';
import { Aves } from 'src/app/models/aves';


import { AvesService } from 'src/app/services/aves.service';
import { Router, ActivatedRoute } from '@angular/router';
import { avesclass } from './avesclass';


@Component({
  selector: 'app-aves-form',
  templateUrl: './aves-form.component.html',
  styleUrls: ['./aves-form.component.css']
})
export class AvesFormComponent implements OnInit {
  public nuevaAve:avesclass = new avesclass();
  
  @HostBinding('class') clases = 'row';

  ave: Aves = {
    cdave: '',
    dsnombre_comun:'',
    dsnombre_cientifico: ''
  };

  edit: boolean = false;

  constructor(private aveService:AvesService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    const params = this.activatedRoute.snapshot.params;
    if (params.cdave) {
      this.aveService.getAve(params.cdave)
        .subscribe(
          res => {
            console.log(res);
            this.ave = res;
            this.edit = true;
          },
          err => console.log(err)
        )
    }
  }




  public create():void{
    this.aveService.create(this.nuevaAve).subscribe(
      response =>{
                  this.router.navigate(['/listarAves'])},
      error =>{
        console.log(error)
        }

    )

  }

  update():void{
    this.aveService.update(this.nuevaAve)
    .subscribe( 
     (response) =>{
       this.nuevaAve =response
    
      },
      (error)=>{
}
    )
    
 }

}
