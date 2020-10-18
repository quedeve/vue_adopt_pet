export default {
	animalsCount: (state) => {
		console.log(state.cats.length)
		console.log(state.dogs.length)
		return state.cats.length + state.dogs.length
	},
	getAllCats: (state) => {
		return state.pets.filter((pets) => {
			return pets.species === 'cat'
		})
	}
}