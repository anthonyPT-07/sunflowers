// Una recarga del jardín devuelve a la bienvenida.
(() => {
  const navigation = performance.getEntriesByType('navigation')[0];
  if (navigation && navigation.type === 'reload') {
    window.location.replace('index.html');
  }
})();
