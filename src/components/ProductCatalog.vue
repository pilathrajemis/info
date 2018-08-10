<template>
    <section>
        <ul v-for="product in products" v-bind:key="product.sku">
        <li>{{product.name}}</li>
        </ul>
    </section>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    name: 'ProductCatalog',
    computed:mapGetters({
        products:'getProducts'
    })
}
</script>

