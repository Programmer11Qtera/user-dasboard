<script setup lang="ts">
import axios from "axios";
import { onMounted, ref } from "vue";

const PRODUCT_API = "https://dummyjson.com/products";
const products = ref([]);

const getProduct = () => {
  axios
    .get(PRODUCT_API)
    .then((result: any) => {
      products.value = result.data.products;
    })
    .catch((err: any) => {
      console.log(err);
    });
};

onMounted(() => {
  getProduct();
  // console.log(products.value);
});

// const products = ref([
//   {
//     id: "1000",
//     code: "f230fh0g3",
//     name: "Bamboo Watch",
//     description: "Product Description",
//     image: "bamboo-watch.jpg",
//     price: 65,
//     category: "Accessories",
//     quantity: 24,
//     inventoryStatus: "INSTOCK",
//     rating: 5,
//   },
//   {
//     id: "1000",
//     code: "f230fh0g3",
//     name: "Bamboo Watch",
//     description: "Product Description",
//     image: "bamboo-watch.jpg",
//     price: 65,
//     category: "Accessories",
//     quantity: 24,
//     inventoryStatus: "INSTOCK",
//     rating: 5,
//   },
// ]);
</script>
<template>
  <DataTable :value="products" tableStyle="min-width: 50rem">
    <Column field="title" header="Name"></Column>
    <Column header="Image">
      <template #body="slotProps">
        <img :src="slotProps.data.thumbnail" class="product__image" />
      </template>
    </Column>
    <Column field="brand" header="Brand"></Column>
    <Column field="category" header="Category"></Column>
    <Column field="stock" header="Stock"></Column>
  </DataTable>
</template>
<style scoped lang="scss">
.product__image {
  width: 100px;
  aspect-ratio: 4/3;
  object-fit: cover;
  border-radius: 10px;
}
</style>
