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
    error: null, // Add error state for handling fetch errors
  }

  componentDidMount() {
    this.getCountryList()
  }

  getCountryList = async () => {
    try {
      const response = await fetch('https://apis.ccbp.in/tg/packages')
      if (!response.ok) {
        throw new Error('Failed to fetch data')
      }
      const data = await response.json()
      const newList = data.packages.map(each => ({
        id: each.id,
        description: each.description,
        imageUrl: each.image_url,
        name: each.name,
      }))
      this.setState({
        countryList: newList,
        showContent: true,
        error: null, // Reset error state on successful fetch
      })
    } catch (error) {
      console.error('Error fetching data:', error)
      this.setState({error: 'Failed to fetch data'})
    }
  }
  // eslint-disable-next-line class-methods-use-this
  renderSpinner() {
    return (
      <div data-testid="loader">
        <Loader type="BallTriangle" color="#00BFFF" height={40} width={40} />
      </div>
    )
  }

  render() {
    const {showContent, countryList, error} = this.state
    return (
      <div className="containerDiv">
        <h1 className="mainHeading">Travel Guide</h1>
        {error && <div className="errorContainer">{error}</div>}
        {!showContent && !error && (
          <div className="spinnerContainer">{this.renderSpinner()}</div>
        )}
        {showContent && (
          <ul className="contentContainer">
            {countryList.map(each => (
              <RenderCard key={each.id} each={each} />
            ))}
          </ul>
        )}
      </div>
    )
  }
}

export default TravelGuide
