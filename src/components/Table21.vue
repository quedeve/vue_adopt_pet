<template>
  <div>
    <b-table
      id="my-table"
      :busy.sync="isBusy"
      :items="myProvider"

    >
		<template v-slot:cell(avatar)="data">
			<b-img :src="`${data.item.avatar}`" fluid alt="Fluid image"></b-img>
		</template>
	</b-table>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        isBusy: false
      }
    },
    methods: {
      myProvider (ctx) {
        // Here we don't set isBusy prop, so busy state will be
        // handled by table itself
        // this.isBusy = true
        const promise = this.$http.get('https://reqres.in/api/users?page=1')

        return promise.then((resp) => {
		const items = resp.data.data
		console.log(items)
          // Here we could override the busy state, setting isBusy to false
          // this.isBusy = false
          return (items)
        }).catch(error => {
          // Here we could override the busy state, setting isBusy to false
          // this.isBusy = false
          // Returning an empty array, allows table to correctly handle
		// internal busy state in case of error
			console.log(error)
        return []
        })
      }
    }
  }
</script>