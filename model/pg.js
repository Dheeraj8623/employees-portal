
const Sequelize = require('sequelize');

const sequelize = new Sequelize('final_project', 'postgres', '123', {
    host: 'localhost',
    dialect:   'postgres' 
  });

  sequelize.authenticate().then(()=>{
      console.log("pg database connection established");

  }).catch(err=>{ console.log("pg database connection NOT established",err.message);})

  const db ={};
  db.Sequelize=Sequelize;
  db.sequelize=sequelize;
  db.employees =require('./employess.model')(Sequelize,sequelize)
  db.department =require('./department.model')(Sequelize,sequelize)
  db.dept_manager =require('./dept_manager.model')(Sequelize,sequelize)
  db.project =require('./project.model')(Sequelize,sequelize)
  db.salaries =require('./salaries.model')(Sequelize,sequelize)


  db.department.hasMany(db.employees,{foreignKey:'dept_id'})
  db.dept_manager.hasMany(db.employees,{foreignKey:'mang_id'})
  db.project.hasMany(db.employees,{foreignKey:'project_id'})
  db.salaries.hasMany(db.employees,{foreignKey:'salary_id'})

  db.employees.belongsTo(db.department,{foreignKey:'dept_id'})
  db.employees.belongsTo(db.dept_manager,{foreignKey:'mang_id'})
  db.employees.belongsTo(db.project,{foreignKey:'project_id'})
  db.employees.belongsTo(db.salaries,{foreignKey:'salary_id'})
 

  module.exports=db