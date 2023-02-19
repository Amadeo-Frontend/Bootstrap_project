$(document).ready(function () {
  $("#telefone").mask("(00) 0000-0000");
  $("#email").mask("A", { translation: { A: { pattern: /[\w\.@]/ } } });
});
