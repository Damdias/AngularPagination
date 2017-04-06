import {Component,OnInit,EventEmitter,Output} from '@angular/core';
import {Transaction} from '../transaction';

@Component({
    selector:'ts-search-bar',
    templateUrl:"search-bar.Component.html"
})
export class SearchBarComponent implements OnInit{

 @Output() searchResult = new EventEmitter<Transaction[]>();
constructor(){

}
ngOnInit(){

}
search():void{
    alert("click search"); 
    let tras:Transaction[] = [
       new Transaction("test","Dialog","bill",500.00)
    ];
    this.searchResult.emit(tras);
}
}