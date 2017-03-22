angular.module("listaTelefonica").controller("listaTelefonicaCtrl", function ($scope, contatosAPI, estadosAPI, serialGenerator) {
	$scope.app = "Lista Telefonica";
	$scope.contatos = [];
	$scope.operadoras = [];
	$scope.contato = {
		data: -2208981600000
	};

	var carregarContatos = function () {
		contatosAPI.getContatos().success(function (data) {
			data.forEach(function (item) {
				item.serial = serialGenerator.generate();
			});
			$scope.contatos = data;
		}).error(function (data, status) {
			$scope.error = "Não foi possível carregar os dados!";
		});
	};

	var carregarEstados = function () {
		estadosAPI.getEstados().success(function (data) {
			$scope.estados = data;
		});
	};

	$scope.adicionarContato = function (contato) {
		contato.serial = serialGenerator.generate();
		contatosAPI.saveContato(contato).success(function (data) {
			delete $scope.contato;
			$scope.contatoForm.$setPristine();
			carregarContatos();
		});
	};
	$scope.apagarContatos = function (contatos) {
		$scope.contatos = contatos.filter(function (contato) {
			if (!contato.selecionado) return contato;
		});
	};
	$scope.isContatoSelecionado = function (contatos) {
		return contatos.some(function (contato) {
			return contato.selecionado;
		});
	};
	$scope.ordenarPor = function (campo) {
		$scope.criterioDeOrdenacao = campo;
		$scope.direcaoDaOrdenacao = !$scope.direcaoDaOrdenacao;
	};

	carregarContatos();
	carregarEstados();
});