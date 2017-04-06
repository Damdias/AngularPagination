import { Component, OnInit } from '@angular/core';
import {Transaction} from './transaction';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {

Transactions: Transaction[] = [];
  constructor() { 

  }

  ngOnInit() {
  }
  addNew():void{
    this.Transactions.unshift(new Transaction("1/1/2017","Dialog","Bill",100));
  }
  updateTable(values:Transaction[]):void{
    this.Transactions = values;
  }

}
