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

    const post = await db.USCusomsInvoice.create({data: fields})
    console.log("post: ", fields)

    return redirect(`/forms/${post.id}`)
}

export default function USCustomsInvoice() {
  return (
    <div className='form'>
        <h2>US Customs Invoice</h2>
        <section>
          <form method="POST" className="form">
              <fieldset>
                <legend className='fieldsetLegend'><span className="sectionNum">1</span>SHIPPER</legend>
                <div className="form-control">
                    <label htmlFor="shipperName">Shipper Name</label>
                    <input type="text" name="shipperName" id="shipperName"/>
                </div>
                <div className="form-control">
                    <label htmlFor="shipperContact">Shipper Contact</label>
                    <input type="text" name="shipperContact" id="shipperContact"/>
                </div>
                <div className="form-control">
                    <label htmlFor="shipperPhone">Shipper Phone</label>
                    <input type="tel" name="shipperPhone" id="shipperPhone"/>
                </div>
                <div className="form-control">
                    <label htmlFor="shipperAddress">Shipper Address</label>
                    <input type="text" name="shipperAddress" id="shipperAddress"/>
                </div>
              </fieldset>
              <button type="submit" className="button">
                  Submit
              </button>
          </form>
        </section>
    </div>
  )
}

