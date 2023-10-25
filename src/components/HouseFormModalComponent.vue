<template>
  <div class="modal fade" id="houseModal" tabindex="-1" aria-labelledby="houseModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="houseModalLabel">Create House</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <form @submit.prevent="createHouse()">
            <div class="mb-2">
              <input v-model="form.bedrooms" required type="number" class="form-control" id="bedrooms"
                placeholder="# of bedrooms">
            </div>
            <div class="mb-2">
              <input v-model="form.bathrooms" required type="number" class="form-control" id="bathrooms"
                placeholder="# of bathrooms">
            </div>
            <div class="mb-2">
              <input v-model="form.levels" required type="number" class="form-control" id="levels"
                placeholder="# of stories">
            </div>
            <div class="mb-2">
              <input v-model="form.year" required type="number" class="form-control" id="year" placeholder="Year built">
            </div>
            <div class="mb-2">
              <input v-model="form.price" required type="number" class="form-control" id="price" placeholder="Price ($)">
            </div>
            <div class="mb-2">
              <input v-model="form.imgUrl" type="url" class="form-control" id="imgUrl" placeholder="Image Url"
                maxlength="500">
            </div>
            <div class="mb-2">
              <textarea v-model="form.description" class="form-control" id="description" rows="3" maxlength="500"
                placeholder="Provide a description"></textarea>
            </div>
            <div class="text-end">
              <button class="btn btn-primary" type="submit">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import { ref } from "vue";
import Pop from "../utils/Pop";
import { housesService } from "../services/HousesService";
import { Modal } from "bootstrap";

export default {
  setup() {
    const form = ref({})

    return {
      form,
      async createHouse() {
        try {
          const houseData = form.value
          await housesService.createHouse(houseData)
          form.value = {}
          Modal.getOrCreateInstance('#houseModal').hide()
        }
        catch (error) {
          Pop.error(error)
        }
      }

    }
  }
};
</script>


<style lang="scss" scoped></style>