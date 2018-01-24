/********************Formulario 2***********************************************/
(function() {
  var app = angular.module('formu-2',[]);

  app.controller('ControladorFiltros',function(){
    this.registros = registross;
    this.registro={registro};
    this.addRegistro= function(registro){
      registross.push(registro);
      this.registro={};
    };

});
})();
  var registross =[
      {
        nombre: "Carlos",
        apellido: "Rojas",
        telefono: 2321241,
        cargo: "conductor"} 
  ];
}/******************* Formulario 2*********************************************/
