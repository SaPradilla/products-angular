export interface Category {
    id:number;
    name:string;
}

export interface Product {

    id:number;
    categoryId:number;
    name:string;
    description:string;
    amount:number;
    brand:string;
    value:number;
    image:string;
    liked:Boolean;
    status:Boolean;
    category:Category;

}

export interface responseGetProducts {

    first:number;
    prev:number;
    next:number;
    last:number;
    pages:number;
    items:number;
    data:Product[]

}
