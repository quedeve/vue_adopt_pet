<template>
    <div>
        <pet-table species ="dogs" :pets="dogs" />
    </div>
</template>

<script>

// import dogs from '@/data/dogs'
import { mapState } from 'vuex'
import PetTable from '@/components/PetTable.vue'

export default {
	components: {
		PetTable
	},
    data () {
        return {
            // dogs: dogs
        }
    },
	computed: {
		...mapState([
			'dogs'
		])
	}
}
</script>