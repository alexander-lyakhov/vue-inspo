export default {
	namespaced: true,

	state: {
		images: []
	},

	getters: {
	},

	mutations: {
		EXTRACT_IMAGES(state, data) {
			console.log('EXTRACT_IMAGES', data);

			const records = data.ServiceResponse.results.records;

			state.images = records.map(item =>
				item.CORE_PROMO_IMAGE_URL ?
					item.CORE_PROMO_IMAGE_URL[0] + '.rend.hgtvcom.651.651.jpeg':
					item.CORE_CRX_PATH[0] + '.rend.hgtvcom.651.651.jpeg'
			)
		},
	},

	actions: {
	}
}