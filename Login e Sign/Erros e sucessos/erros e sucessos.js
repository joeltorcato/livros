// Função para mostrar mensagens de erro ou sucesso
function mostrarMensagem(mensagem, tipo = 'erro') {
  let box = document.getElementById('mensagem-box');
  if (!box) {
    box = document.createElement('div');
    box.id = 'mensagem-box';
    box.style.position = 'fixed';
    box.style.top = '32px';
    box.style.left = '50%';
    box.style.transform = 'translateX(-50%)';
    box.style.zIndex = '9999';
    box.style.minWidth = '280px';
    box.style.maxWidth = '90vw';
    box.style.padding = '16px 24px';
    box.style.borderRadius = '10px';
    box.style.fontFamily = 'Montserrat, sans-serif';
    box.style.fontSize = '15px';
    box.style.fontWeight = '500';
    box.style.boxShadow = '0 4px 24px rgba(0,0,0,0.10)';
    box.style.textAlign = 'center';
    document.body.appendChild(box);
  }
  box.textContent = mensagem;
  box.style.background = tipo === 'sucesso' ? '#fff' : '#fff';
  box.style.color = tipo === 'sucesso' ? '#111' : '#c00';
  box.style.border = tipo === 'sucesso' ? '1px solid #111' : '1px solid #c00';
  box.style.display = 'block';
  setTimeout(() => {
    box.style.display = 'none';
  }, 4000);
}