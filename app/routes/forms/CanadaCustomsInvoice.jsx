import { Link, redirect } from 'remix'

export const action = async ({request}) => {
    const data = await request.formData()

    console.log(data)
    console.log(data._fields)
    console.log(JSON.stringify(data._fields.shipperName))

    const shipperName = data.get("shipperName")

    console.log("Shipper Name: ", shipperName)

    //@todo - submit to database 

    return redirect('/forms/CanadaCustomsInvoice')
}

export default function CanadaCustomsInvoice() {
  return (
    <div>
        <h2>CanadaCustomsInvoice</h2>
        <form method="POST" className="form">
            <div className="form-control">
                <label htmlFor="shipperName">Shipper Name</label>
                <input type="text" name="shipperName" id="shipperName"/>
            </div>
            <div className="form-control">
                <label htmlFor="shipperContact">Shipper Contact</label>
                <input type="text" name="shipperContact" id="shipperContact"/>
            </div>
            <button type="submit" className="button">
                Submit
            </button>
        </form>
    </div>
  )
}

