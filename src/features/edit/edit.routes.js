routes.$inject = ['$stateProvider'];

export default function routes($stateProvider)
{
    $stateProvider.state('edit', {
        url: '/edit/:name',
        template: require('./edit.html'),
        controller: 'EditController',
        controllerAs: 'vm'
    });
}