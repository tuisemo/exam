import request from '@/utils/request'
const api = {
  getProductsList (data = {}) {
    return request({
      url: '/api/products/list',
      method: 'get',
      params: data
    })
  }
}
export default api
