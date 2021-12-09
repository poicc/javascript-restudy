const params = {
    name: 'localhost',
    port: '8080'
  }
  console.log(params)
  
  Object.freeze(params) // 冻结对象 params
  
  params.port = '9090' // 修改无效
  
  console.log(params)