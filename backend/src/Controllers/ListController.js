const connection = require('../database/connection')

module.exports = {

    async create(req, res) {
        const response = {
            success: false,
            data: ""
        }

        const { user_id, title } = req.body;

        const [result] = await connection.query(`INSERT INTO lista VALUES (DEFAULT, '${user_id}', '${title}', NOW(), NOW())`);

        if(result > 0)
            response.success = true;


        return res.json(response)
    },

    async delete(req, res) {
        const response = {
            success: false,
            data: ""
        }
        
        const { id } = req.body;

        const [result] = await connection.query(`DELETE FROM lista WHERE id=${id}`);

        let { affectedRows } = result
        if(affectedRows > 0)
            response.success = true;
    

        return res.json(response)
    }

}