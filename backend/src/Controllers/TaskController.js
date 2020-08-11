const connection = require('../database/connection')

module.exports = {

    async create(req, res) {
        const response = {
            success: false,
            data: ""
        }

        const { lista_id, title } = req.body;

        const [result] = await connection.query(`INSERT INTO tarefa VALUES (DEFAULT, '${lista_id}', '${title}', 'A iniciar', NOW(), NOW())`);

        if(result > 0)
            response.success = true;


        return res.json(response)
    },

    async list(req, res) {
        const response = {
            success: false,
            data: ""
        }

        const [result] = await connection.query("SELECT * FROM tarefa");
        // console.log(result)

        if(!!result.length)
            response.success = true;

        response.data = result;

        return res.json(response)
    },

    async update(req, res) {
        const response = {
            success: false,
            data: ""
        }

        const { id, title, status } = req.body;

        const [result] = await connection.query(`UPDATE tarefa SET title='${title}', status='${status}' WHERE id=${id}`);
        console.log(result)

        let { affectedRows } = result
        if(affectedRows > 0)
            response.success = true;
        
        return res.json(response)
    },

    async delete(req, res) {
        const response = {
            success: false,
            data: ""
        }
        
        const { id } = req.body;

        const [result] = await connection.query(`DELETE FROM tarefa WHERE id=${id}`);

        let { affectedRows } = result
        if(affectedRows > 0)
            response.success = true;
    

        return res.json(response)
    }

}