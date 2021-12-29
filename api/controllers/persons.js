const sql = require('mssql');
const dbConfig = require('../database/config');

exports.persons = (req, res)=>{
	const {page, limit} = req.query;
	sql.connect(dbConfig).then(pool=>{
		//execute stored proc
		return pool.request()
		.input('PageNumber', sql.Int, parseInt(page))
		.input('RowCount', sql.Int, parseInt(limit))
		.output('TotalPersons', sql.Int)
		.execute('getPersons')
	}).then((result, err)=>{
		if (err){
			console.log(err);
			res.status(500).json({message: "We could not fetch the persons. Internal server error."});
		}
		else{
			let thePersons = [];
			let total = 0;
			//get the returned persons
			for (let i = 0; i < result.recordset.length; i++){
				let record = result.recordset[i];
				thePersons.push({
					id: record.id,
					firstName: record.firstName,
					lastName: record.lastName,
					phone: record.phone,
				});
			}
			total = result.output.TotalPersons;
			//return the response
			res.json({
				total,
				persons: thePersons,
			});
		}
	}).catch(err=>{
		console.log(err);
		res.status(500).json({message: "We could not fetch the persons. Server error."});
	});
};