import Airtable from "airtable";

const base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base(
  "app9yQ4dAeYEvXQzV"
);

export default async function handle(req, res) {
  const { email, feedback } = req.body;

  console.log(email, feedback);

  if (!feedback) {
    res.writeHead(400, "No feedback was provided", {
      Location: "/",
    });
    res.end();
  }

  const records = await base("Conversion Site Feedback").create([
    { fields: { Feedback: feedback, Email: email } },
  ]);

  records.forEach(function (record) {
    console.log(record.getId());
  });

  res.writeHead(302, {
    Location: "/feedback-received",
  });

  res.end();
}
