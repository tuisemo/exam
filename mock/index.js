import Mock from 'mockjs'

Mock.setup({
  timeout: 800 // 设置延迟响应，模拟向后端请求数据
})

Mock.mock('/api/products/list', 'get', {
  'data|6-20': [
    {
      'id': '@id',
      'pic': `https://picsum.photos/200/140?random=@integer`,
      'num|0-50': 0,
      'name': '@cname',
      'des': '@csentence(5, 19)',
      'price|0-50': 6
    }
  ]
})
