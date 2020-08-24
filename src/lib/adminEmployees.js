import axios from "axios";

class Employees {
  constructor() {
    this.company = axios.create({
      baseURL: "http://localhost:4000/admin",
      withCredentials: true,
    });
  }

  employeeCreate(newEmployee) {
    return this.user
      .post("/employee/create", newEmployee)
      .then(({ data }) => data);
  }

  employeeId(employeeId) {
    return this.user.get(`/emplyee/${employeeId}`).then(({ data }) => data);
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
    return this.user.delete(`/employee/${id}`).then(({ data }) => data);
  }
}

const employees = new Employees();

export default employees;
