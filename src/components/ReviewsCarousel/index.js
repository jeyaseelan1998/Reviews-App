// Write your code here
import './index.css'
import { Component } from 'react'

class ReviewsCarousel extends Component {
    state = {
        index : 0
    }

    nextReview = () => {
        const {index} = this.state
        const {reviewsList} = this.props
        if(index < reviewsList.length - 1) {
            this.setState(prev => ({index: prev.index + 1}))
        }
    }

    previousReview = () => {
        const {index} = this.state
        if(index > 0) {
            this.setState(prev => ({index: prev.index - 1}))
        }
    }

    render () {
        const {reviewsList} = this.props
        const {index} = this.state
        return(
            <div className='app-container'>
                <button className='button' type="button" onClick={this.previousReview}>
                    <img alt="left arrow" src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png" className='arrow-icon'/>
                </button>
                <div className='review-container'>
                    <h1 className='heading'>Reviews</h1>
                    <img className='profile-image' alt={reviewsList[index].username} src={reviewsList[index].imgUrl}/>
                    <p className='profile-name'>{reviewsList[index].username}</p>
                    <p className='company-name'>{reviewsList[index].companyName}</p>
                    <p className='review'>{reviewsList[index].description}</p>
                </div>
                <button className='button' type="button" onClick={this.nextReview}>
                    <img alt="right arrow" src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png" className='arrow-icon'/>
                </button>
            </div>
        )
    }
}

export default ReviewsCarousel