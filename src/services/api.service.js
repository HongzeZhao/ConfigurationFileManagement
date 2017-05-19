apiService.$inject = ['$q'];
export default function apiService($q)
{
    return {
        getPopAdjustDataPromise
    };

    function getPopAdjustDataPromise()
    {
        return $q.when([{
                    "firstName": "Cox",
                    "lastName": "Carney",
                    "company": "Enormo",
                    "employed": true
                },
                {
                    "firstName": "Lorraine",
                    "lastName": "Wise",
                    "company": "Comveyer",
                    "employed": false
                },
                {
                    "firstName": "Nancy",
                    "lastName": "Waters",
                    "company": "Fuelton",
                    "employed": false
                }
            ]);
    }
}