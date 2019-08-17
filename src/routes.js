// Importa Routes
const routes = require('express').Router();

// Controllers/Apis
const FacebookDataExtraction = require('./Domains/Extractions/FacebookDataExtraction/FacebookDataExtraction')
const ArispDataExtraction = require('./Domains/Extractions/ArispDataExtraction/ArispDataExtraction')
const ArpenpDataExtraction = require('./Domains/Extractions/ArpenpDataExtraction/ArpenpDataExtraction')
const CadespDataExtraction = require('./Domains/Extractions/CadespDataExtraction/CadespDataExtraction')
const CagedDataExtraction = require('./Domains/Extractions/CagedDataExtraction/CagedDataExtraction')
const CensecDataExtraction = require('./Domains/Extractions/CensecDataExtraction/CensecDataExtraction')
const DetranDataExtraction = require('./Domains/Extractions/DetranDataExtraction/DetranDataExtraction')
const InfocrimDataExtraction = require('./Domains/Extractions/InfocrimDataExtraction/InfocrimDataExtraction')
const InfosegDataExtraction = require('./Domains/Extractions/InfosegDataExtraction/InfosegDataExtraction')
const JucespDataExtraction = require('./Domains/Extractions/JucespDataExtraction/JucespDataExtraction')
const SielDataExtraction = require('./Domains/Extractions/SielDataExtraction/SielDataExtraction')
const SivecDataExtraction = require('./Domains/Extractions/SivecDataExtraction/SivecDataExtraction')

// Rotas Em Uso
routes.get("/DataExtraction/Siel", SielDataExtraction.GetDataSiel)

// Rotas Não Completas
routes.get("/DataExtraction/Facebook", FacebookDataExtraction.Teste)
routes.get("/DataExtraction/Arisp", ArispDataExtraction.Teste)
routes.get("/DataExtraction/Arpenp", ArpenpDataExtraction.Teste)
routes.get("/DataExtraction/Cadesp", CadespDataExtraction.Teste)
routes.get("/DataExtraction/Caged", CagedDataExtraction.Teste)
routes.get("/DataExtraction/Censec", CensecDataExtraction.Teste)
routes.get("/DataExtraction/Detran", DetranDataExtraction.Teste)
routes.get("/DataExtraction/Infocrim", InfocrimDataExtraction.Teste)
routes.get("/DataExtraction/Infoseg", InfosegDataExtraction.Teste)
routes.get("/DataExtraction/Jucesp", JucespDataExtraction.Teste)
routes.get("/DataExtraction/Sivec", SivecDataExtraction.Teste)


module.exports = routes;

