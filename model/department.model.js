module.exports=(Sequelize,sequelize)=>{
    const model = sequelize.define("department", {
        dept_id:{
          type: Sequelize.INTEGER,
          primaryKey:true,
          autoIncrement:true,
          allowNull:false
        },
        dept_name: {
          type: Sequelize.STRING(100),
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