app.factory('Take2Service', function ($http) {
  return {
    getMany: function() {
      return $http.get('/api/take2');
    },
    postOne: function (task) {
      return $http.post('/api/take2', task)
    },
    getOne: function (id) {
      return $http.get(`/api/take2/${id}`)
    },
    editOne: function (task) {
      const id = task.id
      return $http.put(`api/take2/${id}`, task)
    },
    deleteOne: function (id) {
      return $http.delete(`api/take2/${id}`)
    }
   }
})
