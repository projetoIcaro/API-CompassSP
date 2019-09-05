const pg = require('pg')

const connectionString = 'postgres://xjdcmjmmgxodzh:9d1acaba3bc7c2f570e18c1f0e3385d57f8d1ea7af9f4145e39dd163614b8883@ec2-50-19-124-157.compute-1.amazonaws.com:5432/ddp6l0ms7ni1a5';
const pool = new pg.Pool({
	connectionString,
	ssl: true
});

const DaoToDb = (dao, params) => pool.query(dao, params)

module.exports = {DaoToDb};
