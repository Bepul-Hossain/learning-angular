import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

import { Product, products } from "../products";

@Component({
  selector: "app-product-alerts",
  templateUrl: "./product-alerts.component.html",
  styleUrls: ["./product-alerts.component.css"],
})
export class ProductAlertsComponent implements OnInit {
  @Input() product!: Product; //The @Input() decorator indicates that the property value passes in from the component's parent
  @Output() notify = new EventEmitter(); //The @Output() decorator indicates that the property value passes out to the component's children
  constructor() {}

  ngOnInit(): void {}
}
