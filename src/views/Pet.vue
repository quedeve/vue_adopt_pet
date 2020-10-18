<template>
    <div>
		<h1>test</h1>
        <h1>{{ animal.name }} ({{ this.$route.params.species }})</h1>
		<p>Age: {{ animal.age }} years old</p>
		<p>Breed: {{ animal.breed }}</p>
    </div>
</template>

<script>

// import dogs from '@/data/dogs'
import { mapState } from 'vuex'

export default {

    data () {
        return {
           animal: {}
        }
    },
	computed: {
		...mapState([
			'dogs',
			'cats'
		])
	},
	mounted () {
		console.log(this.$route.params.species)
		console.log(this.$route.params.id)
		const animal = this[this.$route.params.species][this.$route.params.id]
		console.log(animal)
		this.animal = animal
	}
}
</script>