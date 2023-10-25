<template>
  <div class="container-fluid">
    <section class="row">
      <div class="col-12 p-4 text-center">
        <h1>
          <span>Houses page</span>
        </h1>
        <button class="btn fs-2 ms-3" type="button" title="Open House Form" data-bs-toggle="modal"
          data-bs-target="#houseModal">🏠</button>
      </div>
    </section>
    <section class="row">
      <div v-for="house in houses" :key="house.id" class="col-12 p-4">
        <HouseCardComponent :house="house" />
      </div>
    </section>
  </div>

  <HouseFormModalComponent />
</template>


<script>
import { computed, onMounted } from 'vue';
import Pop from "../utils/Pop";
import { housesService } from "../services/HousesService";
import { AppState } from "../AppState";
import HouseCardComponent from "../components/HouseCardComponent.vue";
import HouseFormModalComponent from "../components/HouseFormModalComponent.vue";

export default {
  setup() {
    onMounted(() => {
      getHouses();
    });
    async function getHouses() {
      try {
        await housesService.getHouses();
      }
      catch (error) {
        Pop.error(error);
      }
    }
    return {
      houses: computed(() => AppState.houses)
    };
  },
  components: { HouseCardComponent, HouseFormModalComponent }
};
</script>


<style lang="scss" scoped></style>