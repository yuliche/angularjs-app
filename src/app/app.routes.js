export default routesConfig;

/** @ngInject */
function routesConfig($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise('/');

	$stateProvider
		.state('home', {
			url: '/',
			views: {
				'main@': 'home'
			}
		})
		.state('about', {
			url: '/about',
			views: {
				'main@': 'about'
			}
		});

}
