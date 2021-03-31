import {Product } from './product.model'
export class CartLine{
constructor(public product:Product,public quantity:number)
{}
  get lineTotal() { return (this.quantity * this.product.price!); }

}
export class Cart{
  public lines:CartLine[]=[];
  public itemCount=0;
  public cartPrice=0;

  private recalculate()
  {
    this.itemCount=0;
    this.cartPrice=0;
    this.lines.forEach(l=>{
      this.itemCount+=l.quantity;
      this.cartPrice+=(l.quantity*l.product.price!);
      
    });
      
  }
  addLine(product:Product,quantity :number=1)
  {
    const line=this.lines.find(l=>l.product.productId===product.productId);
    if(line!==undefined)
    {
      line.quantity+=quantity;
    }
    else{
      this.lines.push(new CartLine(product,quantity));
    }
    this.recalculate();
  }
  updateQuantity(product:Product,quantity:number)
  {
    const line=this.lines.find(l=>l.product.productId===product.productId);
    if(line!==undefined)
    {
      line.quantity=quantity;
    }
    this.recalculate();
  }
  removeLine(id:number){
    const index=this.lines.findIndex(line=>line.product.productId===id);
    this.lines.splice(index,1);
    this.recalculate();
  }
  clear(){
    this.lines=[];
    this.itemCount=0;
    this.cartPrice=0;
  }
}