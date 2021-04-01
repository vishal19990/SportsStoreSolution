import { Injectable } from '@angular/core';
import { Product } from './product.model';
//import { StaticDataSource } from './static.datasource';
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

saveProduct(product: Product) {
if (product.productId === null || product.productId === 0) {
this.dataSource.saveProduct(product).subscribe(
(p: Product) => {
this.products.push(p);
},
(err) => {
console.log(`RestDatasource.saveproduct error:\n ${err}`);
}
);
} else {
this.dataSource.updateProduct(product).subscribe(
(prod: Product) => {
this.products.splice(
this.products.findIndex((p) => p.productId === product.productId),
1,
product
);
},
(err) => {
console.log(`update product error :\n${err}`);
}
);
}
}

deleteProduct(id: number) {
this.dataSource.deleteProduct(id).subscribe(
(prod: Product) => {
this.products.splice(
this.products.findIndex((p) => p.productId === id),
1
);
},
(err) => {
console.log(`delete product error :\n${err}`);
}
);
}
}