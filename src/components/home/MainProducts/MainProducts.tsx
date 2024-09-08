async function getProducts() {
  const response = await fetch(
    `${process.env.SHOPIFY_HOSTNAME}/admin/api/2023-10/products.json`,
    {
      headers: {
        'X-Shopify-Access-Token': process.env.SHOPIFY_API_KEY || '',
      },
    }
  )
  const data = await response.json()

  return data
}

export async function MainProducts() {
  const products = await getProducts()
  console.log(products)

  return (
    <section>
      <h1>MainProducts</h1>
    </section>
  )
}
