export default routesConfig;

/** @ngInject */
function routesConfig($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise('/');

	$stateProvider
		.state('home', {
			url: '/',
			views: {
				'': { component: 'home' },
				'header@home': {component: 'header'}
			}
		})
		.state('about', {
			url: '/about',
			views: {
				'': { component: 'about' },
				'header@about': {component: 'header'}
			}
		});

}
