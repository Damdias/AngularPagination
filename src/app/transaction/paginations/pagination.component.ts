import {Component,OnInit} from '@angular/core';

@Component({
selector:'ts-pagination',
templateUrl:"pagination.component.html",
styleUrls :["pagination.component.css"]
})
export class Pagination implements OnInit{

totalRecords:number;
pageItems:number[] = Array(5).fill().map((x,i)=>i);


currentPage:number;
itemsPage : number = 10;

constructor(){

}
ngOnInit():void{

}
nextPage():void{
if(this.currentPage < 8){
    this.currentPage += 1;;
}
}
previoudPage():void{
if(this.currentPage > 1){
    this.currentPage -= 1;
}
}
pageClick(pageNo:number):void{
    this.currentPage = pageNo;
  //  alert(this.currentPage);
}
} 