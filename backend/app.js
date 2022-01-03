const express = require('express');
const app = express();
const mongoose = require('./database/mongoose');
const Projet = require('./database/models/projet');

app.use(express.json());

app.use((req, res, next) => {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Methods", "GET, POST, HEAD, OPTIONS, PUT, PATCH, DELETE");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	next();
});



app.get('/projets', (req, res) => {
	Projet.find({})
		.then(projets => res.send(projets))
		.catch((error) => console.log(error));
});

app.post('/projets', (req, res) => {
	(new Projet({ 'id': req.body.id, 'titre': req.body.titre, 'nom_client': req.body.nom_client, 'etat': req.body.etat, 'date_debut': req.body.date_debut, 'date_maj': req.body.date_maj, 'date_fin': req.body.date_fin, 'tags': req.body.tags, 'description': req.body.description, 'chemin_galerie': req.body.chemin_galerie, 'lien_direct': req.body.lien_direct, 'lien_github': req.body.lien_github }))
		.save()
		.then((projet) => res.send(projet))
		.catch((error) => console.log(error));
});

app.get('/projets/:jprojetId', (req, res) => {
	Projet.find({ _id: req.params.projetId })
		.then((projet) => res.send(projet))
        .catch((error) => console.log(error));
});

app.patch('/projets/:projetId', (req, res) => {
	Projet.findOneAndUpdate({ '_id': req.params.projetId }, { $set: req.body })
		.then((projet) => res.send(projet))
        .catch((error) => console.log(error));
});

app.delete('/projets/:projetId', (req, res) => {
	Projet.findByIdAndDelete(req.params.projetId)
		.then((projet) => res.send(projet))
        .catch((error) => console.log(error));
});



app.listen(3000, () => console.log("Server Connected on port 3000"));
