export default class HomeController {
    constructor($state) {
        this.$state = $state;
        this.name = 'okay!';
    }

    changeName() {
        this.$state.go('edit', {
            name: 'asd'
        });
    }
}
HomeController.$inject = ['$state']