<template>
  <router-link :to="{ name: 'HouseDetails', params: { houseId: house.id } }">
    <section class="row rounded bg-light shadow">
      <div class="col-md-4 p-0">
        <img class="img-fluid rounded-start" :src="house.imgUrl" alt="House">
      </div>
      <div class="col-md-8 p-2 px-5">
        <section class="row">
          <div class="col-12 d-flex justify-content-between align-items-center">
            <h3>${{ house.price.toLocaleString() }}</h3>
            <div class="text-center">
              <img class="rounded-circle profile-img" :src="house.creator.picture" :alt="house.creator.name">
              <p class="ps-2">{{ house.creator.name }}</p>
            </div>

          </div>
          <div class="col-6">
            <p>{{ house.bedrooms }} Bedroom</p>
            <p>{{ house.bathrooms }} Bathroom</p>
          </div>
          <div class="col-6">
            <p>{{ house.levels }} Stories</p>
            <p>Built in {{ house.year }}</p>
          </div>
          <div class="col-12">
            <p>{{ house.description }}</p>
          </div>
        </section>
      </div>
    </section>
  </router-link>
</template>


<script>
import { House } from "../models/House";


export default {
  props: {
    house: { type: House, required: true }
  },
  setup() {
    return {}
  }
};
</script>


<style lang="scss" scoped>
img {
  height: 30vh;
  width: 100%;
  object-fit: cover;
}

.profile-img {
  aspect-ratio: 1/1;
  height: 10vh;
  width: 10vh;
}
</style>