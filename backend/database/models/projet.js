const mongoose = require('mongoose');

const ProjetSchema = new mongoose.Schema({

	id: {
		type: Number,
		required: true
	},

	titre: {
		type: String,
		required: true,
		trim: true,
		minlength: 5
	},

	nom_client: {
		type: String,
		required: true,
		trim: true,
		minlength: 3
	},

	etat: {
		type: Number,
		required: true
	},

	date_debut: {
		type: Date,
		required: true
	},

	date_maj: {
		type: Date,
		required: false
	},

	date_fin: {
		type: Date,
		required: false
	},

	tags: {
		type: Array,
		required: true
	},

	description: {
		type: String,
		required: true,
		trim: true,
		minlength: 10
	},

	chemin_galerie: {
		type: String,
		required: true,
		trim: true,
		minlength: 20
	},

	lien_direct: {
		type: String,
		required: false
	},

	lien_github: {
		type: String,
		required: false
	}

});

const Projet = mongoose.model('Projet', ProjetSchema);

module.exports = Projet;
