const express = require('express');
const app = express();


let caliber25 = 0;
let caliber30 = 0;
let caliber50 = 0;
let shipstatus = 'empty';
let ready = false;
let fullAmmo = 0;


app.get('/rocket', (req,res) => {
 res.json({
   caliber25: caliber25,
   caliber30: caliber30,
   caliber50: caliber50,
   shipstatus: shipstatus,
   ready: ready
 })
});

const shipCheck = () => {
  if (fullAmmo < 12500) {
    shipstatus = (100 * fullAmmo) / 12500 + '%';
    ready = false;
  } else if (fullAmmo == 12500) {
    shipstatus = 'full';
    ready = true;
  } else if (fullAmmo > 12500) {
    shipstatus = 'overloaded';
    ready = false;
  }
}

app.get('/rocket/fill', (req,res) => {
  const {caliber, amount} = req.query;
  if (caliber && amount) {
    fullAmmo += parseInt(amount);
    if (caliber == .25) {
      caliber25 += amount;
      shipCheck();
    }
    if (caliber == .50) {
      caliber30 += amount;
      shipCheck();
    }
    if (caliber == .30) {
      caliber50 += amount;
      shipCheck();
    }   
    res.json({
      received: caliber,
      amount: amount,
      shipstatus: shipstatus,
      shipammo: fullAmmo,
      ready: ready
    })
  } else {
    res.json({error: 'wrong query'})
  }
 });



module.exports = app;