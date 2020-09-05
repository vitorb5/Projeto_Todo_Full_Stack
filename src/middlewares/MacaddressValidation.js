const MacaddressValidation = (req, res, next) =>{
    if(!req.body.macaddress)
    return res.status(400).json({error : 'macaddress é obrigatório'});
    // caso houver apenas uma linha no if e else não é necessário as chaves neste exemplo
    else
    next();
};

module.exports = MacaddressValidation