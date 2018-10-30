<template>
  <div>
  <div>
  <form @submit.prevent="saveProduct">
    <div class="col-lg-5 col-md-5 col-sm-12 col-xs-12">
      <div class="form-group">
            <label>Name</label>
                <b-form-input
        type="text"
        placeholder="Name"
        v-model="model.name"
        v-validate="required"
        name="name"
        :class="{'form-control': true, 'errors': errors.has('name')}"
    />
        <span class="small text-danger" v-show="errors.has('name')">Name is required</span>

      </div>
      <div class="form-group">
          <label>Price</label>
          <b-form-input 
            type="number"
            class="form-control"
            placeholder="price"
            v-model="model.price"
            v-validate=required
            :class="{'form-control': true, 'errors': errors.has('price')}"
          />
          <span class="small text-danger" v-show="errors.has('price')">Please set a valid price</span> 
      </div>

      <div class="form-control">
          <label>Manufacturer</label>
          <select 
            type="text"
            class="form-control"
            v-model="model.manufacturer"
            v-validate=required
            :class="{'form-control': true, 'errrors': errors.has('manufacturer')}"
          />
          <span class="form-control" v-show="errors.has('manufacturer')">Manufacturer is required</span>
      </div>
    </div>
  </form>
  </div>
  </div>  
</template>


<script>
    export default {
        mathods: {
            saveProduct() {
                console.log(this.errors);
            }
        }
    }
</script>


