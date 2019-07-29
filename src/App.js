import React from 'react';
import './App.css';
import { SearchInput, Pane, Button, Spinner } from 'evergreen-ui'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class App extends React.Component {
  state = {
    memes: [],
    loading: false,
    text: ''
  }

  getMemes = async (e) => {
    e.preventDefault()
    this.setState({ loading: true })
    var key = 'khF3tS3mArkkgXfLFPgI4YIKIEatC5Ta'
    var url = `http://api.giphy.com/v1/gifs/search?q=${this.state.text}&api_key=${key}`
    var r = await fetch(url)
    var json = await r.json()
    setTimeout(function() {
      this.setState({ memes: json.data, loading: false, text: '' })
    }.bind(this), 600)
  }

  render() {
    var { memes, loading, text } = this.state
    return (
      <div className="App">
        <h1>MemeFinder</h1>
        <form className="App-header" onSubmit={this.getMemes}>
          <Pane display="flex" justifyContent="center" alignItems="center" height={60} width={700} background="overlay" hoverElevation={4} className="container">
            <SearchInput value={text}
              width="90%"
              height={40}
              placeholder="Search for Memes here..."
              onChange={e => this.setState({ text: e.target.value })} />
            <Button appearance="primary" iconAfter="arrow-right" disabled={loading || !text} type="submit" intent="none" isLoading={loading} style={{
              position: "absolute",
              top: "14px",
              left: "calc(100% - 77px)",
              background: "aliceblue",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "black"
            }}>{ButtonToggle(loading)}</Button>
          </Pane>
        </form>
        <main>
          {loading && <Spinner size={64}/>}
          {memes.map(m => showMeme(m))}
        </main>
      </div>
    );
  }

}

export default App;

function Image(props) {
  var { src } = props
  return (
    <div className="meme" onClick={() => window.open(src, '_blank')}>
      <img alt="meme" src={src}></img>
    </div>
  )
}

function ButtonToggle(loading) {
  if (!loading) {
    return (<p style={{ display: "flex", justifyContent: "center", alignItems: "center", margin: "0px" }}>Go</p>)
  }
}

function showMeme(m) {
  return (
    <ReactCSSTransitionGroup
      transitionName="fade"
      transitionAppear={true}
      transitionAppearTimeout={500}
      transitionEnterTimeout={300}
      transitionEnter={true}
      transitionLeave={false}
      key={m.id}
    >
      <Image src={m.images.fixed_height.url} />
    </ReactCSSTransitionGroup>
  )
}


