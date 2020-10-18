<template>
    <div>
       <pet-table species ="cats" :pets="cats" />
    </div>
</template>

<script>

// import cats from '@/data/cats'
import { mapState } from 'vuex'
import PetTable from '@/components/PetTable.vue'

export default {
	components: {
		PetTable
	},
    data () {
        return {}
	},
	computed: {
		...mapState([
			'cats'
		])
	}
}
</script>