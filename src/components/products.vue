<template>
  <div class="d-flex flex-wrap products" >
    <product-card v-for="n in 20" :key="n">
    </product-card>
  </div>
</template>

<script>
import ProductCard from './product-card'

export default {
    components:{
        ProductCard
    }
};
</script>

<style>
.products {
    margin-top:20px;
}
</style>