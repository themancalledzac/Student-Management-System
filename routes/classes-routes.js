
const db = require("../models");
const router = express.Router();
var express = require("express");


    route.get("/api/class", function (req
        , res) {
        if (!req.user) {
          // The user is not logged in, send back an empty object
          res.json({});
        } else {
          // Here we add an "include" property to our options in our findOne query
          // We set the value to an array of the models we want to include in a left outer join
          // In this case, just db.Post
          db.Classes.findAll({
           
          }). then(function(dbClasses) {
                res.json(dbClasses);
              });
        }
      });

  /* -------------------------------------------------------------------------- */
