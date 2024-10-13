require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.PORT

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/kamal', (req, res) => {
  res.send('Hello kamal!')
})
app.get('/h1', (req, res) => {
  res.send('<h1> hello kps</h1>')
})
const jsondata = {
  "hospitalId": "hos_1A3D31",
 "billId": "bill_20241013172155744",
 "billingDate_time": "2024-10-13T22:51:55.731",
 "billing": {
     "roomCharges": {
         "type": "General",
         "dailyRate": 1500,
         "days": 11,
         "totalRoomCharge": 16500
     },
     "consultationCharges": {
         "visits": 0,
         "ratePerVisit": 0,
         "totalConsultationCharge": 0
     },
     "services": [],
     "medicines": [],
     "procedures": [
         {
             "name": "Heart transplant",
             "charge": 285660
         },
         {
             "name": "Consultation- OPD",
             "charge": 350
         },
         {
             "name": "Consultation- for Inpatients",
             "charge": 350
         },
         {
             "name": "Dressings of wounds",
             "charge": 300
         },
         {
             "name": "Suturing of wounds with local anaesthesia",
             "charge": 124
         },
         {
             "name": "Aspiration Plural Effusion - Diagnostic",
             "charge": 700
         }
     ],
     "taxes": {
         "gst": 15199.2,
         "otherTaxes": 0
     },
     "paymentMethod": "Cash",
     "insuranceCoverage": {
         "provider": "",
         "policyNumber": "",
         "coverageAmount": 0
     },
     "paymentStatus": "Pending",
     "subtotal": 303984,
     "totalBill": 319183.2,
     "patientPayable": 0
 },
 "finalAmount": 0,
 "ipdId": "670c01b37191ea4b2b71cb63"
}
app.get('/data', (req, res) => {
  res.json(jsondata)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})