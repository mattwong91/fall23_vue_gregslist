<template>
  <div class="container-fluid">
    <section class="row">
      <div class="col-12 p-4">
        <h1>House Details</h1>
      </div>
    </section>
    <section class="row justify-content-center">
      <div class="col-md-6 p-0">
        <img class="img-fluid rounded-start" :src="house.imgUrl" alt="House">
      </div>
      <div class="col-md-7 p-2 px-5">
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
  </div>
</template>


<script>
import { useRoute } from "vue-router";
import Pop from "../utils/Pop";
import { computed, onMounted } from "vue";
import { AppState } from "../AppState";
import { housesService } from "../services/HousesService";
import { logger } from "../utils/Logger";

export default {
  setup() {

    const route = useRoute()

    async function getHouseById() {
      try {
        const houseId = route.params.houseId
        await housesService.getHouseById(houseId)
      }
      catch (error) {
        Pop.error(error)
      }
    }

    onMounted(() => {
      logger.log('House ID from route', route.params.houseId)
      getHouseById()
    })

    return {
      house: computed(() => AppState.activeHouse)
    }
  }
};
</script>


<style lang="scss" scoped>
img {
  height: 50vh;
  width: 100%;
  object-fit: cover;
}

.profile-img {
  aspect-ratio: 1/1;
  height: 10vh;
  width: 10vh;
}
</style>