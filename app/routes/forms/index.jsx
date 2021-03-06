import { Link, useLoaderData } from "remix"
import { db } from '~/utils/db.server'

//serverside loading
export const loader = async () => {
    const data = {
        forms: await db.canadaCusomsInvoice.findMany({
            take: 30,
            select: { id: true, shipperName: true, createdAt: true},
            orderBy: {createdAt: 'desc'}
        })
    }
    return data
}

export default function Form() {
    const { forms } = useLoaderData()

  return (
      <>
        <h2>My Forms</h2>
        <div className="cardBox">
            { forms.map(form => (
                <Link to={form.id} className="cardLink">
                    <div key={form.id} className="formItemCard">
                        <p>{form.shipperName}</p>
                        <p>{form.shipperContact}</p>
                        <p>{new Date(form.createdAt).toLocaleString()}</p>
                    </div>
                </Link>
            ))}
        </div>
      </>
  )
}


