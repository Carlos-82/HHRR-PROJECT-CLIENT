import axios from "axios";

class Contracts {
  constructor() {
    this.contract = axios.create({
      baseURL: process.env.REACT_APP_API_URI + "/admin",
      withCredentials: true,
    });
  }

  contractCreate({ employeeId, newContract }) {
    return this.contract
      .post(`/employee/${employeeId}/contract/create`, newContract)
      .then(({ data }) => data);
  }

  oneContract({ employeeId, contractId }) {
    return this.contract
      .get(`/employee/${employeeId}/contract/${contractId}`)
      .then(({ data }) => data);
  }

  editContract({ employeeId, contractId, updatedContract }) {
    return this.contract
      .patch(
        `/employee/${employeeId}/contract/${contractId}/editContract`,
        updatedContract
      )
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
