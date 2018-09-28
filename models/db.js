const mongoose = require('mongoose');

mongoose.connect('mongodb://enesmaliksayan:enes123@ds115613.mlab.com:15613/namaztakip',{useNewUrlParser: true}).then(() => {
    console.log("connected to db");
}).catch((e) => {
    console.log("connection error: \n", e);
})

const NamazSchema = mongoose.Schema({
    vakit: { type: String, required: true, unique: true },
    kalan: { type: Number, required: true },
});

const Namaz = module.exports = mongoose.model('Namaz', NamazSchema);

module.exports.updateNamazById = (id, body, callback) => {
    Namaz.findOneAndUpdate(id, body, callback);
}

module.exports.getNamazlar = (callback) => {
    Namaz.find(callback);
}

module.exports.getNamazById = (id, callback) => {
    Namaz.findById(id, callback);
}