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
import { mapGetters, mapActions } from 'vuex'

import ProductList from './ProductList'
import SaveProductForm from './SaveProductForm'


const initialData = ()=> {
   return {
     ProductInForm: {
       name: '',
       sku: '',
       price: null,
       description: null
     }      
   }
}
export default {
  name: 'ManageProducts',
  data: initialData,
  computed:mapGetters({
      products: 'getProducts'
  }),
  components:{
      ProductList,
      SaveProductForm  
  },
  methods:{
      ...mapActions([
      'saveProduct',
      'deleteProduct'
    ]),
      onFormSave: function(product) {                       
        this.saveProduct(product).then(() => this.resetProductInForm ())            
      },
      onEditClicked: function(product) {
          this.ProductInForm = {...product }
      },
      onRemoveClicked: function(productSku) {
          this.deleteProduct(productSku).then(
              () => {
                 if (productSku === this.ProductInForm.sku) {
                    this.resetProductInForm ()
                 }
              }
          )      
          
      },
      resetProductInForm: function() {
         this.ProductInForm = initialData().ProductInForm
      }

  }
}
</script>


