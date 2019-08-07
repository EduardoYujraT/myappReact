import React from 'react'
//import './style/Home.css'
import boatImage from '../assets/fondoReglamento.jpg';

/*
export const Home = () => {
    

    componentDidMount() {
        fetch("https://api.example.com/items")
          .then(res => res.json())
          .then(
            (result) => {
              this.setState({
                isLoaded: true,
                items: result.items
              });
            },
            // Note: it's important to handle errors here
            // instead of a catch() block so that we don't swallow
            // exceptions from actual bugs in components.
            (error) => {
              this.setState({
                isLoaded: true,
                error
              });
            }
          )
      }
    
    
    return (
        <div>
            Reglamento
        </div>
    )
}
*/
class Home extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        error: null,
        isLoaded: false,
        items: []
      };
    }
  
    componentDidMount() {
      fetch("https://api.github.com/repos/matiasalbacetti/LarrataFiles/contents/Reglamento.md")
        .then(res => res.json())
        .then(
          (result) => {
            this.setState({
              isLoaded: true,
              items:  decodeURIComponent(escape(window.atob( result.content ))) 
            });
          },
          // Note: it's important to handle errors here
          // instead of a catch() block so that we don't swallow
          // exceptions from actual bugs in components.
          (error) => {
            this.setState({
              isLoaded: true,
              error
            });
          }
        )
    }
  
    render() {
      const { error, isLoaded, items } = this.state;
      if (error) {
        return <div>Error: {error.message}</div>;
      } else if (!isLoaded) {
        return <div>Loading...</div>;
      } else {
        return (
         
          <div className="reglamento" dangerouslySetInnerHTML={ { __html: items } }></div>
        );
      }
    }
  }

  export default Home;