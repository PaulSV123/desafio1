import axios from "axios";

const url='https://jsonplaceholder.typicode.com/users';

export const DataIngreso = async(id) => {
    const { data } = await axios.get(`${url}/${id}`);
    console.log(data);

    return{
        id: data.id,
        name: data.name,
        email: data.email,
        address: data.address.city,
    }
}