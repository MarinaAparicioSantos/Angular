import { Component, OnInit } from '@angular/core';
import { EstudioGhibliService } from '../estudio-ghibli.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  title = 'proyectoMarina-dwc';
  data:any;

  constructor(private estudioGhibli:EstudioGhibliService) { 

    this.estudioGhibli.getData().subscribe(result=>{
      console.warn("result",result);
      this.data=result;

    })
  }

  ngOnInit(): void {
  }

}
