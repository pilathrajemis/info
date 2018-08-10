import uuid from 'uuid'

import { CREATE_PRODUCT,
    UPDATE_PRODUCT,
    DELETE_PRODUCT} from './mutation-types'

export function saveProduct({commit, state}, product){
    const index = state.all.findIndex((p)=> p.sku  === product.sku)
    
    // update product if it exists or create it if it doesn't
    if (index !== -1) {
          commit( UPDATE_PRODUCT,product )
    }
    else{
        product.sku = uuid.v4()
        commit( CREATE_PRODUCT, product)
    }
}

export function deleteProduct({commit}, product) {
    commit( DELETE_PRODUCT, product )
}