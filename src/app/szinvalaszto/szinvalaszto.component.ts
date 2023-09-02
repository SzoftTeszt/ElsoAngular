import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-szinvalaszto',
  templateUrl: './szinvalaszto.component.html',
  styleUrls: ['./szinvalaszto.component.css']
})
export class SzinvalasztoComponent {

  @Output() ujSzinKivalasztva = new EventEmitter();

  formSubmitTortent(event:any){
    event.preventDefault();
    console.log(event.target.elements.szin.value)
    this.ujSzinKivalasztva.emit(event.target.elements.szin.value)
  }

}
