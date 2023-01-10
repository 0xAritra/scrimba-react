# Scrimba - React

## 1

### [first_react](./first_react/)

[deployed link](https://ari-react-scrimba-first.netlify.app/)

using CDN to add React, ReactDOM and Babel

### Why?

- Composable (Components)
- Declarative - does stuff for us (e.g - adding an h1 to a parent element) - checkout [first_react](./first_react/)

### JSX - JavaScript XML

- returns only 1 element
- returns an object

### Custom Components

Functions can be reused!

```
page()
<Page />
```

### Parent / Child Components

```
<Page />
  <Header />
  <MainContent />
  <Footer />
```

Each Component in separate folder

### Vite app

Use Vite >>> CRA

### [project-1-info-site](./project-1-info-site/info-react/)

[deployed link](https://ari-scrimba-react-facts.netlify.app/)

### [solo-business-card](./solo-business-card/business-card/)

[deployed link](https://ari-react-business-card.netlify.app/)

---

## 2

### Data-driven

props
array

- ** AirBNB clone ** [airbnb-clone](./airbnb-clone/airbnb-clone/)

* reusable Card
  - props
  - destructuring props
  - conditional rendering (props.setup ? : )

- JS inside JSX

- render array & map()
  Example:

```
return (
  <div>
    {colors.map(color => <h3>{color}</h3>)}
  </div>
)
```

- passing objects as props
- spreading objects while passing as props

```
<Card
  key={cardData.id}
  // data={cardData}
  {...cardData}
/>
```

[deployed link](https://ari-react-airbnb.netlify.app/)

### [solo-travel-journal](./solo-travel-journal/travel-jounal/)

[deployed-link](https://ari-react-travel-journal.netlify.app/)

---

## 3

- read/write: interactive sites!

* **Meme Generator**

- event listeners
- States -> variables inside components
- React.useState("hello") -> returns ["hello", f()]
- changing state w/ callback f()
- changing array states - [...prevState, ]

- Passing state to child & **Setting state from child**

* mini-challenges like Boxes one can use used to demonstrate the examples really well!

- dynamic styles \*
- conditional rendering w/ ternary and &&

* forms

- forms state object

- controlled components - `value={formData.email}` in input

```
<button></button>
```

inside a for is by default submit type

```
<form onSubmit={submitHandler}></form>
```

- useEffect - API fetch

### [meme-generator](./meme-generator/meme-generator/)

[deployed link](https://ari-meme-gen.netlify.app/)

---

## 4

- Notes App

---

Scrimba - Learn React
