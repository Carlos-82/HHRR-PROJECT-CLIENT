import axios from "axios";

class Contracts {
  constructor() {
    this.company = axios.create({
      baseURL: "http://localhost:4000/admin",
      withCredentials: true,
    });
  }

  contractCreate(id, newContract) {
    return this.contract
      .post(`/employee/${id}/contract/create`, newContract)
      .then(({ data }) => data);
  }

  allContracts(id) {
    return this.contract
      .get(`/employee/${id}/contract`)
      .then(({ data }) => data.contract);
  }

  oneContract(employeeId, contractId) {
    return this.contract
      .get(`/employee/${employeeId}/contract/${contractId}`)
      .then(({ data }) => data);
  }

  editContract(employeeId, contractId, updatedContract) {
    return this.contract
      .get(`/employee/${employeeId}/contract/${contractId}`, updatedContract)
      .then(({ data }) => data);
  }

  deleteContract(employeeId, contractId) {
    return this.contract
      .delete(`/employee/${employeeId}/contract/${contractId}`)
      .then(({ data }) => data);
  }
}

const contracts = new Contracts();

export default contracts;
