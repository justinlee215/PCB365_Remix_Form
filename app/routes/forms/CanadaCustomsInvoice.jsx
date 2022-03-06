import { Link, redirect } from 'remix'
import { db } from '~/utils/db.server'

export const action = async ({request}) => {
    const data = await request.formData()

    console.log(data)
    console.log(data._fields)
    console.log(JSON.stringify(data._fields.shipperName))

    const shipperName = data.get("shipperName")
    const shipperContact = data.get("shipperContact")

    const fields = { shipperName, shipperContact}
    // console.log("Shipper Name: ", shipperName)

    const post = await db.canadaCusomsInvoice.create({data: fields})
    console.log("post: ", fields)

    return redirect(`/forms/${post.id}`)
}

export default function CanadaCustomsInvoice() {
  return (
    <div className='form'>
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

