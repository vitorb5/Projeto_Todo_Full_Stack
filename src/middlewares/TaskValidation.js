const TaskModel = require ('../model/TaskModel');
const {isPast} = require ('date-fns');

const TaskValidation = async (req, res, next) => {
    const {macaddress, type, title, description, when} = req.body;

    if(!macaddress)
    return res.status(400).json({error: 'macaddress é obrigatório'});
    else if(!type)
    return res.status(400).json({error: 'tipo é obrigatótio'});
    else if(!title)
    return res.status(400).json({erro: 'título é obrigatório'})
    else if(!description)
    return res.status(400).json({error: 'descrição é obrigatótio'})
    else if (!when)
    return res.status(400).json({error: 'data é obrigatório'})
    else if (isPast(new Date(when)))
    return res.status(400).json({error: 'Data está no passado'})
    else{

        let exists;

        if(req.params.id){
            exists = await TaskModel.findOne(
                        {'_id': {'$ne': req.params.id},
                        'when': {'$eq': new Date (when)},
                        'macaddress' : {'$in': macaddress}
                    });
    
        }else{
        exists = await TaskModel.findOne
                        ({'when': {'$eq': new Date (when)},
                        'macaddress' : {'$in': macaddress}});
        }
        
        if(exists){
        return res.status(400).json({error: 'Já existe uma tarefa nesse dia'})
        }



        next();



    }
}

module.exports = TaskValidation;