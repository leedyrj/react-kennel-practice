
const apiController = Object.create({}, {

    getAllEmployees: {
        value: () => {
            return fetch("http://localhost:5002/employees")
                .then(e => e.json())
        }
    },
    getAllAnimals: {
        value: () => {
            return fetch("http://localhost:5002/animals")
                .then(e => e.json())
        }
    },
    getAllLocations: {
        value: () => {
            return fetch("http://localhost:5002/locations")
                .then(e => e.json())
        }
    },
    getAllOwners: {
        value: () => {
            return fetch("http://localhost:5002/owners")
                .then(e => e.json())
        }
    }

})

export default apiController