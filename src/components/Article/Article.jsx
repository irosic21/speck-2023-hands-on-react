import { SinglePage as SinglePageWrapper, SinglePageFigure, SinglePageImg, SinglePageContent } from './ArticleStyle'

import React from 'react'
import propTypes from 'prop-types'

const SinglePage = ({imgSrc,imgAlt,content}) => {
  return (
    <>
      <SinglePageWrapper>
        <SinglePageFigure>
          <SinglePageImg src={imgSrc} alt={imgAlt}/>
        </SinglePageFigure>
        <SinglePageContent>{content}</SinglePageContent>
      </SinglePageWrapper>
    </>
  )
}

SinglePage.propTypes = {
  imgSrc: propTypes.string,
  imgAlt: propTypes.string,
  content: propTypes.string
}

export default SinglePage