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
            shipperContact: 'David Michael'
        },
        {
            shipperName: 'BC Company',
            shipperContact: 'Mike Lee'
        },
        {
            shipperName: 'CD Company',
            shipperContact: 'Jia Bonnet'
        }
    ]
}

seed()