import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-doboz',
  templateUrl: './doboz.component.html',
  styleUrls: ['./doboz.component.css']
})
export class DobozComponent {
  eppenMozgatvaVan=false;
  @Input() xPozicio=0;
  @Input() yPozicio=0;
  @Input() kivalasztottSzin!:string;



  dobozDragVege(){
    this.eppenMozgatvaVan=false;
  }

  dobozDragFolyamatban(event:any){
    // console.log(event);
    if (this.eppenMozgatvaVan)
     {
        this.xPozicio=event.clientX-300/2;
        this.yPozicio=event.clientY-200/2;
     }
  }
}
