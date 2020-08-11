module.exports = {

    async login(req, res) {
        const response = {
            success: false,
            data: ""
        }

        return res.json(response)
    },


    async register(req, res) {
        const response = {
            success: false,
            data: ""
        }
        
        return res.json(response)
    }

}