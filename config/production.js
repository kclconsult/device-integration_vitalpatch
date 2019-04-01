module.exports = {

  dbConfig: {
    username: "user",
    password: "password",
    database: "database",
    host: "device-integration_vitalpatch_mysql_1",
    dialect: "mysql"
  },

  sensor_to_fhir: {
    URL: "http://sensor-fhir-mapper_webapp-queue_1:3002"
  },

  message_queue: {
    ACTIVE: true,
    HOST: "sensor-fhir-mapper_rabbit_1",
    NAME: "device-integration_vitalpatch-sensor-fhir-mapper"
  }

};