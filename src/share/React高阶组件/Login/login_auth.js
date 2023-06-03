function loginAuth(X) {
  return props => {
    // 从本地获取JWT
    const token = localStorage.getItem('token')
    if (token) {
      return <X {...props} />
    } else {
      return <h2>请先登录</h2>
    }
  }
}

export default loginAuth