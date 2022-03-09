const { PrismaClient } = require('@prisma/client')
const db = new PrismaClient()

async function seed() {
    await Promise.all(
        CanadaCustomsInvoiceSample().map(invoice => {
            return db.CanadaCusomsInvoice.create({ data: invoice})
        })
    )
}

function CanadaCustomsInvoiceSample() {
    return [
        {
            shipperName: 'AB Company',
            shipperContact: 'David Michael',
            shipperAddress: '7778 12th st Austin Toronto ON',
            shipperPhone: '6048077782'
        },
        {
          shipperName: 'BC Company',
          shipperContact: 'Mike Michael',
          shipperAddress: '2323 AB st Burnaby BC',
          shipperPhone: '6048077782'
      },
      {
        shipperName: 'CD Company',
        shipperContact: 'David Trump',
        shipperAddress: '3737 Howe st Vancouver BC',
        shipperPhone: '6048077782'
    },
    {
      shipperName: 'AB Company',
      shipperContact: 'David Michael',
      shipperAddress: '7778 12th st Austin Toronto ON',
      shipperPhone: '6048077782'
  },
  {
    shipperName: 'AB Company',
    shipperContact: 'David Michael',
    shipperAddress: '7778 12th st Austin Toronto ON',
    shipperPhone: '6048077782'
},
{
  shipperName: 'AB Company',
  shipperContact: 'David Michael',
  shipperAddress: '7778 12th st Austin Toronto ON',
  shipperPhone: '6048077782'
},
{
  shipperName: 'AB Company',
  shipperContact: 'David Michael',
  shipperAddress: '7778 12th st Austin Toronto ON',
  shipperPhone: '6048077782'
},
    ]
}

seed()