import { useParams, useLoaderData, redirect, Link } from 'remix'
import {db} from '~/utils/db.server'

export const loader = async ({request, params}) => {
  console.log("params: ", params)

  const data = await db.canadaCusomsInvoice.findUnique({
    where: { id: params.formId }
  })

  if (!data) throw new Error('Data not found')
  
  const post = {data}
  console.log('data loaded: ', data)
  return post
}

export const action = async ({ request, params }) => {
  const form = await request.formData()
    if (form.get('_method') === 'delete') {
      const post = await db.canadaCusomsInvoice.findUnique({
        where: { id: params.formId }
      })

      if (!post) {
        throw new Error('Data not found')
      }

      await db.canadaCusomsInvoice.delete({ where: { id: params.formId}})
      return redirect('/forms')
    }
}

export default function FormItem() {
  const { data } = useLoaderData()

  const params = useParams()

  return (
    <div>
        <h2>Form Detail: {data.shipperName} </h2>
        <div className="formDetail">
          <div className='formLine'><span className='lineTitle'>Shipper Name: </span>{data.shipperName}</div>
          <div className='formLine'><span className='lineTitle'>Shipper Contact: </span>{data.shipperContact}</div>
          <div className='formLine'><span className='lineTitle'>Shipper Phone: </span>{data.shipperPhone}</div>
          <div className='formLine'><span className='lineTitle'>Shipper Address: </span>{data.shipperAddress}</div>
          <br/>
          <div className='formLine'><span className='lineTitle'>Exporter Name: </span></div>
          <div className='formLine'><span className='lineTitle'>Exporter Contact: </span></div>
          <div className='formLine'><span className='lineTitle'>Exporter Phone: </span></div>
          <div className='formLine'><span className='lineTitle'>Exporter Address: </span></div>
          

        </div>
        <div>
          <form method="POST">
            <input type="hidden" name="_method" value="delete"/>
            <button className='button' style={{ backgroundColor: "rgb(231, 43, 74)"}}>Delete</button>  
          </form>
        </div>
        <Link to="/forms">Back</Link>
    </div>
  )
}
