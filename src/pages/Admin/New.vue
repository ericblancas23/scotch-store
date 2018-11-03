<template>
    <b-form @submit="onSubmit">
    <b-form-group label="Name"
                  >
      <b-form-input 
                    type="text"
                    v-model="form.name"
                    :state="!$v.form.name.$invalid"
                    placeholder="Enter name" />
      <b-form-invalid-feedback>
        This is a required field and must be at least 3 characters
      </b-form-invalid-feedback>
    </b-form-group>

    <b-form-group label="number"  
                    >
        <b-form-input type="number"
                      v-model="form.number"
                      :state="!$v.form.number.$invalid"
                      placeholder="Enter number" />
        <b-form-invalid-feedback>
            Please Enter a Number
        </b-form-invalid-feedback>
                      
    </b-form-group>

    <b-form-group label="description">
        <b-form-input type="text"
                      v-model="form.description"
                      :state="!$v.form.description.$invalid"
                      placeholder="Enter Description" />
        <b-form-invalid>
            Please Enter Description
        </b-form-invalid>
    </b-form-group>

    <b-form-group>
        <b-form-select>
            <template>
                <!-- <option
                    :value="manufacturer._id"
                    :selected="manufacturer._id == ()"
                >{{manufacturer.name}}</option>
            </template> -->
        </b-form-select>
    </b-form-group>
    
    <b-button type="submit"
              variant="primary"
              :disabled="$v.form.$invalid">
      Submit
    </b-button>
  </b-form>  
</template>


    <script>
  import { validationMixin } from "vuelidate"
  import { required, minLength } from "vuelidate/lib/validators"

  export default {
    name: "New",
    data() {
      return {
        manufacturers: [

        ],
        form: {}
      }
    },
    mixins: [
      validationMixin
    ],
    validations: {
      form: {
        Image: {},
        manufacturer: {
            required
        },
        description: {
            required
        },
        number: {
          required
        },
        name: {
          required,
          minLength: minLength(3)   
        }
      }
    },
    methods: {
      onSubmit() {
        // form submit logic
      }
    }
  }
</script>



