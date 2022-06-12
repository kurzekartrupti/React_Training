import axios from "axios";

const COURSESURL="http://localhost:3001/courses";
const USERURL="http://localhost:3002/users";

function getAllCourses(){
    return axios.get(COURSESURL);
}

function addUser(data){
    return axios.post(USERURL,data);
}

function getAllUsers(){
    return axios.get(USERURL);
}
export {getAllCourses, addUser, getAllUsers};