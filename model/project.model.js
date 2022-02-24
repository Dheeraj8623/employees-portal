module.exports=(Sequelize,sequelize)=>{
    const model = sequelize.define("project", {
        project_id:{
          type: Sequelize.INTEGER,
          primaryKey:true,
          autoIncrement:true,
          allowNull:false
        },
        project_name: {
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