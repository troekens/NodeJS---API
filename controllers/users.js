import { v4 as uuidv4 } from 'uuid';
let users = [];

export const createUser = (req, res, next) => {
    const user = req.body;
    users.push({ ...user, id: uuidv4()}); //On rajoute le user plus un ID généré par le package UUID. On rajoute un nouvel object en utilisant le spread (...).
    res.send(`User with the name ${user.firstName} added to the Database`);
}

export const getUser = (req, res, next) => {
    const {id } = req.params;
    const foundUser = users.find((user) => user.id == id);
    res.send(foundUser);
}

export const getUsers = (req, res, next) => {
    res.send(users);
}

export const deleteUser = (req, res, next) => {
    const {id } = req.params;
    users = users.filter((user) => user.id != id);
    res.send(` User with ID ${id} has been deleted.`);
}

export const patchUser = (req, res, next) => {
    const { id } = req.params;
    const {firstName, lastName, age} = req.body;

    const user = users.find((user) => user.id == id);

    if(firstName) user.firstName = firstName;
    if(lastName) user.lastName = lastName;
    if(age) user.age = age;

    res.send(`User with the ID ${id} has been updated.`);


}