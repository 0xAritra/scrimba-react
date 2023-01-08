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

- page()
- <Page />

### Parent / Child Components

<Page />
  <Header />
  <MainContent />
  <Footer />

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

[deployed-link]()
