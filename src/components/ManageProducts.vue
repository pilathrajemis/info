<template>
    <section>       
        <save-product-form
        v-bind:product="ProductInForm"
        v-on:submit="onFormSave"
        ></save-product-form>
        <product-list v-bind:products="products" v-on:edit="onEditClicked" v-on:remove="onRemoveClicked"></product-list>
    </section>
</template>

<script>
import ProductList from './ProductList'
import SaveProductForm from './SaveProductForm'
import uuid from 'uuid'
const initialData = ()=> {
   return {
     ProductInForm: {
       name: '',
       sku: '',
       price: null,
       description: null
     },
      products:[
                    {
                        name: "Product 1",
                        sku: "product-1",
                        description: "prodcut 1 description added here",
                        price: 123
                    },
                    {
                        name: "Product 2",
                        sku: "product-2",
                        description: "prodcut 2 description added here",
                        price: 13.99
                    },
                    {
                        name: "Product 3",
                        sku: "product-3",
                        description: "prodcut 3 description added here",
                        price: 34.00
                    }
                ]
   }
}
export default {
  name: 'ManageProducts',
  data: initialData,
  components:{
      ProductList,
      SaveProductForm  
  },
  methods:{
      onFormSave: function(product) {                       
             const index = this.products.findIndex((p) => p.sku === product.sku)
            // update product if it exists or create it if it doesn't
            if (index !== -1) {
                // We need to replace the array entirely so that vue can recognize
                // the change and re-render entirely.
                // See http://vuejs.org/guide/list.html#Caveats
                this.products.splice(index, 1, product)
            } else {
                product.sku = uuid.v4()
                this.products.push(product)
            }
            this.resetProductInForm ()

      },
      onEditClicked: function(product) {
          this.ProductInForm = {...product }
      },
      onRemoveClicked: function(productSku) {
          const index = this.products.findIndex((p) => p.sku === productSku)
          this.products.splice(index, 1)         
          if (productSku === this.ProductInForm.sku) {
             this.resetProductInForm ()
         }
      },
      resetProductInForm: function() {
         this.ProductInForm = initialData().ProductInForm
      }

  }
}
</script>


