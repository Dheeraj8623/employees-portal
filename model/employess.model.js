module.exports=(Sequelize,sequelize)=>{
    const model = sequelize.define("employees", {
        id:{
          type: Sequelize.INTEGER,
          primaryKey:true,
          autoIncrement:true,
          allowNull:false
        },
        name: {
          type: Sequelize.STRING(100),
          allowNull: false,
        },
        mobile: {
          type: Sequelize.STRING(12),
          allowNull: false,
        },
        email: {
          type: Sequelize.STRING(150),
          allowNull: false,
          unique: true,
        },
        password: {
          type: Sequelize.STRING(500),
          allowNull: false,
        },
        isActive: {
          type: Sequelize.BOOLEAN,
          defaultValue: true
        },
        profileImg: {
          type: Sequelize.STRING(500),
        allowNull: true,
        },
        gender: {
            type: Sequelize.STRING(500),
          allowNull: true,
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