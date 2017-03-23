angular.module("listaPessoal").controller("novoContatoCtrl", function ($scope, contatosAPI, serialGenerator, $location, estados) {
	$scope.estados = estados.data;

	$scope.adicionarContato = function (contato) {
		contato.serial = serialGenerator.generate();
		contatosAPI.saveContato(contato).success(function (data) {
			delete $scope.contato;
			$scope.contatoForm.$setPristine();
			$location.path("/contatos");
		});
	};
});