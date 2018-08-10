<template>
    <section>
        <form>
            <div class="field">
                <label for="productName" class="label">Product name</label>
                <div class="control">
                    <input type="text" v-model="product.name" class="input" id="productName" maxlength="32" placeholder="Enter product name">
                </div>           
            </div>
            <div class="field">
                <label for="productDescription" class="label">Product description <small class="text-muted">(optional)</small></label>
                <div class="control">
                    <textarea class="textarea" v-model="product.description" id="productDescription" rows="3" maxlength="128" placeholder="Enter description"></textarea>
                </div>
            </div>
            <div class="field">
                <label for="price" class="label">Price</label>
                <div class="control">
                    <input type="number" v-model="product.price" class="input" id="price" placeholder="Enter Price" number>
                </div>
            </div>
            <div class="field">
                <button type="submit" v-on:click.prevent="onSubmit" class="button is-link">Save product</button>
            </div>
        </form>

      
    </section>

    
</template>

<script>
export default {
    name: 'SaveProductForm',
    props:['product'],        
    methods: {
        onSubmit: function() {
            this.$emit('submit',this.product)
        }
    }
}
</script>