import { Component, OnInit } from '@angular/core';
import { EstudioGhibliService } from '../estudio-ghibli.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-ghibli',
  templateUrl: './ghibli.component.html',
  styleUrls: ['./ghibli.component.css']
})
export class GhibliComponent implements OnInit {
  title = 'proyectoMarina-dwc';
  data:any;
  public id:number;

  constructor(private estudioGhibli:EstudioGhibliService, private actRout: ActivatedRoute,) { 

    this.id= this.actRout.snapshot.params['id'];

    this.estudioGhibli.getData().subscribe(result=>{
      console.warn("result",result);
      this.data=result;

    })

  }

  ngOnInit(): void {
  }

  eliminar(id:number){
    this.data.splice(id,1);
    
  }

}
