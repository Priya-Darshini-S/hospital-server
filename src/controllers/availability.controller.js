const express = require("express");
const Availability = require("../models/availability.model");

const router = express.Router();


router.post("/", async (req, res) => {
    try {
      const avails = await Availability.create(req.body);
  
      return res.status(201).send(avails);
    } catch (e) {
      return res.status(500).json({ message: e.message, status: "Failed" });
    }
  });

router.get("/", async (req, res) => {
    try{
        const availability = await Availability.find().lean().exec();
        return res.status(201).send({availability});
    }catch(e){
        return res.status(500).json({message: e.message, status: "Failed"});
    }
})

router.get("/:id", async (req, res) => {
    try{
        const availability = await Availability.findById(req.params.id).lean().exec();
        return res.status(201).send(availability);
    }catch(e){
        return res.status(500).json({message: e.message, status: "Failed"});
    }
});

router.patch("/:id", async (req, res) => {
    try{
        const availability = await Availability.findByIdAndUpdate(req.params.id, req.body, {
          new: true,  
        }).lean().exec();
        return res.status(201).send(availability);
    }catch(e){
        return res.status(500).json({message: e.message, status: "Failed"});
    }
});

router.delete("/:id", async (req, res) => {
    try{
        const availability = await Availability.findByIdAndDelete(req.params.id).lean().exec();
        return res.status(201).send(availability);
    }catch(e){
        return res.status(500).json({message: e.message, status: "Failed"});
    }
});

module.exports = router;

