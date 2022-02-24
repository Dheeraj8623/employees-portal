module.exports=(Sequelize,sequelize)=>{
    const model = sequelize.define("deptmanager", {
        mang_id:{
          type: Sequelize.INTEGER,
          primaryKey:true,
          autoIncrement:true,
          allowNull:false
        },
        deptmanager_name: {
          type: Sequelize.STRING(100),
          allowNull: false,
        },

        isActive: {
          type: Sequelize.BOOLEAN,
          defaultValue: false
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