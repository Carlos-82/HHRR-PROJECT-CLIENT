import axios from "axios";

//Se crean los servicios para importar los metods del server
class Employee {
  constructor() {
    this.company = axios.create({
      baseURL: "http://localhost:4000/user",
      withCredentials: true,
    });
  }

  employeeProfile(userId) {
    return this.user.get(`/${userId}`).then(({ data }) => data);
  }

  editProfile(userId, editedProfile) {
    return this.user.get(`/${userId}`, editedProfile).then(({ data }) => data);
  }
}

const employee = new Employee();

export default employee;
