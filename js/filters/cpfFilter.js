angular.module("listaPessoal").filter("cpf", function () {
	return function (input) {
		
		
		
		if(input.length > 3) {
				 input = input.substring(0,3) + "." + input.substring(3);
		} 
			
		if(input.length > 7) {
				input = input.substring(0,7) + "." + input.substring(7);
		} 
		
		if(input.length > 11) {
				input = input.substring(0,11) + "-" + input.substring(11,13);
		} 
			
			
		return input;
			
		
		
		
	};
});