const mongoose = require ('../config/database');
const Schema = mongoose.Schema;

 const TaskSchema = new Schema({
            macaddress: {type: String, required: true},
            type: {type: Number, required: true},
            title: {type: String, required: true},
            description: {type: String, required: true},
            when: {type: Date, required: true},
            done: {type: Boolean, default: false},
            created: {type: Date, default: Date.now()}

});

module.exports = mongoose.model('Task', TaskSchema);
//module.export é pq é prciso exportar p/ outros arq ultilizaremd
//'Task' pq é nome como ele vai gravar no banco
//TaskSchema que o nosso objeto que a gente criou com todas infomações do protótipo
