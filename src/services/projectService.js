import http from "./httpService";

export default function getOwnerProjectsApi() {
  return http.get("/project/owner-projects").then(({ data }) => data.data);
}

export function removeProjectApi(id) {
  return http.delete(`/project/${id}`).then(({ data }) => data.data);
}

export function createProjectApi(data) {
  return http.post(`/project/add`, data).then(({ data }) => data.data);
}

export function editProjectApi({ id, newProject }) {
  return http
    .patch(`/project/update/${id}`, newProject)
    .then(({ data }) => data.data);
}

export function toggleProjectStatuseApi({ id, data }) {
  return http.patch(`/project/${id}`, data).then(({ data }) => data.data);
}
// get all proposals's project
export function getProjectApi(id) {
  return http.get(`/project/${id}`).then(({ data }) => data.data);
}

// get All projects to see freelancers
export function getProjectsApi(search) {
  return http.get(`/project/list${search}`).then(({ data }) => data.data);
}
