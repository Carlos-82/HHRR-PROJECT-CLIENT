import axios from "axios";

class Contracts {
  constructor() {
    this.contract = axios.create({
      baseURL: process.env.REACT_APP_API_URI + "/admin",
      withCredentials: true,
    });
  }

  contractCreate(id, newContract) {
    return this.contract
      .post(`/employee/${id}/contract/create`, newContract)
      .then(({ data }) => data);
  }

  oneContract({ employeeId, contractId }) {
    return this.contract
      .get(`/employee/${employeeId}/contract/${contractId}`)
      .then(({ data }) => data);
  }

  editContract(employeeId, contractId, updatedContract) {
    return this.contract
      .get(`/employee/${employeeId}/contract/${contractId}`, updatedContract)
      .then(({ data }) => data);
  }

  deleteContract({ employeeId, contractId }) {
    return this.contract
      .delete(`/employee/${employeeId}/contract/${contractId}`)
      .then(({ data }) => data);
  }
}

const contracts = new Contracts();

export default contracts;
