define({ "api": [
  {
    "type": "get",
    "url": "/simulate/incomingECG/:patientID/:practitionerID",
    "title": "Grab simulated ECG data from vital patch API and push through system.",
    "name": "simulateECG",
    "group": "Simulate",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "patientID",
            "description": "<p>Patient unique ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "practitionerID",
            "description": "<p>Practitioner unique ID.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./routes/simulate.js",
    "groupTitle": "Simulate"
  }
] });