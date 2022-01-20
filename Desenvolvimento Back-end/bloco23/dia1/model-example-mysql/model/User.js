const connection = require('./connection');

const getNewUser= ({ id, firstaName, middleName, lastName}) => {
    const fullName = [firstaName, middleName, lastName].filter((name) => name).join(" ");
    return {
        id,
        firstaName,
        middleName,
        lastName
    }
}

const serialize = (authorData) => {
    return {
        id: authorData.id,
        firstaName: authorData.first_name,
        middleName: authorDataData.middle_name,
        lastName: authorData.last_name
    }
}

const getAll = async () => {
    const [user] = await connection.execute('SELECT id, first_name, middle_name, last_name FROM user');

    return authors.map(serialize).map(getNewAuthor);
}

module.exports = {
    getAll,
};

