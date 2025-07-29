
function abrirCadastroCompleto() {
  document.getElementById("formularioCompleto").classList.remove("hidden");
  document.getElementById("listaEventos").classList.add("hidden");
  document.getElementById("buscaCliente").classList.add("hidden");
}
function visualizarEventosAgendados() {
  document.getElementById("listaEventos").classList.remove("hidden");
  document.getElementById("formularioCompleto").classList.add("hidden");
  document.getElementById("buscaCliente").classList.add("hidden");
}
function abrirBuscaCliente() {
  document.getElementById("buscaCliente").classList.remove("hidden");
  document.getElementById("listaEventos").classList.add("hidden");
  document.getElementById("formularioCompleto").classList.add("hidden");
}
function buscarClientePorNome() {
  alert("Busca de cliente...");
}
window.abrirCadastroCompleto = abrirCadastroCompleto;
window.visualizarEventosAgendados = visualizarEventosAgendados;
window.abrirBuscaCliente = abrirBuscaCliente;
window.buscarClientePorNome = buscarClientePorNome;
