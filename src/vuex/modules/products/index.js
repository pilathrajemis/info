import * as actions from './actions'
import * as getters from './getters'

import {
    CREATE_PRODUCT,
    UPDATE_PRODUCT,
    DELETE_PRODUCT,
    FETCH_PRODUCTS
  } from './mutation-types'

// initial state
const initialState = {
    all: [ ]
}

// mutations
const mutations = {

     [FETCH_PRODUCTS](state,products){         
        state.all = products
     },

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
  