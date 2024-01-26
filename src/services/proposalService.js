import http from "./httpService";

// rest data becuse we pass multi item
export default function changeProposalStatusApi({ id, ...data }) {
  return http.patch(`/proposal/${id}`, data).then(({ data }) => data.data);
}

// I don't pass {id} to this Fun becase in backend handle it
// if user Role = Admin =>pass All proposals and etc...
export function getProposalsApi() {
  return http.get("/proposals/list").then(({ data }) => data.data);
}

//   creat proposal request too see owner
export function createProposalsReqApi({ data }) {
  return http.post(`/proposal/add`, data).then(({ data }) => data.data);
}
