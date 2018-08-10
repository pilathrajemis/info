<template>
    <div>
        <slot></slot>
        <div class="is-centered">
            <table class="table table-hover product-table">
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Price</th>
                    <th>&nbsp;</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="product in products" v-bind:key="product.sku" v-on:click.prevent="onEdit(product)">
                    <td>{{ product.name }}</td>
                    <td>{{ product.description }}</td>
                    <td>{{ product.price }}</td>
                    <td><a href="#" v-on:click.prevent.stop="onRemove(product.sku)">remove</a></td>
                </tr>
                </tbody>
  </table>
        </div>
    </div>
</template>



<script>
export default {
    name: 'ProductList',
    props: ['products'],
    methods: {
        onEdit: function(product) {
            this.$emit('edit',product)
        },
        onRemove: function(sku) {           
            this.$emit('remove', sku)
        }
    }    
}
</script>