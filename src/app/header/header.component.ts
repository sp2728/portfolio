import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() sectionEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  changeSection(section:string="contact"){
    this.sectionEvent.emit(section);
  }

}
