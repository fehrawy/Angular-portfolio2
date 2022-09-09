
import { AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import { AppModule } from '../app.module';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit, AfterViewInit {

  @ViewChild("draw")maker!: ElementRef ;  

  constructor() { }

  
  ngOnInit(): void {
    
  }

  ngAfterViewInit(): void {
    console.log(this.maker);
    
  }

  colors (color: any) {
    this.maker.nativeElement.style.background=color
  }
 
}


