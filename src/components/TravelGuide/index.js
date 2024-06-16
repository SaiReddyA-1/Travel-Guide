import {Component} from 'react'
import Loader from 'react-loader-spinner'
import './index.css'

const RenderCard = ({each}) => {
  return (
    <li className="cardContainer">
      <img src={each.imageUrl} alt={each.name} />
      <div className="textContainer">
        <h1 className="">{each.name}</h1>
        <p className="">{each.description}</p>
      </div>
    </li>
  )
}

class TravelGuide extends Component {
  state = {
    countryList: [],
    showContent: false,
  }
  componentDidMount() {
    this.getCountryList()
  }

  getCountryList = async () => {
    const response = await fetch('https://apis.ccbp.in/tg/packages')
    const data = await response.json()
    const listFetch = data.packages
    const newList = listFetch.map(each => {
      return {
        id: each.id,
        description: each.description,
        imageUrl: each.image_url,
        name: each.name,
      }
    })
    this.setState({
      countryList: newList,
      showContent: true,
    })
    console.log(newList)
  }

  renderSpinner() {
    return (
      <div data-testid="loader">
        <Loader type="BallTriangle" color="#00BFFF" height={40} width={40} />
      </div>
    )
  }

  render() {
    const {showContent, countryList} = this.state
    return (
      <div className="containerDiv">
        <h1 className="mainHeading">Travel Guide</h1>
        {!showContent && (
          <div className="spinnerContainer">{this.renderSpinner()}</div>
        )}
        {showContent && (
          <ul className="contentContainer">
            {countryList.map(each => {
              return <RenderCard key={each.id} each={each} />
            })}
          </ul>
        )}
      </div>
    )
  }
}

export default TravelGuide
