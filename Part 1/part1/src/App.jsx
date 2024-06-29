const App = () => {
  const now = new Date()
  const a = 10
  const b = 20
  console.log(now,a+b)

  return (
    <div>
      <p>Hola mundo, es {now.toString()}</p>
      <p>
        {a} mas {b} es {a + b}
      </p>
    </div>
  )
}

export default App