const messages = [
  { title: 'Qué bonito tenerte', image: 'assets/foto-1.jpeg', phrase: 'Me encanta estar contigo, reírnos de cualquier cosa y abrazarte sin mirar la hora. De todos mis momentos favoritos, muchos empiezan con una sonrisa tuya.' },
  { title: 'Mi lugar favorito', image: 'assets/foto-2.jpeg', phrase: 'No importa mucho a dónde vayamos si voy contigo. A tu lado hasta un día sencillo se vuelve un recuerdo que quiero guardar para siempre.' },
  { title: 'Más momentos juntos', image: 'assets/foto-3.jpeg', phrase: 'Quiero seguir llenando nuestra historia de salidas, fotos y abrazos. Todavía nos quedan muchos lugares por conocer y muchas razones para sonreír juntos.' },
  { title: 'Cuenta conmigo', image: 'assets/foto-4.jpeg', phrase: 'Quiero escucharte cuando tengas mucho que contar y abrazarte cuando no tengas ganas de hablar. En los días bonitos y en los difíciles, quiero estar cerquita de ti.' },
  { title: 'Cómo te amo ❤️', phrase: 'Te amo en las risas, en los abrazos y en esos ratitos en los que no hacemos nada, pero estamos juntos. Qué bonito coincidir contigo; quiero seguir eligiéndote y cuidando lo nuestro cada día.' }
];
const modal = document.querySelector('#love-modal');
const photo = document.querySelector('#modal-image');
document.querySelectorAll('[data-memory]').forEach(button => {
  button.addEventListener('click', () => {
    const message = messages[Number(button.dataset.memory)];
    document.querySelector('#modal-title').textContent = message.title;
    document.querySelector('#modal-phrase').textContent = message.phrase;
    photo.hidden = !message.image;
    if (message.image) { photo.src = message.image; photo.alt = 'Un recuerdo de nosotros juntos'; }
    else { photo.removeAttribute('src'); photo.alt = ''; }
    modal.classList.toggle('text-only', !message.image);
    modal.showModal();
  });
});
document.querySelector('.close-modal').addEventListener('click', () => modal.close());
modal.addEventListener('click', event => {
  const rect = modal.getBoundingClientRect();
  if (event.target === modal && (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom)) modal.close();
});
