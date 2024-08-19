const knex = require("knex")(require("../knexfile").development);

exports.UserAddMessage = async (req, res) => {
  const { UserMessage } = req.body;
  try {
    await knex("contact_form").insert({
      NATIONAL_ID: "2000000201",
      MESSAGE: UserMessage, //
      ADMIN_ID: false,
    });
    res.status(201).json({ message: "تمت إضافة رسالة بنجاح!" });
  } catch (error) {
    console.error("Error adding message:", error);
    res
      .status(500)
      .json({ error: "حدث خطأ أثناء إرسال الرسالة.", details: error.message });
  }
};

exports.getMessages = async (req, res) => {
  try {
    const Messages = await knex("contact_form").select("*");
    // تعديل أسماء الحقول لتتناسب مع الـ frontend
    const formattedMessages = Messages.map((msg) => ({
      M_Id: msg.Id, // افترض أن Id هو اسم العمود في قاعدة البيانات
      Message: msg.MESSAGE,
      admin: msg.ADMIN_ID, // افترض أن ADMIN_ID هو قيمة بولينية
    }));
    res.status(200).json(formattedMessages);
  } catch (error) {
    console.error("Error fetching messages:", error);
    res
      .status(500)
      .json({ error: "حدث خطأ أثناء جلب الرسائل.", details: error.message });
  }
};
