import * as actions from './actions'
import * as getters from './getters'

import {
    CREATE_PRODUCT,
    UPDATE_PRODUCT,
    DELETE_PRODUCT
  } from './mutation-types'

// initial state
const initialState = {
    all: [
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

// mutations
const mutations = {
    [CREATE_PRODUCT](state, product){
        state.all.push(product)
    },
    [UPDATE_PRODUCT] (state, product) {
        const index = state.all.findIndex((p) => p.sku === product.sku)
    
        if (index !== -1) {
          // We need to replace the array entirely so that vue can recognize
          // the change and re-render entirely.
          // See http://vuejs.org/guide/list.html#Caveats
          state.all.splice(index, 1, product)
        }
      },
      [DELETE_PRODUCT] (state, productSku) {
        state.all = state.all.filter(p => p.sku !== productSku)
      }
}

export default {
    state: { ...initialState },
    actions,
    getters,
    mutations
  }
  