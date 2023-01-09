import { useEffect, useState } from "react"
// import memesData from "../memesData"
const Meme = () => {
  const [allMemes, setAllMemes] = useState({})
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "https://i.imgflip.com/1bij.jpg",
  })

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((res) => setAllMemes(res))
  }, [])

  const getMemeImage = (e) => {
    e.preventDefault()
    const data = allMemes.data.memes
    const randIndex = Math.floor(Math.random() * data.length)
    setMeme((prevMeme) => {
      return { ...prevMeme, randomImage: data[randIndex].url }
    })
  }

  const changeHandler = (e) => {
    const { name, value } = e.target
    setMeme((prevMeme) => {
      return {
        ...prevMeme,
        [name]: value,
      }
    })
  }

  return (
    <main>
      <form className="meme-inputs">
        <div>
          <input
            type="text"
            name="topText"
            value={meme.topText}
            onChange={changeHandler}
            placeholder="Top text"
          />
          <input
            type="text"
            name="bottomText"
            value={meme.bottomText}
            onChange={changeHandler}
            placeholder="Bottom text"
          />
        </div>
        <div>
          <input
            onClick={getMemeImage}
            type="submit"
            value="Get a new meme image  🖼"
          />
        </div>
      </form>
      <div className="meme">
        <img className="meme-img" src={meme.randomImage} alt="" />
        <p className="meme-text top-text">{meme.topText}</p>
        <p className="meme-text bottom-text">{meme.bottomText}</p>
      </div>
    </main>
  )
}
export default Meme
