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
        <h1>Form {data.shipperName} 각각 다른 폼 하나 하나</h1>
        <p>{data.shipperContact}</p>
        <div>
          <form method="POST">
            <input type="hidden" name="_method" value="delete"/>
            <button>Delete</button>  
          </form>
        </div>
        <Link to="/forms">Back</Link>
    </div>
  )
}
