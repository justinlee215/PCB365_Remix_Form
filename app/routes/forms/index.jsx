import { useLoaderData } from "remix"

//serverside loading
export const loader = () => {
    const data = {
        forms: [
            {id: 1, title: 'form 1', body: 'This is form 1'},
            {id: 2, title: 'form 2', body: 'This is form 2'}
        ]
    }
    return data
}

export default function Form() {
    const { forms } = useLoaderData()

  return (
      <>
        <h2>메인에서ㅋ만 보여야 하는건 여기에: 폼들 리스트</h2>
        { forms.map(form => (
            <div key={form.id}>
                <p>{form.id} .{form.title}</p>
                <p>{form.body}</p>
            </div>
        ))}
      </>
  )
}


