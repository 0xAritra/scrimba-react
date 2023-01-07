// upto React 17
// ReactDOM.render(<h1>Hello, React</h1>, document.getElementById("root"))

// from React 18+
const root = ReactDOM.createRoot(document.getElementById("root"))
// root.render(<h1>Hello, React</h1>)

function Header() {
  return <h1 className="header">Hello, React</h1>
}

// adding the same h1 imperatively!
// const h1 = document.createElement("h1")
// h1.textContent = "hello react"
// h1.classList.add("header")
// document.getElementById("root").appendChild(h1)

const Footer = () => {
  return (
    <footer>
      <span>&copy; 2023</span>
    </footer>
  )
}

const JSX = <h2>yoo! hi from JSX</h2>
console.log(JSX)

root.render(
  <div>
    {/* Header Component - Composable */}
    <Header />
    <ul>
      <li>hi</li>
      <li>list</li>
    </ul>
    {JSX}
    {/* Header Component - Composable */}
    <Footer />
  </div>
)
