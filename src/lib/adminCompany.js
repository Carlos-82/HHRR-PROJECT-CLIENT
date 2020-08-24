import axios from "axios";

//Se crean los servicios para importar los metods del server
class Company {
  constructor() {
    this.company = axios.create({
      baseURL: "http://localhost:4000/admin",
      withCredentials: true,
    });
  }

  getCompany() {
    return this.company.get("/company").then(({ data }) => data);
  }

  createCompany(newCompany) {
    return this.company.post("/company/create", newCompany);
  }

  editCompany(id, companyEdit) {
    return this.company
      .patch(`/company/${id}`, companyEdit)
      .then(({ data }) => data);
  }
}

const company = new Company();

export default company;
