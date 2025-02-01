let friends = ['Juan', 'Pedro', 'Pablo', 'Maria', 'Ana'];

const mostrarAmigos = () => {
  const list = document.getElementById('listaAmigos');
  const isList = list instanceof HTMLUListElement;
  if(!isList || list == null) return;
  list.innerHTML = '';
  for(let i = 0; i < friends.length; i++) {
    const friend = friends[i];
    list.innerHTML += `<li>${friend}</li>`;
  }
}

const agregarAmigo = () => {
  const input = document.getElementById('amigo');
  const isInput = input instanceof HTMLInputElement;
  if(!isInput || input == null) return;
  const friendName = input.value;
  if(friendName === '') {
    alert('Ingrese un nombre, por favor');
    return;
  }
  friends.push(friendName);
  input.value = '';
  mostrarAmigos();
}

const sortearAmigo = () => {
  const list = document.getElementById('resultado');
  const isList = list instanceof HTMLUListElement;
  if(!isList || list == null) return
  if(friends.length === 0) {
    alert('No hay amigos para sortear');
    return;
  }
  list.innerHTML = '';
  const amigoSorteado = friends[Math.floor(Math.random() * friends.length)];
  friends = friends.filter(friend => friend !== amigoSorteado);
  list.innerHTML = `<li>${amigoSorteado}</li>`;
  alert(`El amigo sorteado es: ${amigoSorteado}`);
  mostrarAmigos();
}
