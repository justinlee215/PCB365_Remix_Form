import {useParams} from 'remix'

export default function FormItem() {
  const params = useParams()

  return (
    <>
        <h1>Form {params.formId} 각각 다른 폼 하나 하나</h1>
    </>
  )
}
