
function init(app) {
  app.get('/test', (req, res) => {
    res.send('hola');
  });
}

export default { init };