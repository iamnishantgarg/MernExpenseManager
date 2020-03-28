const Transcation = require("../models/transcation");

exports.getTranscation = async (req, res, next) => {
  try {
    const transcations = await Transcation.find({});
    return res.status(200).json({
      success: true,
      count: transcations.length,
      data: transcations
    });
  } catch (error) {
    // console.log(`fetching error: ${error}`.red);
    return res.status(500).json({
      success: false,
      error: "server error"
    });
  }
};
exports.addTranscation = async (req, res, next) => {
  try {
    const { text, amount } = req.body;
    // console.log(req.body.text);

    const transcation = await Transcation.create(req.body);
    return res.status(201).json({
      success: true,
      data: transcation
    });
  } catch (error) {
    console.log(`AddTranscation error:${error}`.red);

    return res.status(500).json({ success: false, data: "Server error" });
  }
};
exports.deleteTranscation = async (req, res, next) => {
  try {
    const id = req.params.id;
    const transcation = await Transcation.findById(id);
    if (!transcation) {
      return res.status(404).json({
        success: false,
        error: "No transcation found"
      });
    }
    await transcation.remove();
    return res.status(200).json({
      success: true,
      data: {}
    });
  } catch (error) {
    console.log(`deleteTranscation error:${error}`.red);
    return res.status(500).json({
      success: false,
      error: "server error"
    });
  }
  //   return res.send("deleteTranscation");
};
