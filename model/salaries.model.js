module.exports=(Sequelize,sequelize)=>{
    const model = sequelize.define("salaries", {
        salary_id:{
          type: Sequelize.INTEGER,
         primaryKey:true,
          autoIncrement:true,
          allowNull:false
        },
        salary : {
          type: Sequelize.INTEGER(1200),
          allowNull: false,
        },


        isActive: {
          type: Sequelize.BOOLEAN,
          defaultValue: true
        },

      },
      {
      freezeTableName: true,
      // timestamps: false,
      //paranoid: false,
      //createdAt: 'created_at',
      //updatedAt: 'updated_at',
      });
    
      return model;
    };