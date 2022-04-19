import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit,AfterViewInit {

  foodList=['Hamburger',
'Cheeseburger',
'Sandwich',
'Milk shake',
'Muffin',
'Burrito',
'Biscuit',
'Taco',
'Hot dog',
'Fried chicken',
'Donuts',
'Baguette',
'Soft drink',
'Pizza',
'Onion ring',
'Sausage',
'Pretzel',
'Pancake',
'Bacon',
'Chip',
'Noodle',];



@ViewChild('vidd') div!:ElementRef;

  constructor() { }

  ngOnInit(): void {
    console.log(this.foodList);

  }

  ngAfterViewInit(): void {
    //Called after ngOnInit when the component's or directive's content has been initialized.
    //Add 'implements AfterContentInit' to the class.
    console.log("sjhklgjsfd");

    this.div.nativeElement.style.backgroundColor="rgb(147, 212, 230)";
  }

}
