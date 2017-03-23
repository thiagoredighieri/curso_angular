angular.module("listaPessoal").controller("detalhesContatoCtrl", function ($scope, $routeParams, contato) {

	$scope.contato = contato.data;
});