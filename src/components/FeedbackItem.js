import React from 'react'
import Card from './shared/Card'
import { FaTimes, FaEdit } from 'react-icons/fa'
import PropTypes from 'prop-types'
import { useContext } from 'react'
import FeedbackContext from '../context/FeedbackContext'

const FeedbackItem = ({ item }) => {  
  const {deleteFeedback, editFeedback} = useContext(FeedbackContext)

  return (
    <Card>
      <div className="num-display">{item.rating}</div>
      <FaTimes
        onClick={() => deleteFeedback(item.id)}
        color="red"
        className="close"
      />
      <FaEdit 
        className='edit'
        color='purple'
        onClick={() => editFeedback(item)}
      />
      <div className="text-display">{item.text}</div>
    </Card>
  )
}

FeedbackItem.propTypes = {
  item: PropTypes.object.isRequired,
}

export default FeedbackItem
