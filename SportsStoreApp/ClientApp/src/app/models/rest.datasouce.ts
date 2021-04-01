import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { from, Observable } from 'rxjs';
import { Product } from './product.model';
import { Order } from './order.model';
// https://localhost:44362/api/product
// http://localhost:7000/api/product
// https://localhost:4200

const PROTOCOL = 'http';
const PORT = '7000';

@Injectable()
export class RestDataSource {
private baseUrl: string;

constructor(private http: HttpClient) {
this.baseUrl = `${PROTOCOL}://${location.hostname}:${PORT}/api`;
console.log(` DateTime : ${new Date()}---Base URL: ${this.baseUrl}`);
}
getProducts(): Observable<Product[]> {
return this.http.get<Product[]>(`${this.baseUrl}/product`);
}
saveProduct(product: Product): Observable<Product> {
return this.http.post<Product>(`${this.baseUrl}/product`, product);
}
updateProduct(product: Product): Observable<Product> {
return this.http.put<Product>(`${this.baseUrl}/product`, product);
}

deleteProduct(id: number): Observable<Product> {
return this.http.delete<Product>(`${this.baseUrl}/product/${id}`);
}
saveOrder(order: Order): Observable<Order> {
console.log(
`From RestDataSource (Full data with Cart) :\n${JSON.stringify(order)}`
);
return from([order]);
}
}