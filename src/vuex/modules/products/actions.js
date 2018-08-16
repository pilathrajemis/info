import uuid from 'uuid'
import Vue from 'vue'

import { 
    CREATE_PRODUCT,
    UPDATE_PRODUCT,
    DELETE_PRODUCT,
    FETCH_PRODUCTS
} from './mutation-types'

export function fetchProducts ({ commit }) {
    return Vue.http.get('products')
        .then((response) => commit(FETCH_PRODUCTS, response.body)        
        )
}

export function createProduct ({ commit }, product) {
    return Vue.http.post('products', product)
      .then((response) => commit(CREATE_PRODUCT, response.body))
  }

  export function updateProduct ({ commit }, product) {    
    return Vue.http.put(`products/${product.sku}`, product)
      .then((response) => commit(UPDATE_PRODUCT, response.body))
  }
  


export function saveProduct({commit, state}, product){
    const index = state.all.findIndex((p)=> p.sku  === product.sku)
    // handle numeric  
    product.price = parseFloat(product.price)
    // update product if it exists or create it if it doesn't
    if (index !== -1) {        
        return updateProduct ({ commit }, product)
    }
    else{
        product.sku = uuid.v4()
        return createProduct ({ commit }, product)
    }
}




export function deleteProduct ({ commit }, productSku) {
    return Vue.http.delete(`products/${productSku}`)
      .then(() => commit(DELETE_PRODUCT, productSku))
  }
  