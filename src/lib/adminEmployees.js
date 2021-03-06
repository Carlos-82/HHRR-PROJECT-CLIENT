import axios from "axios";

class Employees {
  constructor() {
    this.user = axios.create({
      baseURL: process.env.REACT_APP_API_URI + "/admin",
      withCredentials: true,
    });
  }

  employeeCreate(newEmployee) {
    return this.user.post("/employee/create", newEmployee);
  }

  allContracts(id) {
    return this.user.get(`/employee/${id}/contract`).then(({ data }) => data);
  }

  employeeId(employeeId) {
    return this.user.get(`/employee/${employeeId}`).then(({ data }) => data);
  }

  employeesAll() {
    return this.user.get("/employees").then(({ data }) => data);
  }

  employeeEdit(id, employeeUpdated) {
    return this.user
      .patch(`/employee/${id}/editemployee`, employeeUpdated)
      .then(({ data }) => data);
  }

  employeeDelete(id) {
    return this.user
      .delete(`/employee/${id}`)
      .then(({ data }) => console.log(data));
  }
}

const employees = new Employees();

export default employees;
