import Axios from 'axios'

// Implementation: callCvrApi = () => getCVR(this.state.company).then(r => this.setState({ cvr: r.data.vat }));
export const getCVR = (companyName) => Axios.get(`https://cvrapi.dk/api?country=dk&search=${companyName}`);