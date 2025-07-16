export default function ConversionPage({ 
  params 
}: {
  params: { route: string[] }
}) {
  console.log('Route segments:', params.route)
  
  // Parse the route segments manually
  const routeString = params.route?.join('/')
  
  // Check if it matches the "city-to-city" pattern
  if (params.route && params.route.length === 1) {
    const fullRoute = params.route[0]
    const match = fullRoute.match(/^(.+)-to-(.+)$/)
    
    if (match) {
      const [, fromCity, toCity] = match
      
      return (
        <div className="p-8">
          <h1 className="text-2xl font-bold">✅ Route Parsed Successfully!</h1>
          <p>From: {fromCity}</p>
          <p>To: {toCity}</p>
          <p>Full route: {fullRoute}</p>
          <p>Route segments: {JSON.stringify(params.route)}</p>
        </div>
      )
    }
  }
  
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold">❌ Route Not Recognized</h1>
      <p>Route segments: {JSON.stringify(params.route)}</p>
      <p>Expected format: city-to-city</p>
    </div>
  )
}
