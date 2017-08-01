import { Component, Input } from '@angular/core';
import {PageItem} from "../../models/index";

@Component({
  selector: 'page-list',
  templateUrl: './page-list.html'
})

export class PageListComponent {
  
  @Input() public items: PageItem[] = [];
  
}

