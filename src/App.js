import React from 'react';
import './App.css';

class App extends React.Component {
  state={
    memes: [],
    loading: false,
    text: ''
  }

  getMemes = async (e) => {
    e.preventDefault()
    this.setState({loading: true})
    var key = 'khF3tS3mArkkgXfLFPgI4YIKIEatC5Ta'
    var url = `http://api.giphy.com/v1/gifs/search?q=${this.state.text}&api_key=${key}`
    var r = await fetch(url)
    var json = await r.json()
    this.setState({memes: json.data, loading:false, text:''})

  }

  render() {
    var {memes, loading, text} = this.state
    return (
      <div className="App">
        <h1>MemeFinder</h1>
        <form className="App-header" onSubmit={this.getMemes}>
          <input value={text} placeholder="Search for memes here..."
          onChange = {e=> this.setState({text: e.target.value})}/>
          <button disabled={loading || !text} type="submit">Go</button>
        </form>
        <main>
          {memes.map(m=> {
            return <Image key={m.id}
            src={m.images.fixed_height.url}
            />
          })}
        </main>
      </div>
    );
  }

}

export default App;

function Image(props) {
  var {src} = props
  return (
    <div className="meme" onClick={() => window.open(src, '_blank')}>
      <img alt="meme" src={src}></img>
    </div>
  )
}


