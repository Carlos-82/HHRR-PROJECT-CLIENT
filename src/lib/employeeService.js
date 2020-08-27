import axios from "axios";

//Se crean los servicios para importar los metods del server
class Employee {
  constructor() {
    this.user = axios.create({
      baseURL: process.env.REACT_APP_API_URI + "/user",
      withCredentials: true,
    });
  }

  employeeContract(userId) {
    console.log(userId);
    return this.user.get(`/${userId}/contracto`).then(({ data }) => data);
  }

  employeeProfile(userId) {
    return this.user.get(`/${userId}`).then(({ data }) => data);
  }

  editProfile({ userId, editedProfile }) {
    return this.user
      .patch(`/${userId}/editProfile`, editedProfile)
      .then(({ data }) => data);
  }
}

const employee = new Employee();

export default employee;
