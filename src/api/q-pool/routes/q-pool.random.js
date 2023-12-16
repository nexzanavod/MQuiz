module.exports = {
    routes: [
      {
        method: 'POST',
        path: '/question/random',
        handler: 'q-pool-random.getOne',
      }
    ]
  }