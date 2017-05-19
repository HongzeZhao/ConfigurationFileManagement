export default class EditController {
    constructor(apiService) {
        console.log('edit controller loaded..');
        let vm = this;
        apiService.getPopAdjustDataPromise().then((data) => {
            vm.gridOptions = {
                data: data
            };
        });
    }
}
EditController.$inject = ['apiService'];