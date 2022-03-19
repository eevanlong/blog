import request from '~/utils/request';
const { data } = await request('/menu/findAll').get().json()

export default () => {
  return data
}
