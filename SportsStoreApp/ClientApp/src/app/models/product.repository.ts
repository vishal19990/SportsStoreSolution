import { Injectable } from '@angular/core';
import { Product } from './product.model';
//import { StaticDataSource } from './static.datasource'
import { RestDataSource } from './rest.datasouce';


@Injectable()
export class ProductRepository {
private products: Product[] = [];
private categories: string[] = [];

// constructor(private dataSource: StaticDataSource) {
constructor(private dataSource: RestDataSource) {

dataSource.getProducts().subscribe(
(data) => {
this.products = data;
this.categories = data
.map((p) => p.category)
.filter((c, index, array) => array.indexOf(c) === index)
.sort() as string[];
},
(error) => {
// console.log(
// `Error from dataSource.getProduts().subscribe()->\n${error}`
// );
},
() => {
// console.log(`dataSource.getProduts().subscribe()-> work completed`);
}
);
}
getProducts(category: string | null = null): Product[] {
return this.products.filter(
(c) => category == null || c.category === category
);
}
getProduct = (id: number) =>
this.products.find((p) => p.productId === id) as Product;
getCategories = () => this.categories;
}