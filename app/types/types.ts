 
 
 
 export interface Product {
   title: string;
   productImage: string;
   price: number;
   description: string;
   discountPercentage: number;
   isNew: boolean;
   tags: string[];
   id: string;
   stock: number;
   slug: { current: string }; // Ensure this matches everywhere
 }
 