const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db")

//middleware
app.use(cors());
app.use(express.json() )

//Routes

//create an Organisation
app.post("/organisations", async (req, res)  => {
  try {
    const { org_name, org_created_on, org_address, org_phone, org_billing_email } = req.body;
    const newOrganisation = await pool.query(
      "INSERT INTO organisations (org_name, org_created_on, org_address, org_phone, org_billing_email) VALUES($1, $2, $3, $4, $5) RETURNING *",
    [org_name, org_created_on, org_address, org_phone, org_billing_email]
    );
    res.json(newOrganisation.rows[0]);
  } catch (err) {
    console.error(err.message)
  }
});

//get All Organisations
app.get("/organisations", async(req,res)=> {
  try {
    const allOrganisations = await pool.query("SELECT * FROM organisations");
    res.json(allOrganisations.rows)
  } catch (err) {
    console.error(err.message)
  }
}); 

//get one todo
app.get("/organisations/:id", async(req,res)=> {
  try {
    const {id} = req.params;
    const organisation = await pool.query("SELECT * FROM organisations WHERE org_id = $1", [id]);
    res.json(organisation.rows[0])
  } catch (err) {
    console.error(err.message)
  }
}); 

//Update a todo

app.put("/organisations/:id", async(req,res)=> {
  try {
    const {id} = req.params;
    const { org_name, org_created_on, org_address, org_phone, org_billing_email } = req.body;
    const updateOrganisation = await pool.query("UPDATE organisations SET org_name = $1, org_created_on = $2, org_address = $3, org_phone = $4, org_billing_email = $5 WHERE org_id = $6", 
    [org_name, org_created_on, org_address, org_phone, org_billing_email, id]);
    res.json("org was updated")
  } catch (err) {
    console.error(err.message)
  }
}); 

//Delete one Organisation
app.delete("/organisations/:id", async(req,res)=> {
  try {
    const {id} = req.params;
    const deleteOrganisation = await pool.query("DELETE FROM organisations WHERE org_id = $1", [id]);
    res.json("Org Deleted")
  } catch (err) {
    console.error(err.message)
  }
}); 

app.listen(5001, () => {
  console.log("server has started on port 5001")
});