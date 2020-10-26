const data = [{ name: 'Charles', age: 24}, { name: 'John', age: 22}]

function getAll(){
    return data;
}

function add(name, age){
    data.push({name, age});
}

module.exports = {getAll, add, search: q => data.filter(x=> x.name == q)}